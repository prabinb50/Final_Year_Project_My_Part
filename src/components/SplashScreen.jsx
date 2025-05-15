import { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';
import Reanimated from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    const router = useRouter();

    // Animation values
    const scale = useSharedValue(1);
    const textColor = useSharedValue(0);
    const textTranslateY = useSharedValue(0);

    useEffect(() => {
        // Start animations after a delay
        const timer = setTimeout(() => {
            // Circle expansion animation
            scale.value = withTiming(15, { duration: 800 });

            // Text color transition animation
            textColor.value = withTiming(1, { duration: 600 });

            // Move text up
            textTranslateY.value = withTiming(-22, { duration: 400 }, () => {
                // Navigate to onboarding after animations complete
                runOnJS(checkOnboardingStatus)();
            });
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const checkOnboardingStatus = async () => {
        try {
            const onboardingComplete = await AsyncStorage.getItem('@onboarding_complete');

            // Wait for a bit to ensure green background is fully visible
            setTimeout(() => {
                if (onboardingComplete === 'true') {
                    // Skip onboarding if already completed
                    router.replace('/');
                } else {
                    // Show onboarding for first-time users
                    router.replace('/(introduction)/onboarding');
                }
            }, 1000);
        } catch (error) {
            console.log('Error checking onboarding status:', error);
            // Default to showing onboarding if there's an error
            setTimeout(() => {
                router.replace('/(introduction)/onboarding');
            }, 1000);
        }
    };

    // Animated styles
    const circleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const textStyle = useAnimatedStyle(() => {
        const color = textColor.value === 0 ? '#00A653' : '#FFFFFF';
        return {
            color,
            transform: [{ translateY: textTranslateY.value }],
            // fontFamily: 'Poppins_700Bold',
        };
    });

    return (
        <View className="flex-1 bg-white justify-center items-center overflow-hidden">
            <View className="items-center z-2">
                {/* Animated circle background */}
                <View className="absolute w-[172px] h-[172px] justify-center items-center">
                    <Reanimated.View
                        className="absolute bg-[#66CA98] w-[172px] h-[172px] rounded-full"
                        style={circleStyle}
                    />
                </View>

                {/* Static logo */}
                <View className="w-[172px] h-[172px] justify-center items-center z-3">
                    <Image
                        source={require('../../assets/images/logo.png')}
                        className="w-[135px] h-[133px] z-3"
                        resizeMode="contain"
                    />
                </View>

                {/* Animated title text */}
                <Reanimated.Text
                    className="text-3xl font-bold z-3 pt-3 pl-2.5"
                    style={textStyle}
                >
                    BINHERO
                </Reanimated.Text>
            </View>
        </View>
    );
};

export default SplashScreen;

