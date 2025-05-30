import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Camera } from 'expo-camera';
import { useState, useEffect } from "react";

const CameraPermissionScreen = ({ onPermissionGranted, onSkip }) => {
    const [hasPermission, setHasPermission] = useState(null);

    // Function to request camera permission
    const requestCameraPermission = async () => {
        try {
            const { status } = await Camera.requestCameraPermissionsAsync();
            const granted = status === 'granted';
            setHasPermission(granted);

            // Call the callback with the permission result
            if (onPermissionGranted) {
                onPermissionGranted(granted);
            }
        } catch (error) {
            console.log("Error requesting camera permission:", error);
            if (onPermissionGranted) {
                onPermissionGranted(false);
            }
        }
    };

    // Handle skip action
    const handleSkipPress = () => {
        if (onSkip) {
            onSkip();
        }
    };

    return (
        <>
            {/* Top Section with Camera Image */}
            <View className="w-full h-[45%] items-center justify-center pt-20">
                <Image
                    source={require("../../assets/images/camera-icon.png")}
                    className="w-60 h-60"
                    resizeMode="contain"
                />
            </View>

            <View className="w-full h-[59%] relative" >
                <Image
                    source={require('../../assets/images/onboarding-rectangle.png')}
                    className="w-full h-full absolute"
                    resizeMode="cover"
                />

                {/* Content overlay on top of the rectangle */}
                <View className="w-full h-full px-8 pt-24">
                    <Text
                        className="text-2xl font-bold text-white mb-4 pt-10"
                    >
                        Allow camera access
                    </Text>

                    <Text
                        className="text-base text-white leading-6"
                    >
                        To help you scan and sort waste correctly, BinHero needs access to your camera.
                    </Text>

                    {/* Allow Access Button */}
                    <TouchableOpacity
                        onPress={requestCameraPermission}
                        className="bg-white py-4 rounded-full items-center justify-center mb-7 mt-12"
                    >
                        <Text className="text-green-500 text-lg font-semibold">Allow Access</Text>
                    </TouchableOpacity>

                    {/* "I'll do it later" Button */}
                    <TouchableOpacity
                        onPress={handleSkipPress}
                        className="items-center justify-center"
                    >
                        <Text className="text-white text-base font-semibold">I'll do it later</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default CameraPermissionScreen;