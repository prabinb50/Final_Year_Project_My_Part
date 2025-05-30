import { Image, Text, TouchableOpacity, View } from "react-native";

const PermissionScreen = ({ title, description, onAllowPress, onSkipPress, iconSource }) => {
    return (
        <>
            {/* Top Section with Icon Image */}
            <View className="w-full h-[45%] items-center justify-center pt-20">
                <Image
                    source={iconSource}
                    className="w-60 h-60"
                    resizeMode="contain"
                />
            </View>

            {/* Bottom Green Section */}
            <View className="w-full h-[59%] relative" >
                <Image
                    source={require('../../assets/images/onboarding-rectangle.png')}
                    className="w-full h-full absolute"
                    resizeMode="cover"
                />

                {/* Content overlay on top of the rectangle */}
                <View className="w-full h-full px-8 pt-24">
                    <Text
                        className="text-2xl font-bold text-white mb-4 pt-10"
                    >
                        {title}
                    </Text>

                    <Text
                        className="text-base text-white leading-6"
                    >
                        {description}
                    </Text>

                    {/* Allow Access Button */}
                    <TouchableOpacity
                        onPress={onAllowPress}
                        className="bg-white py-4 rounded-full items-center justify-center mb-7 mt-12"
                    >
                        <Text className="text-green-500 text-lg font-semibold">Allow Access</Text>
                    </TouchableOpacity>

                    {/* "I'll do it later" Button */}
                    <TouchableOpacity
                        onPress={onSkipPress}
                        className="items-center justify-center"
                    >
                        <Text className="text-white text-base font-semibold">I'll do it later</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default PermissionScreen;