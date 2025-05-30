import { useState } from "react";
import * as Location from 'expo-location';
import PermissionScreen from "./PermissionScreen";

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
        <PermissionScreen
            title="Allow location access"
            description="BinHero uses your location to show nearby dustbins and help you add new ones for others."
            onAllowPress={requestLocationPermission}
            onSkipPress={handleSkipPress}
            iconSource={require("../../assets/images/map.png")}
        />
    );
};

export default LocationPermissionScreen;