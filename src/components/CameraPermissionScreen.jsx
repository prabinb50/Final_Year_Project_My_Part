import { useState } from "react";
import { Camera } from 'expo-camera';
import PermissionScreen from "./PermissionScreen";

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
        <PermissionScreen
            title="Allow camera access"
            description="To help you scan and sort waste correctly, BinHero needs access to your camera."
            onAllowPress={requestCameraPermission}
            onSkipPress={handleSkipPress}
            iconSource={require("../../assets/images/camera-icon.png")}
        />
    );
};

export default CameraPermissionScreen;