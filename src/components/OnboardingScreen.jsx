import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    withDelay,
    withSequence,
    interpolateColor,
    interpolate,
    Extrapolate,
    Easing
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const OnboardingScreen = () => {
    const router = useRouter();
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const progress = useSharedValue(0);
    const animatedOpacity = useSharedValue(1);
    const bounceValue = useSharedValue(1);

    // Set onboarding as viewed in AsyncStorage
    const markOnboardingComplete = async () => {
        try {
            await AsyncStorage.setItem('@onboarding_complete', 'true');
        } catch (error) {
            console.log('Error saving onboarding status:', error);
        }
    };

    const handleGetStarted = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

        // More dramatic exit animation
        animatedOpacity.value = withSequence(
            withTiming(0.8, { duration: 100 }),
            withTiming(0, { duration: 400, easing: Easing.out(Easing.ease) }, () => {
                markOnboardingComplete();
                router.replace('/');
            })
        );
    };

    const handleSkip = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

        // Faster exit animation for skip
        animatedOpacity.value = withTiming(0, { duration: 300 }, () => {
            markOnboardingComplete();
            router.replace('/');
        });
    };

    const handleNext = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        if (currentIndex < onboardingData.length - 1) {
            // Add a slight bounce effect when navigating

            bounceValue.value = withSequence(
                withTiming(1.03, { duration: 100 }),
                withTiming(1, { duration: 100 })
            );

            carouselRef.current?.scrollTo({ index: currentIndex + 1, animated: true });
        } else {
            handleGetStarted();
        }
    };

    const containerAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: animatedOpacity.value,
        };
    });

    // Onboarding data from your Figma designs
    const onboardingData = [
        {
            title: 'Welcome to BinHero',
            description: "Let's make waste disposal smarter, cleaner, and more exciting! With BinHero, you can turn everyday actions into something meaningful – and fun!",
            image: require('../../assets/images/logo-onboarding-screen-1.png'),
        },
        {
            title: 'Find & Scan Waste',
            description: "Use your phone's camera to scan waste in your surroundings. The app will tell you what kind of trash it is – so you know exactly what to do next.",
            image: require('../../assets/images/logo-onboarding-screen-2.png'),
        },
        {
            title: 'Throw it in the Right Bin',
            description: "Once you know what type of waste it is, throw it into the correct bin and earn points! It's simple, rewarding, and helps the planet too.",
            image: require('../../assets/images/logo-onboarding-screen-3.png'),
        },
        {
            title: 'Play & Compete with Others',
            description: "Take part in challenges, earn badges, climb the leaderboard, and show your eco-skills! You can play solo, go head-to-head with others, or team up to win.",
            image: require('../../assets/images/logo-onboarding-screen-4.png'),
        },
        {
            title: 'Pin a Bin, Keep it Clean',
            description: "Help your community by adding new dustbin locations on the map. The more bins everyone shares, the cleaner our surroundings become.",
            image: require('../../assets/images/logo-onboarding-screen-5.png'),
        },
    ];

    // Custom pagination dots with enhanced animations
    const Pagination = ({ length, progress }) => {
        return (
            <View className="flex-row justify-center items-center mt-4 space-x-2">
                {Array.from({ length }).map((_, index) => {
                    return (
                        <PaginationDot
                            key={index}
                            index={index}
                            length={length}
                            progress={progress}
                        />
                    );
                })}
            </View>
        );
    };

    const PaginationDot = ({ index, length, progress }) => {
        const animatedDotStyle = useAnimatedStyle(() => {
            const inputRange = [(index - 1), index, (index + 1)];

            // Enhanced width animation with more dramatic size change
            const width = interpolate(
                progress.value,
                inputRange,
                [8, 32, 8],
                Extrapolate.CLAMP,
            );

            // Add height animation to create a "squeeze" effect
            const height = interpolate(
                progress.value,
                inputRange,
                [8, 10, 8],
                Extrapolate.CLAMP,
            );

            const opacity = interpolate(
                progress.value,
                inputRange,
                [0.4, 1, 0.4],
                Extrapolate.CLAMP,
            );

            // Smoother color transition
            const backgroundColor = interpolateColor(
                progress.value,
                inputRange,
                ['#D9D9D9', '#00A653', '#D9D9D9'],
            );

            return {
                width,
                height,
                opacity,
                backgroundColor,
            };
        });

        return (
            <Animated.View
                className="rounded-full ml-1"
                style={animatedDotStyle}
            />
        );
    };

    const OnboardingItem = ({ item, index }) => {
        // Animation values
        const scaleAnim = useSharedValue(index === currentIndex ? 1 : 0.85);
        const opacityAnim = useSharedValue(index === currentIndex ? 1 : 0.5);

        // Additional animations for element entrance
        const imageTranslateY = useSharedValue(index === currentIndex ? 0 : 30);
        const titleTranslateY = useSharedValue(index === currentIndex ? 0 : 20);
        const descTranslateY = useSharedValue(index === currentIndex ? 0 : 20);

        useEffect(() => {
            if (index === currentIndex) {
                // Current slide animations - staggered entrance
                scaleAnim.value = withSpring(1, {
                    damping: 15,
                    stiffness: 90
                });
                opacityAnim.value = withTiming(1, { duration: 400 });

                // Staggered animations for content
                imageTranslateY.value = withSpring(0, {
                    damping: 15,
                    stiffness: 80
                });
                titleTranslateY.value = withDelay(100, withSpring(0, {
                    damping: 15,
                    stiffness: 80
                }));
                descTranslateY.value = withDelay(150, withSpring(0, {
                    damping: 15,
                    stiffness: 80
                }));
            } else {
                // Not current slide
                scaleAnim.value = withSpring(0.85);
                opacityAnim.value = withTiming(0.5, { duration: 300 });

                // Reset positions for when this slide becomes active again
                imageTranslateY.value = 30;
                titleTranslateY.value = 20;
                descTranslateY.value = 20;
            }
        }, [currentIndex, index]);

        const itemAnimatedStyle = useAnimatedStyle(() => {
            return {
                transform: [{ scale: scaleAnim.value }],
                opacity: opacityAnim.value,
            };
        });

        const imageAnimatedStyle = useAnimatedStyle(() => {
            return {
                transform: [{ translateY: imageTranslateY.value }],
            };
        });

        const titleAnimatedStyle = useAnimatedStyle(() => {
            return {
                transform: [{ translateY: titleTranslateY.value }],
                opacity: interpolate(
                    titleTranslateY.value,
                    [20, 0],
                    [0.5, 1],
                    Extrapolate.CLAMP
                ),
            };
        });

        const descAnimatedStyle = useAnimatedStyle(() => {
            return {
                transform: [{ translateY: descTranslateY.value }],
                opacity: interpolate(
                    descTranslateY.value,
                    [20, 0],
                    [0.5, 1],
                    Extrapolate.CLAMP
                ),
            };
        });

        return (
            <Animated.View
                className="w-full h-full items-center justify-start"
                style={itemAnimatedStyle}
            >
                {/* Top background */}
                <LinearGradient
                    colors={['#c5ebda', '#d8f3e6']}
                    start={{ x: 0, y: 0 }}
                    className="w-full h-[100%] absolute top-0"
                />

                {/* Logo at the top of the screen with animation */}
                <View className="w-full h-[45%] items-center justify-center pt-20">
                    <Animated.Image
                        source={item.image}
                        className="w-[348px] h-[290px]"
                        resizeMode="contain"
                        style={imageAnimatedStyle}
                    />
                </View>

                {/* Rectangle shape with content inside */}
                <View className="w-full h-[55%] relative">
                    <Image
                        source={require('../../assets/images/onboarding-rectangle.png')}
                        className="w-full h-full absolute"
                    />

                    {/* Content overlay on top of the rectangle */}
                    <View className="w-full h-full px-8 pt-16 items-center">
                        <Animated.Text
                            className="text-2xl font-bold text-white mb-4 text-center pt-16"
                            style={titleAnimatedStyle}
                        >
                            {item.title}
                        </Animated.Text>

                        <Animated.Text
                            className="text-base text-white text-center leading-6"
                            style={descAnimatedStyle}
                        >
                            {item.description}
                        </Animated.Text>

                        {/* Bottom controls positioned relative to the rectangle */}
                        <View className="w-full absolute bottom-12 px-4">
                            <Pagination
                                length={onboardingData.length}
                                progress={progress}
                            />

                            <View className="flex-row justify-between items-center mt-8">
                                <TouchableOpacity
                                    onPress={handleSkip}
                                    className="px-4 py-2"
                                >
                                    <Text className="text-white font-medium text-base">Skip</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={handleNext}
                                    className="px-8 py-3"
                                >
                                    <Text className="text-white font-medium text-base">
                                        {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Animated.View>
        );
    };

    return (
        <Animated.View className="flex-1 bg-white" style={containerAnimatedStyle}>
            <Carousel
                ref={carouselRef}
                width={SCREEN_WIDTH}
                height={SCREEN_HEIGHT}
                data={onboardingData}
                renderItem={({ item, index }) =>
                    <OnboardingItem item={item} index={index} />
                }
                onProgressChange={(offsetProgress) => {
                    progress.value = offsetProgress;
                }}
                onSnapToItem={(index) => {
                    setCurrentIndex(index);
                }}
                mode="horizontal-stack"
                modeConfig={{
                    snapDirection: 'left',
                    stackInterval: 12,
                }}
            />
        </Animated.View>
    );
};

export default OnboardingScreen;