import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const OnboardingScreen = () => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.replace('/');
    };

    return (
        <View className="flex-1 bg-white justify-center items-center p-8">
            <Text className="text-3xl font-bold text-green-600 mb-8">Welcome to BinHero</Text>
            <Text className="text-lg text-gray-700 text-center mb-12">
                Your solution for smart waste management and recycling
            </Text>
            <TouchableOpacity
                className="bg-green-600 py-4 px-8 rounded-full"
                onPress={handleGetStarted}
            >
                <Text className="text-white font-semibold text-lg">Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OnboardingScreen;