import { useRouter } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CameraPermissionScreen from "../../src/components/CameraPermissionScreen";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera } from 'expo-camera';

const CameraPermission = () => {
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
            // Request actual permission using Expo Camera API
            const { status } = await Camera.requestCameraPermissionsAsync();
            
            // Store permission status for future reference
            await AsyncStorage.setItem('cameraPermissionGranted', status === 'granted' ? 'true' : 'false');
            
            // Navigate to the next screen after permission is granted
            router.replace("/location-permission"); 
        }
    };

    const handleSkip = async () => {
        if (!isMounted) return;

        // Store skipped status
        await AsyncStorage.setItem('cameraPermissionGranted', 'false');
        
        // Navigate without permission
        router.replace("/location-permission");
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FAF9F6"
            />

            <CameraPermissionScreen
                onPermissionGranted={handleAllowAccess}
                onSkip={handleSkip}
            />
        </SafeAreaView>
    );
};

export default CameraPermission;