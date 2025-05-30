import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Location from 'expo-location';
import { useState } from "react";

const LocationPermissionScreen = ({ onPermissionGranted, onSkip }) => {
    const [hasPermission, setHasPermission] = useState(null);

    // Function to request location permission
    const requestLocationPermission = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            const granted = status === 'granted';
            setHasPermission(granted);

            // Call the callback with the permission result
            if (onPermissionGranted) {
                onPermissionGranted(granted);
            }
        } catch (error) {
            console.log("Error requesting location permission:", error);
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
            {/* Top Section with Map Image */}
            <View className="w-full h-[45%] items-center justify-center pt-20">
                <Image
                    source={require("../../assets/images/map.png")}
                    className="w-60 h-60"
                    resizeMode="contain"
                />
            </View>

            {/* Bottom Green Section */}
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
                        Allow location access
                    </Text>

                    <Text
                        className="text-base text-white leading-6"
                    >
                        BinHero uses your location to show nearby dustbins and help you add new ones for others.
                    </Text>

                    {/* Allow Access Button */}
                    <TouchableOpacity
                        onPress={requestLocationPermission}
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

export default LocationPermissionScreen;