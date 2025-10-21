import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { CameraView } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ResultModal from '../../src/components/ResultModal';
import { detectWaste } from '../../utils/dummyWasteDetection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestCameraPermissionsAsync } from 'expo-camera';

export default function WasteDetectionScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const [result, setResult] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [cameraFacing, setCameraFacing] = useState('back'); // default to back camera
    const router = useRouter();
    
    // Animation for scanning line
    const scanLineAnimation = useRef(new Animated.Value(0)).current;
    
    // Start scan line animation when scanning begins
    useEffect(() => {
        if (isScanning) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(scanLineAnimation, {
                        toValue: 1,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scanLineAnimation, {
                        toValue: 0,
                        duration: 1500,
                        useNativeDriver: true,
                    })
                ])
            ).start();
        } else {
            scanLineAnimation.setValue(0);
        }
        
        return () => {
            scanLineAnimation.stopAnimation();
        };
    }, [isScanning]);

    // Request camera permission on component mount
    useEffect(() => {
        (async () => {
            try {
                // Check if permission was already handled in onboarding
                const permissionFromOnboarding = await AsyncStorage.getItem('cameraPermissionGranted');

                if (permissionFromOnboarding === 'true') {
                    // Permission already granted during onboarding
                    setHasPermission(true);
                } else {
                    // Request permission if not granted during onboarding or status unknown
                    const { status } = await requestCameraPermissionsAsync();
                    setHasPermission(status === 'granted');

                    // Update stored status
                    await AsyncStorage.setItem('cameraPermissionGranted', status === 'granted' ? 'true' : 'false');
                }
            } catch (error) {
                console.log("Error checking camera permissions:", error);
                setHasPermission(false);
            }
        })();
    }, []);

    // Toggle camera between front and back
    const toggleCameraFacing = () => {
        setCameraFacing(prev => prev === 'front' ? 'back' : 'front');
    };

    // Handle waste scanning
    const handleScan = async () => {
        if (isScanning) return;

        setIsScanning(true);
        try {
            // In a real implementation, you would take a photo here
            // const photo = await cameraRef.takePictureAsync();

            // Call dummy detection (will be replaced with real API later)
            const detectionResult = await detectWaste();

            // Set result and show modal
            setResult(detectionResult);
            setModalVisible(true);
        } catch (error) {
            console.error("Scanning failed:", error);
        } finally {
            setIsScanning(false);
        }
    };

    // Handle scan again action
    const handleScanAgain = () => {
        setModalVisible(false);
        setTimeout(() => {
            setResult(null);
        }, 300);
    };

    // Go back to home
    const handleBackToHome = () => {
        setModalVisible(false);
        router.replace('/home');
    };

    // Handle permission denied
    if (hasPermission === null) {
        return <View className="flex-1 justify-center items-center"><Text>Requesting camera permission...</Text></View>;
    }

    if (hasPermission === false) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center p-5">
                <Ionicons name="help-circle-outline" size={60} color="gray" />
                <Text className="text-lg text-center mt-4">Camera access denied</Text>
                <Text className="text-gray-500 text-center mt-2">
                    We need camera access to scan waste items. Please enable camera permissions in your device settings.
                </Text>
                <TouchableOpacity
                    className="mt-6 bg-[#00A653] py-3 px-6 rounded-full"
                    onPress={() => router.replace('/home')}
                >
                    <Text className="text-white font-semibold">Back to Home</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    const translateY = scanLineAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 240] // Height of scanning area minus line thickness
    });

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View style={{ flex: 1 }}>
                {/* Camera Preview */}
                <CameraView
                    ref={ref => setCameraRef(ref)}
                    style={StyleSheet.absoluteFillObject}
                    facing={cameraFacing}
                />

                {/* Overlay content */}
                <View style={StyleSheet.absoluteFillObject} className="flex-1">
                    {/* Header */}
                    <View className="flex-row justify-between items-center p-4">
                        <TouchableOpacity
                            onPress={() => router.replace('/home')}
                            className="bg-black/30 p-2 rounded-full"
                        >
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </TouchableOpacity>

                        <Text className="text-white font-semibold text-lg mt-1">
                            {isScanning 
                                ? "Scanning..." 
                                : "Scan Your Waste"}
                        </Text>

                        {/* Camera flip button */}
                        <TouchableOpacity
                            onPress={toggleCameraFacing}
                            className="bg-black/30 p-2 rounded-full"
                        >
                            <Ionicons name="camera-reverse-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Center scan frame */}
                    <View className="flex-1 justify-center items-center px-8">
                        <View className="w-72 h-72 relative">
                            {/* Scan-outline style corner brackets */}
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: 65,
                                height: 65,
                                borderTopWidth: 4,
                                borderLeftWidth: 4,
                                borderColor: '#00A653',
                                borderTopLeftRadius: 8,
                            }} />
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: 65,
                                height: 65,
                                borderTopWidth: 4,
                                borderRightWidth: 4,
                                borderColor: '#00A653',
                                borderTopRightRadius: 8,
                            }} />
                            <View style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: 65,
                                height: 65,
                                borderBottomWidth: 4,
                                borderLeftWidth: 4,
                                borderColor: '#00A653',
                                borderBottomLeftRadius: 8,
                            }} />
                            <View style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                width: 65,
                                height: 65,
                                borderBottomWidth: 4,
                                borderRightWidth: 4,
                                borderColor: '#00A653',
                                borderBottomRightRadius: 8,
                            }} />

                            {isScanning && (
                                <>
                                    {/* Animated scanning line */}
                                    <Animated.View
                                        style={{
                                            width: '100%',
                                            height: 2,
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            position: 'absolute',
                                            left: 0,
                                            shadowColor: '#00A653',
                                            shadowOffset: { width: 0, height: 0 },
                                            shadowOpacity: 0.8,
                                            shadowRadius: 5,
                                            transform: [{ translateY }]
                                        }}
                                    />
                                </>
                            )}
                        </View>

                        {/* Informational text below frame */}
                        <Text className="text-white text-center mt-6 px-6 opacity-80">
                            {isScanning 
                                ? "We are scanning your waste. Please Wait!" 
                                : "Point your camera at the item and hold steady. We'll detect the type of waste and reward you instantly!"}
                        </Text>
                    </View>

                    {/* Bottom controls */}
                    <View className="items-center mb-10">
                        <TouchableOpacity
                            className="bg-[#00A653] w-16 h-16 rounded-full items-center justify-center"
                            onPress={handleScan}
                            disabled={isScanning}
                        >
                            <Ionicons name="camera" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Result Modal */}
            <ResultModal
                visible={modalVisible}
                result={result}
                onClose={handleBackToHome}
                onScanAgain={handleScanAgain}
            />
        </SafeAreaView>
    );
}