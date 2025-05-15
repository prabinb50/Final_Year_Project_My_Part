import { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    interpolateColor,
    Extrapolate,
    Easing,
    runOnJS
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
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);

    const progress = useSharedValue(0);

    // Track which slides have been pre-rendered
    const [preRenderedSlides, setPreRenderedSlides] = useState({ 0: true });

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
        markOnboardingComplete();
        router.replace('/');
    };

    const handleSkip = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        markOnboardingComplete();
        router.replace('/');
    };

    const beginTransition = () => {
        setIsTransitioning(true);
    };

    const endTransition = () => {
        setIsTransitioning(false);
    };

    // Pre-render adjacent slides to prevent layout flashing
    useEffect(() => {
        if (currentIndex + 1 < onboardingData.length) {
            setPreRenderedSlides(prev => ({ ...prev, [currentIndex + 1]: true }));
        }
        if (currentIndex - 1 >= 0) {
            setPreRenderedSlides(prev => ({ ...prev, [currentIndex - 1]: true }));
        }
        if (isInitialRender) {
            setIsInitialRender(false);
        }
    }, [currentIndex, isInitialRender]);

    const handleNext = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        if (currentIndex < onboardingData.length - 1) {
            if (isTransitioning) return;
            beginTransition();
            carouselRef.current?.scrollTo({ index: currentIndex + 1, animated: true });
        } else {
            handleGetStarted();
        }
    };

    // Onboarding data
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

    // Custom pagination dots
    const Pagination = ({ length, progress }) => {
        return (
            <View className="flex-row justify-center items-center mt-4 space-x-2">
                {Array.from({ length }).map((_, index) => (
                    <PaginationDot
                        key={index}
                        index={index}
                        length={length}
                        progress={progress}
                    />
                ))}
            </View>
        );
    };

    const PaginationDot = ({ index, length, progress }) => {
        const animatedDotStyle = useAnimatedStyle(() => {
            const inputRange = [(index - 1), index, (index + 1)];
            const width = interpolate(
                progress.value,
                inputRange,
                [8, 32, 8],
                Extrapolate.CLAMP,
            );
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
        const isActive = index === currentIndex;
        const isPending = Math.abs(index - currentIndex) === 1;
        const isPreRendered = preRenderedSlides[index] || false;

        if (!isActive && !isPending && !isPreRendered && !isInitialRender) {
            return <View className="w-full h-full" />;
        }

        // Animation values for logo slide
        const logoTranslateX = useSharedValue(isActive ? 0 : index > currentIndex ? SCREEN_WIDTH : -SCREEN_WIDTH);
        const logoOpacity = useSharedValue(isActive ? 1 : 0);

        // Animation values for rectangle content fade
        const contentOpacity = useSharedValue(isActive ? 1 : 0);

        useEffect(() => {
            if (index === currentIndex) {
                // Animate logo to slide in from the left
                logoTranslateX.value = withTiming(0, { duration: 300, easing: Easing.out(Easing.ease) });
                logoOpacity.value = withTiming(1, { duration: 300 });
                // Fade in content
                contentOpacity.value = withTiming(1, { duration: 300 }, () => {
                    runOnJS(endTransition)();
                });
            } else {
                // Animate logo to slide out to the right if moving backward, or prepare to slide in from the left
                logoTranslateX.value = withTiming(
                    index > currentIndex ? SCREEN_WIDTH : -SCREEN_WIDTH,
                    { duration: 300, easing: Easing.out(Easing.ease) }
                );
                logoOpacity.value = withTiming(0, { duration: 300 });
                // Fade out content
                contentOpacity.value = withTiming(0, { duration: 300 });
            }
        }, [currentIndex, index]);

        const logoAnimatedStyle = useAnimatedStyle(() => {
            return {
                transform: [{ translateX: logoTranslateX.value }],
                opacity: logoOpacity.value,
            };
        });

        const contentAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: contentOpacity.value,
            };
        });

        return (
            <Animated.View className="w-full h-full items-center justify-start">
                {/* Top background */}
                <LinearGradient
                    colors={['#c5ebda', '#d8f3e6']}
                    start={{ x: 0, y: 0 }}
                    className="w-full h-[100%] absolute top-0"
                />

                {/* Logo at the top of the screen with slide animation */}
                <View className="w-full h-[45%] items-center justify-center pt-20">
                    <Animated.Image
                        source={item.image}
                        className="w-[348px] h-[290px]"
                        resizeMode="contain"
                        style={logoAnimatedStyle}
                    />
                </View>

                {/* Rectangle shape with content inside */}
                <Animated.View className="w-full h-[55%] relative" style={contentAnimatedStyle}>
                    <Image
                        source={require('../../assets/images/onboarding-rectangle.png')}
                        className="w-full h-full absolute"
                    />

                    {/* Content overlay on top of the rectangle */}
                    <View className="w-full h-full px-8 pt-16 items-center">
                        <Text
                            className="text-2xl font-bold text-white mb-4 text-center pt-16"
                        >
                            {item.title}
                        </Text>

                        <Text
                            className="text-base text-white text-center leading-6"
                        >
                            {item.description}
                        </Text>

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
                                    disabled={isTransitioning}
                                >
                                    <Text className="text-white font-medium text-base">Skip</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={handleNext}
                                    className="px-8 py-3 bg-white/20 rounded-full"
                                    disabled={isTransitioning}
                                >
                                    <Text className="text-white font-medium text-base">
                                        {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </Animated.View>
        );
    };

    return (
        <View className="flex-1 bg-white">
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
                onScrollBegin={() => {
                    beginTransition();
                }}
                enabled={!isTransitioning}
                loop={false}
                windowSize={3}
                defaultIndex={0}
                simultaneousGestures={[]}
                layoutCardOffset={18}
                scrollAnimationDuration={400}
            />
        </View>
    );
};

export default OnboardingScreen;