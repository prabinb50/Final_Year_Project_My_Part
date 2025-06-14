import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
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
                    source={require('../../assets/images/home-header-1.png')}
                    style={{ width: '100%', height: 155 }}
                    resizeMode="cover"
                    className=""
                >
                    {/* Contents overlaid on image */}
                    <View className="absolute top-1 left-0 right-0 p-5">
                        {/* Title and notifications row */}
                        <View className="flex-row justify-between items-center">
                            {/* Header Title */}
                            <Text className="text-2xl font-extrabold text-white">BINHERO</Text>

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
                        <View className="flex-row items-center mt-3 justify-between gap-9">
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

                            {/*Level and XP Progress Bar */}
                            <View className="w-[60%]">
                                {/* Level */}
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

            {/* Main Contents */}
            < ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} >
                {/* Streak Section */}
                < View className="bg-white rounded-xl p-4 shadow-lg" >
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
                < View className="p-2 mt-4 shadow-lg" >
                    {/* Mission Header */}
                    < View className="flex-row justify-between items-center mb-2" >
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
                            <View className="flex-row items-center justify-between mt-1">
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
                < View className="shadow-md bg-white rounded-xl p-4 mt-4" >
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

export default Home;


// import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialIcons, Ionicons, FontAwesome, MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

// // Helper component for streak circles
// const DayCircle = ({ day, active, isToday, isNext, text }) => {
//     // Determine background color based on state
//     let bgColorClass = 'bg-gray-200'; // Default inactive
//     let textColorClass = 'text-green-500';

//     if (active || isToday) bgColorClass = 'bg-green-200';
//     if (isNext) bgColorClass = 'bg-green-200';

//     return (
//         <View className="items-center">
//             {/* Circle with day status */}
//             <View className={`w-9 h-9 rounded-full ${bgColorClass} items-center justify-center mb-1`}>
//                 <Text className={`text-sm font-bold ${textColorClass}`}>
//                     {text != null ? String(text) : ''}
//                 </Text>
//             </View>

//             {/* Day label */}
//             <Text className="text-xs text-gray-500">{day}</Text>
//         </View>
//     );
// };


// // Helper function to get rank color
// const getRankColor = (rank) => {
//     switch (rank) {
//         case 1: return 'bg-orange-200';
//         case 2: return 'bg-gray-300';
//         case 3: return 'bg-gray-300';
//         default: return 'bg-green-300';
//     }
// };

// const Home = () => {
//     // Mock data for demonstration
//     const userData = {
//         username: 'TheDispatcher',
//         level: 10,
//         xp: 1240,
//         xpRequired: 4000,
//         streak: {
//             sun: true,
//             mon: true,
//             tue: true,
//             wed: true,
//             thu: true,
//             today: 15,
//             sat: 16,
//         },
//         coins: 1576,
//     };

//     const todaysMission = {
//         title: 'Plastic Bottle Blitz',
//         description: 'Recycle 5 plastic bottles today',
//         progress: 2,
//         total: 5,
//         reward: 200,
//         timeRemaining: '03:25:55',
//     };

//     const leaderboard = [
//         { rank: 1, name: 'GreenKing', level: 15, score: 4165, change: '+1150' },
//         { rank: 2, name: 'Alexi', level: 15, score: 3946, change: '+145' },
//         { rank: 3, name: 'Kratos', level: 13, score: 3824, change: '-203' },
//         { rank: 4, name: 'TheDispatcher', level: 10, score: 1576, change: '+500' },
//     ];

//     const achievements = [
//         {
//             title: 'First Milestone',
//             description: 'Recycled 100 items',
//             icon: 'trophy',
//             reward: 500
//         },
//         {
//             title: 'Pin the Bin',
//             description: 'Add 5 bins on the map',
//             icon: 'map-marker',
//             reward: 500
//         },
//         {
//             title: 'Recycle Buddy',
//             description: 'Recycle 50 plastic items',
//             icon: 'recycle',
//             reward: 500
//         },
//     ];

//     return (
//         <SafeAreaView className="flex-1 bg-gray-100">
//             {/* Header Section - Using Image Background */}
//             <View>
//                 {/* Header Image */}
//                 <Image
//                     source={require('../../assets/images/home-header.png')}
//                     className="w-full h-28"
//                     resizeMode="cover"
//                 />

//                 {/* Content overlaid on image */}
//                 <View className="absolute top-0 left-0 right-0 p-5">
//                     {/* Logo and Notifications Row */}
//                     <View className="flex-row justify-between items-center">
//                         <Text className="text-xl font-bold text-white">BINHERO</Text>
//                         <View className="flex-row items-center">
//                             {/* Coins Display */}
//                             <View className="flex-row items-center mr-4">
//                                 <FontAwesome name="circle" size={18} color="#FFD700" />
//                                 <Text className="ml-2 font-bold text-white">{userData.coins}</Text>
//                             </View>
//                             {/* Notification Bell */}
//                             <TouchableOpacity>
//                                 <Ionicons name="notifications-outline" size={24} color="white" />
//                             </TouchableOpacity>
//                         </View>
//                     </View>

//                     {/* User Profile Section */}
//                     <View className="flex-row items-center mt-3">
//                         {/* User Avatar */}
//                         <Image
//                             source={require('../../assets/images/user.png')}
//                             className="w-10 h-10 rounded-full bg-gray-200"
//                         />

//                         {/* User Details */}
//                         <View className="ml-3 flex-1">
//                             <Text className="font-bold text-white">{userData.username}</Text>

//                             {/* Level and XP Progress */}
//                             <View className="w-full">
//                                 <Text className="text-xs text-white">Level {userData.level}</Text>

//                                 {/* XP Progress Bar */}
//                                 <View className="h-2 bg-gray-300 rounded-full mt-1 mb-1">
//                                     <View
//                                         className="h-full bg-yellow-400 rounded-full"
//                                         style={{ width: `${(userData.xp / userData.xpRequired) * 100}%` }}
//                                     />
//                                 </View>

//                                 <Text className="text-xs text-white self-end">
//                                     {userData.xp}/{userData.xpRequired} XP
//                                 </Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </View>

//             {/* Main Content in ScrollView */}
//             <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
//                 {/* Streak Section */}
//                 <View className="bg-white rounded-xl p-4 mt-4 shadow-lg">
//                     <Text className="text-base font-bold mb-3">Your Streak</Text>

//                     {/* Streak Days Row */}
//                     <View className="flex-row justify-between">
//                         {/* Sunday */}
//                         <DayCircle
//                             day="SUN"
//                             active={userData.streak.sun}
//                             text={userData.streak.sun ? "✓" : ""}
//                         />

//                         {/* Monday */}
//                         <DayCircle
//                             day="MON"
//                             active={userData.streak.mon}
//                             text={userData.streak.mon ? "✓" : ""}
//                         />

//                         {/* Tuesday */}
//                         <DayCircle
//                             day="TUE"
//                             active={userData.streak.tue}
//                             text={userData.streak.tue ? "✓" : ""}
//                         />

//                         {/* Wednesday */}
//                         <DayCircle
//                             day="WED"
//                             active={userData.streak.wed}
//                             text={userData.streak.wed ? "✓" : ""}
//                         />

//                         {/* Thursday */}
//                         <DayCircle
//                             day="THU"
//                             active={userData.streak.thu}
//                             text={userData.streak.thu ? "✓" : ""}
//                         />

//                         {/* Today */}
//                         <DayCircle
//                             day="Today"
//                             active={true}
//                             text="15"
//                             isToday
//                         />

//                         {/* Saturday */}
//                         <DayCircle
//                             day="SAT"
//                             text="16"
//                             isNext
//                         />
//                     </View>
//                 </View>

//                 {/* Today's Mission */}
//                 <View className="p-2 mt-5">
//                     {/* Mission Header */}
//                     <View className="flex-row justify-between items-center mb-3">
//                         <Text className="text-base font-bold">Today's Mission</Text>

//                         {/* Timer */}
//                         <View className="flex-row items-center">
//                             <MaterialIcons name="timer" size={18} color="#E2B100" />
//                             <Text className="ml-1 text-yellow-500 font-bold">{todaysMission.timeRemaining}</Text>
//                         </View>
//                     </View>

//                     {/* Mission Card */}
//                     <View className="bg-yellow-50 rounded-lg p-4 flex-row ">
//                         {/* Mission Icon */}
//                         <View className="w-12 h-12 rounded-lg bg-green-100 items-center justify-center mr-3">
//                             <MaterialCommunityIcons name="recycle" size={24} color="#00A653" />
//                         </View>

//                         {/* Mission Details */}
//                         <View className="flex-1">
//                             <Text className="font-semibold mb-1">{todaysMission.title}</Text>
//                             <Text className="text-gray-600 text-sm mb-2">{todaysMission.description}</Text>

//                             {/* Progress Indicator */}
//                             <View className="mb-2">
//                                 <Text className="text-sm mb-1 text-black">{todaysMission.progress}/{todaysMission.total}</Text>

//                                 <View className="h-1.5 bg-gray-200 rounded-full">
//                                     <View
//                                         className="h-full bg-green-500 rounded-full"
//                                         style={{ width: `${(todaysMission.progress / todaysMission.total) * 100}%` }}
//                                     />
//                                 </View>
//                             </View>

//                             {/* Rewards */}
//                             <View className="flex-row items-center justify-between">
//                                 <View className="flex-row items-center">
//                                     <Entypo name="price-ribbon" size={18} color="#FFA600" />
//                                     <Text className="font-semibold text-sm  ml-1">Rewards:</Text>
//                                 </View>

//                                 <View className="flex-row items-center">
//                                     <FontAwesome5 name="coins" size={16} color="#FFA600" />
//                                     <Text className="ml-2 font-semibold text-sm">{todaysMission.reward}</Text>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//                 {/* Leaderboard Section */}
//                 <View className="bg-white rounded-xl p-4 mt-6 shadow-lg">
//                     {/* Leaderboard Header */}
//                     <View className="flex-row justify-between items-center mb-3">
//                         <Text className="text-base font-bold">Leaderboard</Text>
//                         <TouchableOpacity>
//                             <Text className="text-green-500 text-sm">See All</Text>
//                         </TouchableOpacity>
//                     </View>

//                     {/* Leaderboard Items */}
//                     {leaderboard.map((item) => (
//                         <View
//                             key={item.rank}
//                             // className={`flex-row items-center py-2 ${item.name === userData.username ? 'bg-green-50 rounded-lg' : ''}`}
//                             style={[styles.leaderboardItem, item.name === userData.username && styles.userRankHighlight]}
//                         >
//                             {/* Rank Circle */}
//                             <View className={`w-9 h-9 rounded-full items-center justify-center mr-2 ${getRankColor(item.rank)}`}>
//                                 <Text className="opacity-90 font-bold text-xs">{item.rank}</Text>
//                             </View>

//                             {/* User Avatar */}
//                             <Image
//                                 source={require('../../assets/images/user.png')}
//                                 className="w-8 h-8 rounded-full mr-2"
//                             />

//                             {/* User Info */}
//                             <View className="flex-1">
//                                 <Text className="font-semibold text-sm">{item.name}</Text>
//                                 <Text className="text-black text-xs">Level {item.level}</Text>
//                             </View>

//                             {/* Score */}
//                             <View className="items-end">
//                                 <Text className="font-semibold">{item.score}</Text>
//                                 <Text className={`text-xs ${item.change.includes('+') ? 'text-green-600' : 'text-red-500'}`}>
//                                     {item.change}
//                                 </Text>
//                             </View>
//                         </View>
//                     ))}
//                 </View>

//                 {/* Recent Achievements */}
//                 <View className="bg-white rounded-xl p-4 mt-6 mb-20 shadow-sm"> {/* mb-20 for bottom spacing */}
//                     {/* Achievements Header */}
//                     <View className="flex-row justify-between items-center mb-3">
//                         <Text className="text-base font-bold">Recent Achievements</Text>
//                         <TouchableOpacity>
//                             <Text className="text-green-600 text-xs">View All</Text>
//                         </TouchableOpacity>
//                     </View>

//                     {/* Achievements Row */}
//                     <View className="flex-row justify-between">
//                         {achievements.map((achievement, index) => (
//                             <View key={index} className="w-[31%] bg-white rounded-lg p-2 border border-gray-100 items-center">
//                                 {/* Achievement Icon */}
//                                 <View className="w-10 h-10 rounded-full bg-yellow-50 items-center justify-center mb-2">
//                                     <FontAwesome name={achievement.icon} size={20} color="#FFD700" />
//                                 </View>

//                                 {/* Achievement Details */}
//                                 <Text className="text-xs font-bold text-center mb-1">{achievement.title}</Text>
//                                 <Text className="text-[9px] text-center text-gray-500 mb-1">{achievement.description}</Text>

//                                 {/* Reward */}
//                                 <View className="flex-row items-center">
//                                     <FontAwesome name="circle" size={12} color="#FFD700" />
//                                     <Text className="text-xs font-bold ml-1">+{achievement.reward}</Text>
//                                 </View>
//                             </View>
//                         ))}
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     leaderboardItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 8,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E5E7EB',
//         paddingLeft: 8,
//         paddingRight: 8,
//     },
//     userRankHighlight: {
//         backgroundColor: '#D9EBD7',
//         borderRadius: 8,
//         marginTop: 10,
//         paddingLeft: 8,
//         paddingRight: 8,
//     },
// });

// export default Home;