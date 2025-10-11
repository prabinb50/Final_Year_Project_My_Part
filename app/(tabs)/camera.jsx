import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import CameraScreen from '../../src/components/CameraScreen';

const Camera = () => {
    return (
        <View className="flex-1">
            <StatusBar style="light" />
            <CameraScreen />
        </View>
    )
}

export default Camera




