import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
    // Mock data for demonstration
    const userData = {
        username: 'TheDispatcher',
        level: 10,
        xp: 1240,
        xpRequired: 4000,
        streak: {
            sun: true,
            mon: true,
            tue: true,
            wed: true,
            thu: true,
            today: 15, // "Today" is labeled as "15"
            sat: 16,
        },
        coins: 1576,
    };

    const todaysMission = {
        title: 'Plastic Bottle Blitz',
        description: 'Recycle 5 plastic bottles today',
        progress: 2,
        total: 5,
        reward: 200,
        timeRemaining: '03:25:55',
    };

    const leaderboard = [
        { rank: 1, name: 'GreenKing', level: 15, score: 4165, change: '+1150' },
        { rank: 2, name: 'Alexi', level: 15, score: 3946, change: '+145' },
        { rank: 3, name: 'Kratos', level: 13, score: 3824, change: '-203' },
        { rank: 4, name: 'TheDispatcher', level: 10, score: 1576, change: '+500' },
    ];

    const achievements = [
        {
            title: 'First Milestone',
            description: 'Recycled 100 items',
            icon: 'trophy',
            reward: 500
        },
        {
            title: 'Pin the Bin',
            description: 'Add 5 bins on the map',
            icon: 'map-marker',
            reward: 500
        },
        {
            title: 'Recycle Buddy',
            description: 'Recycle 50 plastic items',
            icon: 'recycle',
            reward: 500
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* Header Section - Using Image Background */}
            <View>
                {/* Header Image */}
                <Image
                    source={require('../../assets/images/home-header.png')}
                    className="w-full h-28"
                    resizeMode="cover"
                />

                {/* Content overlaid on image */}
                <View className="absolute top-0 left-0 right-0 p-5">
                    {/* Logo and Notifications Row */}
                    <View className="flex-row justify-between items-center">
                        <Text className="text-xl font-bold text-white">BINHERO</Text>
                        <View className="flex-row items-center">
                            {/* Coins Display */}
                            <View className="flex-row items-center mr-4">
                                <FontAwesome name="circle" size={18} color="#FFD700" />
                                <Text className="ml-2 font-bold text-white">{userData.coins}</Text>
                            </View>
                            {/* Notification Bell */}
                            <TouchableOpacity>
                                <Ionicons name="notifications-outline" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* User Profile Section */}
                    <View className="flex-row items-center mt-3">
                        {/* User Avatar */}
                        <Image
                            source={require('../../assets/images/user.png')}
                            className="w-10 h-10 rounded-full bg-gray-200"
                        />

                        {/* User Details */}
                        <View className="ml-3 flex-1">
                            <Text className="font-bold text-white">{userData.username}</Text>

                            {/* Level and XP Progress */}
                            <View className="w-full">
                                <Text className="text-xs text-white">Level {userData.level}</Text>

                                {/* XP Progress Bar */}
                                <View className="h-2 bg-gray-300 rounded-full mt-1 mb-1">
                                    <View
                                        className="h-full bg-yellow-400 rounded-full"
                                        style={{ width: `${(userData.xp / userData.xpRequired) * 100}%` }}
                                    />
                                </View>

                                <Text className="text-xs text-white self-end">
                                    {userData.xp}/{userData.xpRequired} XP
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Main Content in ScrollView */}
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
                {/* Streak Section */}
                <View className="bg-white rounded-xl p-4 mt-4 shadow-sm">
                    <Text className="text-base font-bold mb-3">Your Streak</Text>

                    {/* Streak Days Row */}
                    <View className="flex-row justify-between">
                        {/* Sunday */}
                        <DayCircle
                            day="SUN"
                            active={userData.streak.sun}
                            text={userData.streak.sun ? "✓" : ""}
                        />

                        {/* Monday */}
                        <DayCircle
                            day="MON"
                            active={userData.streak.mon}
                            text={userData.streak.mon ? "✓" : ""}
                        />

                        {/* Tuesday */}
                        <DayCircle
                            day="TUE"
                            active={userData.streak.tue}
                            text={userData.streak.tue ? "✓" : ""}
                        />

                        {/* Wednesday */}
                        <DayCircle
                            day="WED"
                            active={userData.streak.wed}
                            text={userData.streak.wed ? "✓" : ""}
                        />

                        {/* Thursday */}
                        <DayCircle
                            day="THU"
                            active={userData.streak.thu}
                            text={userData.streak.thu ? "✓" : ""}
                        />

                        {/* Today */}
                        <DayCircle
                            day="Today"
                            active={true}
                            text="15"
                            isToday
                        />

                        {/* Saturday */}
                        <DayCircle
                            day="SAT"
                            text="16"
                            isNext
                        />
                    </View>
                </View>

                {/* Today's Mission */}
                <View className="bg-white rounded-xl p-4 mt-4 shadow-sm">
                    {/* Mission Header */}
                    <View className="flex-row justify-between items-center mb-3">
                        <Text className="text-base font-bold">Today's Mission</Text>

                        {/* Timer */}
                        <View className="flex-row items-center">
                            <MaterialIcons name="timer" size={18} color="#FF9800" />
                            <Text className="ml-1 text-yellow-600 font-bold">{todaysMission.timeRemaining}</Text>
                        </View>
                    </View>

                    {/* Mission Card */}
                    <View className="bg-yellow-50 rounded-lg p-4 flex-row">
                        {/* Mission Icon */}
                        <View className="w-10 h-10 rounded-full bg-green-100 items-center justify-center mr-3">
                            <MaterialCommunityIcons name="recycle" size={24} color="#00A86B" />
                        </View>

                        {/* Mission Details */}
                        <View className="flex-1">
                            <Text className="font-bold mb-1">{todaysMission.title}</Text>
                            <Text className="text-gray-700 text-xs mb-2">{todaysMission.description}</Text>

                            {/* Progress Indicator */}
                            <View className="mb-2">
                                <Text className="text-xs mb-1">{todaysMission.progress}/{todaysMission.total}</Text>
                                <View className="h-1.5 bg-gray-200 rounded-full">
                                    <View
                                        className="h-full bg-green-500 rounded-full"
                                        style={{ width: `${(todaysMission.progress / todaysMission.total) * 100}%` }}
                                    />
                                </View>
                            </View>

                            {/* Rewards */}
                            <View className="flex-row items-center">
                                <Text className="text-gray-500 text-xs mr-2">Rewards:</Text>
                                <View className="flex-row items-center">
                                    <FontAwesome name="circle" size={16} color="#FFD700" />
                                    <Text className="ml-1 font-bold text-xs">{todaysMission.reward}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Leaderboard Section */}
                <View className="bg-white rounded-xl p-4 mt-4 shadow-sm">
                    {/* Leaderboard Header */}
                    <View className="flex-row justify-between items-center mb-3">
                        <Text className="text-base font-bold">Leaderboard</Text>
                        <TouchableOpacity>
                            <Text className="text-green-600 text-xs">See All</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Leaderboard Items */}
                    {leaderboard.map((item) => (
                        <View
                            key={item.rank}
                            className={`flex-row items-center py-2 ${item.name === userData.username ? 'bg-green-50 rounded-lg px-2' : ''}`}
                        >
                            {/* Rank Circle */}
                            <View className={`w-7 h-7 rounded-full items-center justify-center mr-2 ${getRankColor(item.rank)}`}>
                                <Text className="text-white font-bold text-xs">{item.rank}</Text>
                            </View>

                            {/* User Avatar */}
                            <Image
                                source={require('../../assets/images/user.png')}
                                className="w-8 h-8 rounded-full mr-2"
                            />

                            {/* User Info */}
                            <View className="flex-1">
                                <Text className="font-bold text-sm">{item.name}</Text>
                                <Text className="text-gray-500 text-xs">Level {item.level}</Text>
                            </View>

                            {/* Score */}
                            <View className="items-end">
                                <Text className="font-bold">{item.score}</Text>
                                <Text className={`text-xs ${item.change.includes('+') ? 'text-green-600' : 'text-red-500'}`}>
                                    {item.change}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Recent Achievements */}
                <View className="bg-white rounded-xl p-4 mt-4 mb-20 shadow-sm"> {/* mb-20 for bottom spacing */}
                    {/* Achievements Header */}
                    <View className="flex-row justify-between items-center mb-3">
                        <Text className="text-base font-bold">Recent Achievements</Text>
                        <TouchableOpacity>
                            <Text className="text-green-600 text-xs">View All</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Achievements Row */}
                    <View className="flex-row justify-between">
                        {achievements.map((achievement, index) => (
                            <View key={index} className="w-[31%] bg-white rounded-lg p-2 border border-gray-100 items-center">
                                {/* Achievement Icon */}
                                <View className="w-10 h-10 rounded-full bg-yellow-50 items-center justify-center mb-2">
                                    <FontAwesome name={achievement.icon} size={20} color="#FFD700" />
                                </View>

                                {/* Achievement Details */}
                                <Text className="text-xs font-bold text-center mb-1">{achievement.title}</Text>
                                <Text className="text-[9px] text-center text-gray-500 mb-1">{achievement.description}</Text>

                                {/* Reward */}
                                <View className="flex-row items-center">
                                    <FontAwesome name="circle" size={12} color="#FFD700" />
                                    <Text className="text-xs font-bold ml-1">+{achievement.reward}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// Helper component for streak circles
const DayCircle = ({ day, active, isToday, isNext, text }) => {
    // Determine background color based on state
    let bgColorClass = 'bg-gray-200'; // Default inactive
    let textColorClass = 'text-green-500';

    if (active || isToday) bgColorClass = 'bg-green-200';
    if (isNext) bgColorClass = 'bg-green-200';

    return (
        <View className="items-center">
            {/* Circle with day status */}
            <View className={`w-9 h-9 rounded-full ${bgColorClass} items-center justify-center mb-1`}>
                <Text className={`text-sm font-bold ${textColorClass}`}>{text}</Text>
            </View>
            {/* Day label */}
            <Text className="text-xs text-gray-500">{day}</Text>
        </View>
    );
};

// Helper function to get rank color
const getRankColor = (rank) => {
    switch (rank) {
        case 1: return 'bg-yellow-500'; // Gold
        case 2: return 'bg-gray-400';   // Silver
        case 3: return 'bg-yellow-700'; // Bronze
        default: return 'bg-green-400'; // Other ranks
    }
};

export default Home;