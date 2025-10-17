import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import TodayMission from '../../src/components/TodayMission';
import Leaderboard from '../../src/components/Leaderboard';
import React from 'react'
import RedeemablePoints from '../../src/components/RedeemablePoints';
import RecentAchievements from '../../src/components/RecentAchievements';
import { useRouter } from 'expo-router';

// data for streak days
const streakData = [
    { day: 'SUN', type: 'check' },
    { day: 'MON', type: 'check' },
    { day: 'TUE', type: 'check' },
    { day: 'WED', type: 'check' },
    { day: 'THU', type: 'check' },
    { day: 'Today', type: 'number', value: 15 },
    { day: 'SAT', type: 'number', value: 16 },
];

export default function Home() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* header section */}
            <View>
                <ImageBackground
                    source={require('../../assets/images/home-header-1.png')}
                    style={{ width: '100%', height: 155 }}
                    resizeMode="cover"
                    className=""
                >
                    {/* contents overlaid on image */}
                    <View className="absolute top-1 left-0 right-0 p-5">
                        {/* title and notifications row */}
                        <View className="flex-row justify-between items-center">
                            <Text className="text-2xl font-extrabold text-white">BINHERO</Text>

                            {/* coins and notification  */}
                            <View className="flex-row items-center justify-between gap-4">
                                {/* coins display */}
                                <View className="flex-row items-center justify-between">
                                    <FontAwesome5 name="coins" size={18} color="#FFA600" />

                                    <Text className="text-white font-semibold ml-1 text-base">1,576</Text>
                                </View>

                                {/* notification bell */}
                                <TouchableOpacity onPress={() => router.push('/notifications')}>
                                    <Ionicons name="notifications" size={22} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* user profile section */}
                        <View className="flex-row items-center mt-3 justify-between gap-9">
                            {/* user avatar and name*/}
                            <View className="flex-row items-center justify-between gap-2">
                                {/* user avatar */}
                                <Image
                                    source={require('../../assets/images/user-avator.png')}
                                    className="w-9 h-9 rounded-full"
                                    resizeMode="cover"
                                />

                                {/* user name */}
                                <Text className="font-semibold text-sm text-white">Prabin Joshi</Text>
                            </View>

                            {/*level and xp progress bar */}
                            <View className="w-[60%]">
                                {/* level */}
                                <View className="flex-row items-center justify-between">
                                    <Text className="font-semibold text-xs text-white">Level 10</Text>

                                    <Text className="font-semibold text-xs text-white">1,240/4000 XP</Text>
                                </View>

                                {/* XP Progress Bar */}
                                <View className="h-2 bg-gray-200 rounded-full">
                                    <View
                                        className="h-full bg-yellow-400 rounded-full"
                                        style={{ width: `${(1240 / 4000) * 100}%` }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground >
            </View >

            {/* main contents */}
            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false} >
                {/* streak section */}
                <View className="bg-white rounded-xl p-4 shadow-lg" >
                    <Text className="font-bold text-base mb-3">Your Streak</Text>

                    {/* Streak Days */}
                    <View className="flex-row items-center justify-between">
                        {streakData.map((item, index) => (
                            <View key={index} className="items-center">
                                <View
                                    className={`rounded-full items-center justify-center w-9 h-9 mb-1
                                        ${item.day === 'Today' ? 'border-2 border-green-600' : ''}
                                        ${item.type === 'check' ? 'bg-green-200' : 'bg-green-200'}`}
                                >
                                    {item.type === 'check' ? (
                                        <AntDesign name="check" size={18} color="#00A653" />
                                    ) : (
                                        <Text className="text-green-800 font-bold">{item.value}</Text>
                                    )}
                                </View>


                                <Text
                                    className={`text-xs text-center font-semibold ${item.day === 'Today' ? 'text-green-600' : 'text-gray-500'
                                        }`}
                                >
                                    {item.day}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View >

                {/* today mission section */}
                <View className="mt-5">
                    <TodayMission />
                </View>

                {/* leaderboard section */}
                <View className="mt-6">
                    <Leaderboard />
                </View>

                {/* recent achievements section */}
                <View className="mt-6">
                    <RecentAchievements />
                </View>

                {/* redeemable points section */}
                <View className="mt-6">
                    <RedeemablePoints />
                </View>
            </ScrollView >
        </SafeAreaView >
    );
}




