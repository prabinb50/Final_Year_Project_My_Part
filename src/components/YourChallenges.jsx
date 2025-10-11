import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const challenges = [
    {
        title: 'Scan & Dispose 3 Plastics',
        icon: 'recycle',
        iconBgColor: 'bg-green-100',
        current: 1,
        total: 3,
        rewards: 100,
        progressPercentage: 33
    },
    {
        title: 'Join 1 PvP Challenge',
        icon: 'trophy',
        iconBgColor: 'bg-yellow-100',
        current: 0,
        total: 1,
        rewards: 50,
        progressPercentage: 0
    },
    {
        title: 'Recycle 4 Organic Waste Once',
        icon: 'leaf',
        iconBgColor: 'bg-green-100',
        current: 1,
        total: 4,
        rewards: 200,
        progressPercentage: 25
    }
];

export default function YourChallenges() {
    return (
        <View className="">
            <Text className="text-base font-bold mb-2">Your Challenges</Text>

            {challenges.map((challenge, index) => (
                <View key={index} className="bg-white rounded-2xl mb-4 p-4 shadow">
                    <View className="flex-row">
                        <View className={`w-14 h-14 ${challenge.iconBgColor} rounded-xl items-center justify-center mr-4`}>
                            <FontAwesome5
                                name={challenge.icon}
                                size={24}
                                color={challenge.icon === 'trophy' ? '#F0B83D' : '#00A653'}
                            />
                        </View>

                        <View className="flex-1">
                            <Text className="font-semibold mb-1">{challenge.title}</Text>

                            <View className="flex-row items-center mb-2">
                                <Text className="text-base mr-2">{challenge.current}/{challenge.total}</Text>
                                <View className="flex-1 h-2 bg-gray-200 rounded-full">
                                    <View
                                        className="h-2 bg-[#00A653] rounded-full"
                                        style={{ width: `${challenge.progressPercentage}%` }}
                                    />
                                </View>
                            </View>

                            <View className="flex-row items-center justify-between mt-1">
                                <View className="flex-row items-center">
                                    <FontAwesome5 name="award" size={16} color="#F0B83D" />
                                    <Text className="ml-2 text-base">Rewards:</Text>
                                </View>
                                <View className="flex-row items-center">
                                    <FontAwesome5 name="coins" size={16} color="#F0B83D" />
                                    <Text className="ml-2 text-base">{challenge.rewards}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}