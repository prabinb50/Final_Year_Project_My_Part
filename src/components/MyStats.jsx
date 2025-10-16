import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

// Stats details data for mapping
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
    // Progress percentage
    const progressPercentage = 64;

    return (
        <View className="rounded-2xl mt-4 overflow-hidden">
            <LinearGradient
                colors={['#CEE8CD', '#FDE1B8']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 2 }}
                className="p-4"
            >
                <Text className="font-semibold text-base mb-4">PvP Stats</Text>

                <View className="flex-row">
                    {/* Success rate circle */}
                    <View className="mr-5">
                        <View className="items-center justify-center w-28 h-28">
                            {/* Background circle */}
                            <View
                                className="w-28 h-28 rounded-full border-8 border-gray-100 absolute"
                            />
                            {/* Progress circle - using conical gradient simulation with borders */}
                            <View
                                className="w-28 h-28 rounded-full border-8 border-[#00A653] absolute"
                                style={{
                                    borderTopColor: 'transparent',
                                    borderRightColor: 'transparent',
                                    borderLeftWidth: progressPercentage >= 50 ? 8 : 0,
                                    transform: [
                                        { rotateZ: `${progressPercentage * 3.6}deg` }
                                    ]
                                }}
                            />
                            {/* For progress > 50%, we need an additional element */}
                            {progressPercentage > 50 && (
                                <View
                                    className="w-28 h-28 rounded-full border-8 absolute"
                                    style={{
                                        borderLeftColor: '#00A653',
                                        borderBottomColor: '#00A653',
                                        borderRightColor: 'transparent',
                                        borderTopColor: 'transparent',
                                        transform: [{ rotateZ: '0deg' }]
                                    }}
                                />
                            )}
                            <View className="absolute items-center">
                                <Text className="text-2xl font-semibold">64%</Text>
                                <Text className="text-xs text-gray-600">Success Rate</Text>
                            </View>
                        </View>
                    </View>

                    {/* Stats details using grid layout */}
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