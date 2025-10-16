import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const achievements = [
    {
        id: 1,
        title: 'First Milestone',
        description: 'Recycle 100 items',
        icon: 'medal',
        iconBgColor: '#FFF2CC',
        iconColor: '#F6BC00',
    },
    {
        id: 2,
        title: 'Recycle Beast',
        description: 'Scan 50 plastic',
        icon: 'recycle',
        iconBgColor: '#D6EAF8',
        iconColor: '#3498DB',
    },
    {
        id: 3,
        title: 'Pin the Bin',
        description: 'Add 5 bins on the map',
        icon: 'map-marker',
        iconBgColor: '#D5F5E3',
        iconColor: '#00A653',
    },
    {
        id: 4,
        title: 'Daily Streaker',
        description: 'Login 7 days',
        icon: 'fire',
        iconBgColor: '#FADBD8',
        iconColor: '#E74C3C',
    },
    {
        id: 5,
        title: 'Active One',
        description: 'Verify 10 bins',
        icon: 'trash',
        iconBgColor: '#E8DAEF',
        iconColor: '#8E44AD',
    },
    {
        id: 6,
        title: 'Eco Warrior',
        description: 'Recycle 500 items',
        icon: 'leaf',
        iconBgColor: '#D5F5E3',
        iconColor: '#00A653',
    },
    {
        id: 7,
        title: 'Top Challenger',
        description: 'Win 50 PvP challenges',
        icon: 'trophy',
        iconBgColor: '#FEF9E7',
        iconColor: '#F1C40F',
    },
    {
        id: 8,
        title: 'Zero Waste Hero',
        description: 'Reach Level 20',
        icon: 'award',
        iconBgColor: '#EAEDED',
        iconColor: '#7F8C8D',
    }
];

export default function Achievement() {
    return (
        <View className="mt-4 flex-row flex-wrap justify-between">
            {achievements.map((item) => (
                <View
                    key={item.id}
                    className="bg-white rounded-2xl p-4 mb-4 items-center w-[32%]"
                >
                    <View
                        className="w-12 h-12 rounded-full items-center justify-center mb-2"
                        style={{ backgroundColor: item.iconBgColor }}
                    >
                        <FontAwesome5
                            name={item.icon}
                            size={20}
                            color={item.iconColor}
                        />
                    </View>
                    <Text className="text-center font-semibold text-xs">{item.title}</Text>
                    <Text className="text-center text-gray-500 text-xs">{item.description}</Text>
                </View>
            ))}
        </View>
    );
}