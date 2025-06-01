import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

const ProfileSetupScreen = () => {
    const router = useRouter();
    const [profileImage, setProfileImage] = useState(null);

    // Function to handle image selection
    const pickImage = async () => {
        // Request permission to access the media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to upload your profile picture!');
            return;
        }

        // Launch the image library to pick an image
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    // Handle continue button press
    const handleContinue = () => {
        // Navigate to the next screen
        router.replace('/home');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Main Content */}
            <View className="flex-1 px-8 pt-10 items-center">
                <Text className="text-2xl font-bold text-green-500 mb-4 text-center">
                    Let's Create Your Hero Identity!
                </Text>
                <Text className="text-base text-center mb-10">
                    Upload a profile picture so other players can recognize you on the leaderboard.
                </Text>

                {/* Profile Image Section */}
                <View className="w-[250px] h-[250px] rounded-full bg-gray-300 items-center justify-center my-8 relative">
                    {profileImage ? (
                        <Image
                            source={{ uri: profileImage }}
                            className="w-[200px] h-[200px] rounded-full"
                            resizeMode="cover"
                        />
                    ) : (
                        <Image
                            source={require('../../assets/images/user.png')}
                            className="w-[200px] h-[200px] rounded-full"
                            resizeMode="cover"
                        />
                    )}

                    {/* Add Image Button */}
                    <TouchableOpacity
                        className="absolute bottom-4 right-7 bg-gray-400 w-10 h-10 rounded-full items-center justify-center border-2 border-white"
                        onPress={pickImage}
                    >
                        <Text className="text-2xl text-white font-bold">+</Text>
                    </TouchableOpacity>
                </View>

                {/* Continue Button */}
                <TouchableOpacity
                    className="bg-green-600 py-4 px-5 rounded-full w-4/5 items-center mt-10"
                    onPress={handleContinue}
                >
                    <Text className="text-white text-lg font-semibold">Continue</Text>
                </TouchableOpacity>
            </View>

    
            {/* Green Wave at Bottom */}
            <Image
                source={require('../../assets/images/onboarding-rectangle.png')}
                className="w-full h-[150px] absolute bottom-0"
                resizeMode="stretch"
            />
        </SafeAreaView>
    );
};

export default ProfileSetupScreen;