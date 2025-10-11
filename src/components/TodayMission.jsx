import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TodayMission() {
    return (
        <View className="shadow">
            <View className="flex-row justify-between items-center mb-2" >
                <Text className="text-base font-bold">Today's Mission</Text>

                {/* timer */}
                <View className="flex-row items-center">
                    <Ionicons name="timer-outline" size={18} color="#E2B100" />
                    <Text className="ml-1 text-yellow-500 font-bold">03:25:55</Text>
                </View>
            </View >

            {/* mission card */}
            < View className="rounded-2xl overflow-hidden shadow-lg" >
                < LinearGradient colors={['#CEE8CD', '#FDE1B8']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 2 }} className="p-4" >
                    <View className="flex-row items-center gap-2">
                        {/* icon */}
                        <View className="bg-green-200 rounded-xl mr-3 w-12 h-12 items-center justify-center">
                            <MaterialCommunityIcons name="recycle-variant" size={24} color="#00A653" />
                        </View>

                        {/* mission details */}
                        <View className="">
                            <Text className="font-semibold ">Plastic Bottle Blitz</Text>
                            <Text className="text-sm text-gray-600 mb-2">Recycle 5 plastic bottles today</Text>

                            {/* progress indicator */}
                            <View className="mb-2 flex-row items-center justify-between">
                                <Text className="font-semibold">2/5</Text>

                                {/* progress bar */}
                                <View className="h-2 w-40 bg-gray-200 rounded-full">
                                    <View
                                        className="h-full bg-green-500 rounded-full"
                                        style={{ width: `${(2 / 5) * 100}%` }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* rewards*/}
                    <View className="flex-row items-center justify-between mt-1">
                        <View className="flex-row">
                            <FontAwesome5 name="award" size={18} color="#FFA600" />
                            <Text className="font-semibold ml-2">Rewards:</Text>
                        </View>

                        <View className="flex-row">
                            <FontAwesome5 name="coins" size={16} color="#FFA600" />
                            <Text className="font-semibold ml-2">200</Text>
                        </View>
                    </View>
                </LinearGradient >
            </View >
        </View >
    );
}
