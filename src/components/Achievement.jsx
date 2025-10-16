import { View, Text } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const achievements = [
  {
    title: 'First Milestone',
    description: 'Recycled 100 items',
    icon: 'award',
    iconBgColor: 'bg-[#FFA600]/25',
    iconColor: '#FFA600',
    iconType: 'FontAwesome5',
  },
  {
    title: 'Recycle Beast',
    description: 'Scan 50 plastic',
    icon: 'wine-bottle',
    iconBgColor: 'bg-[#BFEEFF]',
    iconColor: '#00A6E2',
    iconType: 'FontAwesome5',
  },
  {
    title: 'Pin the Bin',
    description: 'Add 5 bins on the map',
    icon: 'map-marked',
    iconBgColor: 'bg-[#00A653]/25',
    iconColor: '#00A653',
    iconType: 'FontAwesome5',
  },
  {
    title: 'Daily Streaker',
    description: 'Login 7 days',
    icon: 'fire',
    iconBgColor: 'bg-[#FFA600]/25',
    iconColor: '#FFA600',
    iconType: 'FontAwesome5',
  },
  {
    title: 'Active One',
    description: 'Verify 10 bins',
    icon: 'trash',
    iconBgColor: 'bg-[#DB1923]/25',
    iconColor: '#DB1923',
    iconType: 'FontAwesome5',
  },
  {
    title: 'Eco Warrior',
    description: 'Recycle 500 items',
    icon: 'recycle',
    iconBgColor: 'bg-[#00A653]/25',
    iconColor: '#00A653',
    iconType: 'FontAwesome5',
  },
  {
    title: 'Top Challenger',
    description: 'Win 50 PvP challenges',
    icon: 'trophy',
    iconBgColor: 'bg-[#FFCE29]/25',
    iconColor: '#F1C40F',
    iconType: 'FontAwesome5',
  },
  {
    title: 'Zero Waste Hero',
    description: 'Reach Level 20',
    icon: 'arrowup', 
    iconBgColor: 'bg-[#DCDCDC]',
    iconColor: '#737373',
    iconType: 'AntDesign', 
  },
];

export default function Achievement() {
  return (
    <View className="mt-4 flex-row flex-wrap gap-x-[2%]">
      {achievements.map((item, index) => (
        <View
          key={index}
          className="bg-white rounded-2xl p-4 mb-4 items-center w-[32%]"
        >
          <View
            className={`w-12 h-12 rounded-full items-center justify-center mb-2 ${item.iconBgColor}`}
          >
            {item.iconType === 'FontAwesome5' ? (
              <FontAwesome5 name={item.icon} size={20} color={item.iconColor} />
            ) : (
              <AntDesign name={item.icon} size={24} color={item.iconColor} />
            )}
          </View>

          <Text className="text-center font-semibold text-xs">
            {item.title}
          </Text>

          <Text className="text-center text-gray-600 text-xs">
            {item.description}
          </Text>
        </View>
      ))}
    </View>
  );
}
