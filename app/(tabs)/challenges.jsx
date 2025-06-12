import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
                {/* Streak Section */}
                <View className="bg-white rounded-xl p-4 mt-4 shadow-lg">
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
                </View>

                {/* Today's Mission Section */}
                <View className="p-2 mt-5">
                    {/* Mission Header */}
                    <View className="flex-row justify-between items-center mb-3">
                        <Text className="text-base font-bold">Today's Mission</Text>

                        {/* Timer */}
                        <View className="flex-row items-center">
                            <Ionicons name="timer-outline" size={18} color="#E2B100" />
                            <Text className="ml-1 text-yellow-500 font-bold">03:25:55</Text>
                        </View>
                    </View>

                    {/* Mission Card */}
                    <View className="bg-yellow-100 rounded-xl p-4 shadow-lg">
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
                                    <View className="w-70 h-1.5 bg-gray-200 rounded-full">
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
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Challenges;
