import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const CameraScreen = () => {
    // State for camera permissions and references
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    // Request camera permissions when component mounts
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Show loading state while waiting for permission
    if (hasPermission === null) {
        return (
            <View className="flex-1 bg-black items-center justify-center">
                <Text className="text-white">Requesting camera permission...</Text>
            </View>
        );
    }

    // Show error state if permission denied
    if (hasPermission === false) {
        return (
            <View className="flex-1 bg-black items-center justify-center">
                <Text className="text-white">No access to camera</Text>
                <TouchableOpacity
                    className="mt-4 bg-green-600 px-4 py-2 rounded-full"
                    onPress={async () => {
                        const { status } = await Camera.requestCameraPermissionsAsync();
                        setHasPermission(status === 'granted');
                    }}
                >
                    <Text className="text-white font-bold">Request Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-black">
            {/* Camera Component */}
            <Camera
                className="flex-1"
                type={type}
                ref={ref => setCameraRef(ref)}
            >
                {/* UI Overlay */}
                <View className="flex-1 bg-transparent flex-col justify-between">
                    {/* Top Controls */}
                    <View className="flex-row justify-between p-5">
                        {/* Flash Button */}
                        <TouchableOpacity className="p-2">
                            <Ionicons name="flash-off" size={24} color="white" />
                        </TouchableOpacity>

                        {/* Camera Flip Button */}
                        <TouchableOpacity
                            className="p-2"
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}
                        >
                            <Ionicons name="camera-reverse" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Scanning Area Indicator */}
                    <View className="items-center">
                        <Text className="text-white bg-black/50 px-3 py-2 rounded">Position waste item in frame</Text>
                    </View>

                    {/* Bottom Controls */}
                    <View className="items-center mb-10">
                        {/* Capture Button */}
                        <TouchableOpacity
                            className="w-[70px] h-[70px] rounded-full border-4 border-white items-center justify-center"
                            onPress={async () => {
                                if (cameraRef) {
                                    const photo = await cameraRef.takePictureAsync();
                                    console.log("Photo taken:", photo.uri);
                                    // Here you would process the image with AI for waste detection
                                }
                            }}
                        >
                            {/* Inner circle of capture button */}
                            <View className="w-[60px] h-[60px] rounded-full bg-white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        </View>
    );
};

export default CameraScreen;