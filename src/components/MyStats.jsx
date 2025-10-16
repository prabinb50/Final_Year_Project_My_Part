import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

// stats details data for mapping
const statsDetails = [
    {
        id: 1,
        label: 'Games Played',
        value: '42',
        color: 'text-gray-900'
    },
    {
        id: 2,
        label: 'Challenges Completed',
        value: '27',
        color: 'text-gray-900'
    },
    {
        id: 3,
        label: 'Correct Disposal',
        value: '356',
        color: 'text-[#00A653]'
    },
    {
        id: 4,
        label: 'Incorrect Disposal',
        value: '18',
        color: 'text-red-500'
    }
];

export default function MyStats() {
    return (
        <View className="rounded-2xl mt-4 overflow-hidden">
            <LinearGradient
                colors={['#CEE8CD', '#FDE1B8']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 2 }}
                className="p-4"
            >
                <Text className="font-semibold text-base mb-4">PvP Stats</Text>
                {/* success rate container */}
                <View className="flex-row gap-4">
                    <View className="rounded-full border-[4px] border-[#BCCEBA] p-1 items-center justify-center">
                        <View className="w-24 h-24 rounded-full border border-[#BCCEBA] items-center justify-center">
                            <Text className="text-center text-2xl font-semibold">64%</Text>
                            <Text className="text-center text-gray-600 text-xs">Success Rate</Text>
                        </View>
                    </View>

                    {/* Stats details */}
                    <View className="flex-1">
                        <View className="flex-row flex-wrap">
                            {statsDetails.map((stat, index) => (
                                <View
                                    key={stat.id}
                                    className={`${index < 2 ? 'mb-3' : ''} ${index % 2 === 0 ? 'w-1/2 pr-3' : 'w-1/2'}`}
                                >
                                    <Text className="text-gray-600 mb-1 text-xs">{stat.label}</Text>
                                    <Text className={`text-xl font-semibold ${stat.color}`}>
                                        {stat.value}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}