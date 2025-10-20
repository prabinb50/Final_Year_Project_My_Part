import { Text, View, Image, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../src/components/Header";
import { Ionicons, FontAwesome, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export default function Settings() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* header */}
            <View>
                <Header title="Settings" />
            </View>

            {/* main contents */}
            <View className="flex-1 px-5 ">
                {/* profile picture with edit button */}
                <View className="items-center mb-8">
                    <View className="relative">
                        <Image 
                            source={require('../assets/images/user-avator.png')}
                            className="w-28 h-28 rounded-full"
                            resizeMode="cover"
                        />

                        <View className="absolute right-0 bottom-0 bg-[#00A653] p-2 rounded-full">
                            <Feather name="edit-2" size={16} color="white" />
                        </View>
                    </View>
                </View>

                {/* settings list */}
                <View className="bg-white rounded-lg">
                    {/* edit profile */}
                    <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
                        <View className="flex-row items-center">
                            <FontAwesome name="user-circle-o" size={22} color="black" className="mr-3"/>
                            <Text className="text-base font-medium text-gray-800 ml-2">Edit Profile</Text>
                        </View>

                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>

                    {/* email address */}
                    <View className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
                        <View className="flex-row items-center">
                            <MaterialIcons name="email" size={22} color="black" className="mr-3" />
                            <Text className="text-base font-medium text-gray-800 ml-2">Email Address</Text>
                        </View>
                        <Text className="text-gray-400">prabin@gmail.com</Text>
                    </View>

                    {/* change password */}
                    <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
                        <View className="flex-row items-center">
                            <FontAwesome name="lock" size={22} color="black" className="mr-3"/>
                            <Text className="text-base font-medium text-gray-800 ml-2">Change Password</Text>
                        </View>

                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>

                    {/* notification */}
                    <View className="flex-row items-center justify-between px-5 py-1 border-b border-gray-100">
                        <View className="flex-row items-center">
                            <Ionicons name="notifications" size={22} color="black" className="mr-3" />
                            <Text className="text-base font-medium text-gray-800 ml-2">Notification</Text>
                        </View>

                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: "#D1D1D1", true: "#AEAEAE" }}
                            thumbColor={notificationsEnabled ? "#00A653" : "#f4f3f4"}
                        />
                    </View>

                    {/* language */}
                    <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
                        <View className="flex-row items-center">
                            <Ionicons name="language" size={22} color="black" className="mr-3" />
                            <Text className="text-base font-medium text-gray-800 ml-2">Language</Text>
                        </View>

                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>

                    {/* privacy policy */}
                    <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
                        <View className="flex-row items-center">
                            <MaterialIcons name="privacy-tip" size={22} color="black" className="mr-3"/>
                            <Text className="text-base font-medium text-gray-800 ml-2">Privacy Policy</Text>
                        </View>

                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>

                    {/* help */}
                    <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
                        <View className="flex-row items-center">
                            <Ionicons name="help-circle" size={22} color="black" className="mr-3"/>
                            <Text className="text-base font-medium text-gray-800 ml-2">Help</Text>
                        </View>

                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>
                </View>

                {/* logout button */}
                <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 mt-8 bg-white rounded-lg">
                    <View className="flex-row items-center">
                        <MaterialIcons name="logout" size={22} color="#FF3B30" className="mr-3" />
                        <Text className="text-base font-semibold ml-2 text-[#FF3B30]">Logout</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#FF3B30" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}