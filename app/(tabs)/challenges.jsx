import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const Challenges = () => {
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

    // data for achievements
    const achievements = [
        {
            title: 'First Milestone',
            description: 'Recycled 100 items',
            icon: 'recycle',
            reward: 500
        },
        {
            title: 'Pin the Bin',
            description: 'Add 5 bins on the map',
            icon: 'map-marked',
            reward: 500
        },
        {
            title: 'Recycle Buddy',
            description: 'Recycle 50 plastic items',
            icon: 'wine-bottle',
            reward: 500
        },
    ];

    // leaderboard data
    const leaderboard = [
        { rank: 1, name: 'Aayush Basnet', level: 15, score: 4165, change: '+106', icon: 'arrowup' },
        { rank: 2, name: 'Aayush Karki', level: 15, score: 3946, change: '+65', icon: 'arrowup' },
        { rank: 3, name: 'Yangma Lama', level: 13, score: 3824, change: '-208', icon: 'arrowdown' },
        { rank: 4, name: 'Prabin Joshi', level: 10, score: 1576, change: '+500', icon: 'arrowup' },
    ];

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* Header Section */}
            <View>
                <ImageBackground
                    source={require('../../assets/images/home-header.png')}
                    style={{ width: '100%', height: 212 }}
                    resizeMode="cover"
                    className=""
                >
                    {/* Contents overlaid on image */}
                    <View className="absolute top-0 left-0 right-0 p-5">
                        {/* Title and notifications row */}
                        <View className="flex-row justify-between items-center">
                            {/* Header Title */}
                            <Text className="text-xl font-extrabold text-white">BINHERO</Text>

                            {/* Coins and Notification  */}
                            <View className="flex-row items-center justify-between gap-4">
                                {/* Coins display */}
                                <View className="flex-row items-center justify-between">
                                    <FontAwesome5 name="coins" size={18} color="#FFA600" />

                                    <Text className="text-white font-semibold ml-1 text-base">1,576</Text>
                                </View>

                                {/* Notification Bell */}
                                <TouchableOpacity>
                                    <Ionicons name="notifications" size={22} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* User Profile Section */}
                        <View className="flex-row items-center mt-3">
                            {/* User Avatar and name*/}
                            <View className="flex-row items-center justify-between gap-2">
                                {/* User Avator */}
                                <Image
                                    source={require('../../assets/images/user-avator.png')}
                                    className="w-9 h-9 rounded-full"
                                    resizeMode="cover"
                                />

                                {/* User Name */}
                                <Text className="font-semibold text-sm text-white">Prabin Joshi</Text>
                            </View>

                            {/* User Details */}
                            <View className="">
                                <Text className="font-semibold text-sm text-white">Level 10</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground >
            </View >

            {/* Main Contents */}
            < ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} >
                {/* Streak Section */}
                < View className="bg-white rounded-xl p-4 mt-4 shadow-lg" >
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

                {/* Today's Mission Section */}
                < View className="p-2 mt-5 shadow-lg" >
                    {/* Mission Header */}
                    < View className="flex-row justify-between items-center mb-3" >
                        <Text className="text-base font-bold">Today's Mission</Text>

                        {/* Timer */}
                        <View className="flex-row items-center">
                            <Ionicons name="timer-outline" size={18} color="#E2B100" />
                            <Text className="ml-1 text-yellow-500 font-bold">03:25:55</Text>
                        </View>
                    </View >

                    {/* Mission Card */}
                    < View className="rounded-xl overflow-hidden shadow-lg" >
                        {/* Gradient Background */}
                        < LinearGradient colors={['#CEE8CD', '#FDE1B8']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 2 }} className="p-4 " >
                            <View className="flex-row items-center gap-2">
                                {/* Mission Icon */}
                                <View className="bg-green-200 rounded-lg mr-3 w-12 h-12 items-center justify-center">
                                    <MaterialCommunityIcons name="recycle-variant" size={24} color="#00A653" />
                                </View>

                                {/* Mission Details */}
                                <View className="">
                                    <Text className="font-semibold ">Plastic Bottle Blitz</Text>
                                    <Text className="text-sm text-gray-600 mb-2">Recycle 5 plastic bottles today</Text>

                                    {/* Progress Indicator */}
                                    <View className="mb-2 flex-row items-center justify-between">
                                        {/* Progress Label */}
                                        <Text className="font-semibold">2/5</Text>

                                        {/* Progress Bar */}
                                        <View className="h-2 w-40 bg-gray-200 rounded-full">
                                            <View
                                                className="h-full bg-green-500 rounded-full"
                                                style={{ width: `${(2 / 5) * 100}%` }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* Rewards*/}
                            <View className="flex-row items-center justify-between mt-3">
                                <View className="flex-row">
                                    <Entypo name="price-ribbon" size={18} color="#FFA600" />
                                    <Text className="font-semibold ml-1">Rewards:</Text>
                                </View>

                                <View className="flex-row">
                                    <FontAwesome5 name="coins" size={16} color="#FFA600" />
                                    <Text className="font-semibold ml-2">200</Text>
                                </View>
                            </View>
                        </LinearGradient >
                    </View >

                </View >

                {/* Leaderboard Section */}
                < View className="shadow-lg bg-white rounded-xl p-4 mt-4" >
                    {/* Leaderboard Header */}
                    < View className="flex-row justify-between items-center mb-3" >
                        <Text className="text-base font-bold">Learboard</Text>
                        <Text className="text-base text-green-500">See All</Text>
                    </View >

                    {/* Leaderboard Items */}
                    {
                        leaderboard.map((item, index) => (
                            <View key={index} className={`flex-row items-center justify-between mb-4 ${item.rank === 4 ? 'bg-green-100 rounded-lg px-1.5 py-2' : ''
                                }`}>
                                {/* Rank and User Info */}
                                <View className="flex-row items-center gap-3">
                                    {/* Rank */}
                                    <View className="bg-gray-200 w-9 h-9 items-center justify-center rounded-full">
                                        <Text className="text-orange-500 font-semibold">{item.rank}</Text>
                                    </View>

                                    {/* User Avatar */}
                                    <Image
                                        source={require('../../assets/images/user-avator.png')}
                                        className="w-9 h-9 rounded-full"
                                        resizeMode="cover"
                                    />

                                    {/* User Info */}
                                    <View>
                                        <Text className="font-semibold text-sm">{item.name}</Text>
                                        <Text className="text-xs text-gray-500 font-semibold">Level {item.level}</Text>
                                    </View>
                                </View>

                                {/* Score and Change */}
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

                {/* Recent Achievements Section */}
                < View className="mt-5 p-2" >
                    {/* Achievements Header */}
                    < View className="flex-row justify-between items-center mb-3" >
                        <Text className="text-base font-bold">Recent Achievements</Text>

                        <TouchableOpacity>
                            <Text className="text-green-500 text-base">View All</Text>
                        </TouchableOpacity>
                    </View >

                    {/* Achievements Row */}
                    < View className="flex-row items-center justify-between gap-5" >
                        {
                            achievements.map((achievement, index) => (
                                <View key={index} className="shadow-lg bg-white items-center rounded-xl p-4">
                                    {/* Achievement Icon */}
                                    <View className="h-11 w-11 items-center justify-center mb-2 bg-orange-100 rounded-full">
                                        <FontAwesome5 name={achievement.icon} size={20} color="#FFA600" />
                                    </View>

                                    {/* Achievement Details */}
                                    <Text className="font-semibold text-sm">{achievement.title}</Text>
                                    <Text className="text-sm text-gray-500">{achievement.description}</Text>

                                    {/* Reward */}
                                    <View className="flex-row mt-2 items-center">
                                        <FontAwesome5 name="coins" size={15} color="#FFA600" />
                                        <Text className="text-gray-500 ml-2 text-sm">+{achievement.reward}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View >
                </View >
            </ScrollView >
        </SafeAreaView >
    );
};

export default Challenges;
