// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
// import { CameraView } from 'expo-camera';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import ResultModal from '../../src/components/ResultModal';
// import { detectWaste } from '../../utils/dummyWasteDetection';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { requestCameraPermissionsAsync } from 'expo-camera';

// export default function WasteDetectionScreen() {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [cameraRef, setCameraRef] = useState(null);
//     const [isScanning, setIsScanning] = useState(false);
//     const [result, setResult] = useState(null);
//     const [modalVisible, setModalVisible] = useState(false);
//     const router = useRouter();

//     // Request camera permission on component mount
//     useEffect(() => {
//         (async () => {
//             try {
//                 // Check if permission was already handled in onboarding
//                 const permissionFromOnboarding = await AsyncStorage.getItem('cameraPermissionGranted');

//                 if (permissionFromOnboarding === 'true') {
//                     // Permission already granted during onboarding
//                     setHasPermission(true);
//                 } else {
//                     // Request permission if not granted during onboarding or status unknown
//                     const { status } = await requestCameraPermissionsAsync();
//                     setHasPermission(status === 'granted');

//                     // Update stored status
//                     await AsyncStorage.setItem('cameraPermissionGranted', status === 'granted' ? 'true' : 'false');
//                 }
//             } catch (error) {
//                 console.log("Error checking camera permissions:", error);
//                 setHasPermission(false);
//             }
//         })();
//     }, []);

//     // Handle waste scanning
//     const handleScan = async () => {
//         if (isScanning) return;

//         setIsScanning(true);
//         try {
//             // In a real implementation, you would take a photo here
//             // const photo = await cameraRef.takePictureAsync();

//             // Call dummy detection (will be replaced with real API later)
//             const detectionResult = await detectWaste();

//             // Set result and show modal
//             setResult(detectionResult);
//             setModalVisible(true);
//         } catch (error) {
//             console.error("Scanning failed:", error);
//         } finally {
//             setIsScanning(false);
//         }
//     };

//     // Handle scan again action
//     const handleScanAgain = () => {
//         setModalVisible(false);
//         setTimeout(() => {
//             setResult(null);
//         }, 300);
//     };

//     // Go back to home
//     const handleBackToHome = () => {
//         setModalVisible(false);
//         router.replace('/home');
//     };

//     // Handle permission denied
//     if (hasPermission === null) {
//         return <View className="flex-1 justify-center items-center"><Text>Requesting camera permission...</Text></View>;
//     }

//     if (hasPermission === false) {
//         return (
//             <SafeAreaView className="flex-1 justify-center items-center p-5">
//                 <Ionicons name="help-circle-outline" size={60} color="gray" />
//                 <Text className="text-lg text-center mt-4">Camera access denied</Text>
//                 <Text className="text-gray-500 text-center mt-2">
//                     We need camera access to scan waste items. Please enable camera permissions in your device settings.
//                 </Text>
//                 <TouchableOpacity
//                     className="mt-6 bg-[#00A653] py-3 px-6 rounded-full"
//                     onPress={() => router.replace('/home')}
//                 >
//                     <Text className="text-white font-semibold">Back to Home</Text>
//                 </TouchableOpacity>
//             </SafeAreaView>
//         );
//     }

//     return (
//         <SafeAreaView className="flex-1 bg-black">
//             <View style={{ flex: 1 }}>
//                 {/* Camera Preview - now without children */}
//                 <CameraView
//                     ref={ref => setCameraRef(ref)}
//                     style={StyleSheet.absoluteFillObject}
//                     facing="back"
//                 />
                
//                 {/* Overlay content - now absolutely positioned */}
//                 <View style={StyleSheet.absoluteFillObject} className="flex-1">
//                     {/* Header */}
//                     <View className="flex-row justify-between items-center p-4">
//                         <TouchableOpacity
//                             onPress={() => router.replace('/home')}
//                             className="bg-black/30 p-2 rounded-full"
//                         >
//                             <Ionicons name="arrow-back" size={24} color="white" />
//                         </TouchableOpacity>

//                         <Text className="text-white font-semibold text-lg">Waste Scanner</Text>

//                         <View style={{ width: 40 }} />
//                     </View>

//                     {/* Center scan frame */}
//                     <View className="flex-1 justify-center items-center px-8">
//                         <View className="w-72 h-72 border-2 border-[#00A653] rounded-lg justify-center items-center">
//                             {isScanning ? (
//                                 <View className="bg-black/50 p-4 rounded-lg items-center">
//                                     <ActivityIndicator size="large" color="#00A653" />
//                                     <Text className="text-white mt-2">Scanning...</Text>
//                                 </View>
//                             ) : (
//                                 <View className="items-center">
//                                     <Ionicons name="scan-outline" size={60} color="#00A653" />
//                                     <Text className="text-white mt-2 text-center">
//                                         Position waste item in the frame
//                                     </Text>
//                                 </View>
//                             )}
//                         </View>

//                         <Text className="text-white text-center mt-6 px-6 opacity-80">
//                             Make sure the waste item is clearly visible and centered in the frame
//                         </Text>
//                     </View>

//                     {/* Bottom controls */}
//                     <View className="items-center mb-10">
//                         <TouchableOpacity
//                             className="bg-[#00A653] w-16 h-16 rounded-full items-center justify-center"
//                             onPress={handleScan}
//                             disabled={isScanning}
//                         >
//                             <Ionicons name="camera" size={30} color="white" />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>

//             {/* Result Modal */}
//             <ResultModal
//                 visible={modalVisible}
//                 result={result}
//                 onClose={handleBackToHome}
//                 onScanAgain={handleScanAgain}
//             />
//         </SafeAreaView>
//     );
// }

import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
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

                        <Text className="text-white font-semibold text-lg">Waste Scanner</Text>

                        {/* Camera flip button  */}
                        <TouchableOpacity
                            onPress={toggleCameraFacing}
                            className="bg-red-500 p-2 rounded-full"
                        >
                            <Ionicons name="camera-reverse-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Center scan frame */}
                    <View className="flex-1 justify-center items-center px-8">
                        <View className="w-72 h-72 border-2 border-[#00A653] rounded-lg justify-center items-center">
                            {isScanning ? (
                                <View className="bg-black/50 p-4 rounded-lg items-center">
                                    <ActivityIndicator size="large" color="#00A653" />
                                    <Text className="text-white mt-2">Scanning...</Text>
                                </View>
                            ) : (
                                <View className="items-center">
                                    <Ionicons name="scan-outline" size={60} color="#00A653" />
                                    <Text className="text-white mt-2 text-center">
                                        Position waste item in the frame
                                    </Text>
                                </View>
                            )}
                        </View>

                        <Text className="text-white text-center mt-6 px-6 opacity-80">
                            Make sure the waste item is clearly visible and centered in the frame
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