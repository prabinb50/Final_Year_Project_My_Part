import React from 'react'
import { Image, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

// leaderboard data
const leaderboard = [
    { rank: 1, name: 'Aayush Basnet', level: 15, score: 4165, change: '+106', icon: 'arrowup' },
    { rank: 2, name: 'Aayush Karki', level: 15, score: 3946, change: '+65', icon: 'arrowup' },
    { rank: 3, name: 'Yangma Lama', level: 13, score: 3824, change: '-208', icon: 'arrowdown' },
    { rank: 4, name: 'Prabin Joshi', level: 10, score: 1576, change: '+500', icon: 'arrowup' },
];

export default function Leaderboard() {
    return (
        <View className="shadow bg-white rounded-2xl p-4">
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-base font-bold">Leaderboard</Text>
                <Text className="text-base text-[#00A653]">See All</Text>
            </View>

            {/* leaderboard items */}
            {
                leaderboard.map((item, index) => (
                    <View key={index} className={`flex-row items-center justify-between mb-4 ${item.rank === 4 ? 'bg-green-100 rounded-lg px-1.5 py-2' : ''
                        }`}>
                        {/* rank and user info */}
                        <View className="flex-row items-center gap-3">
                            {/* rank */}
                            <View className="bg-gray-200 w-9 h-9 items-center justify-center rounded-full">
                                <Text className="text-orange-500 font-semibold">{item.rank}</Text>
                            </View>

                            {/* user avatar */}
                            <Image
                                source={require('../../assets/images/user-avator.png')}
                                className="w-9 h-9 rounded-full"
                                resizeMode="cover"
                            />

                            {/* user info */}
                            <View>
                                <Text className="font-semibold text-sm">{item.name}</Text>
                                <Text className="text-xs text-gray-500 font-semibold">Level {item.level}</Text>
                            </View>
                        </View>

                        {/* score and change */}
                        <View className="items-end">
                            <Text className="font-semibold text-sm">{item.score.toLocaleString()}</Text>

                            <View className="flex-row items-center">
                                <AntDesign
                                    name={item.icon}
                                    size={14}
                                    color={item.icon === 'arrowup' ? '#1DAE63' : '#FF4C4C'}
                                />

                                <Text
                                    className="text-gray-500 text-xs font-semibold">
                                    {item.change}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View >
    )
}
