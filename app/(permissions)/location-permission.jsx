import { useRouter } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import LocationPermissionScreen from "../../src/components/LocationPermissionScreen";

const LocationPermission = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(true);

    // Set up mounted state to prevent state updates after unmounting
    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const handleAllowAccess = async (granted) => {
        if (!isMounted) return;

        if (granted) {
            // Navigate to the next screen after permission is granted
            router.replace("/home"); // Using replace to prevent back navigation to permission screen
        }
    };

    const handleSkip = () => {
        if (!isMounted) return;

        // Navigate without permission
        router.replace("/home"); // Using replace to prevent back navigation
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FAF9F6"
            />

            <LocationPermissionScreen
                onPermissionGranted={handleAllowAccess}
                onSkip={handleSkip}
            />
        </SafeAreaView>
    );
};

export default LocationPermission;