import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// data for achievements
const achievements = [
    {
        title: 'First Milestone',
        description: 'Recycled 100 items',
        icon: 'award',
        reward: 500,
        color: '#FFA600',
        iconbgColor: 'bg-[#FFA600]/25'
    },
    {
        title: 'Pin the Bin',
        description: 'Add 5 bins on the map',
        icon: 'map-marked',
        reward: 500,
        color: '#00A653',
        iconbgColor: 'bg-[#00A653]/25'
    },
    {
        title: 'Recycle Buddy',
        description: 'Recycle 50 plastic items',
        icon: 'wine-bottle',
        reward: 500,
        color: '#1DAE63',
        iconbgColor: 'bg-[#BFEEFF]'
    },
];

export default function RecentAchievements() {
    return (
        <View>
            {/* achievements header */}
            <View className="flex-row justify-between items-center mb-3" >
                <Text className="text-base font-bold">Recent Achievements</Text>

                <TouchableOpacity>
                    <Text className="text-[#00A653] text-base">View All</Text>
                </TouchableOpacity>
            </View>

            {/* achievements row */}
            <View className="flex-row items-center justify-between gap-5">
                {
                    achievements.map((achievement, index) => (
                        <View key={index} className="shadow bg-white items-center rounded-xl p-4">
                            {/* icon */}
                            <View className={`h-11 w-11 items-center justify-center mb-2 rounded-full ${achievement.iconbgColor}`}>
                                <FontAwesome5 name={achievement.icon} size={20} color={achievement.color} />
                            </View>

                            {/* details */}
                            <Text className="font-semibold text-sm">{achievement.title}</Text>
                            <Text className="text-sm text-gray-500">{achievement.description}</Text>

                            {/* reward */}
                            <View className="flex-row mt-2 items-center">
                                <FontAwesome5 name="coins" size={15} color="#FFA600" />
                                <Text className="text-gray-500 ml-2 text-sm">+{achievement.reward}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}
