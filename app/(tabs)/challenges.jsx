import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

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
                    {/* First child */}
                    <Text className="font-bold text-base mb-3">Your Streak</Text>

                    {/* Second Child - Streak Days */}
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default Challenges;
