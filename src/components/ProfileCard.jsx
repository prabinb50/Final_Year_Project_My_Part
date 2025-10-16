import { View, Text, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Stats summary data for mapping
const statsItems = [
    {
        id: 1,
        icon: 'recycle',
        value: '1241',
        label: 'Trash Disposed',
        bgColor: 'bg-[#00A653]/15',
        iconColor: '#00A653'
    },
    {
        id: 2,
        icon: 'coins',
        value: '5120',
        label: 'Points Earned',
        bgColor: 'bg-[#FFA600]/15',
        iconColor: '#FFA600'
    },
    {
        id: 3,
        icon: 'trash',
        value: '5',
        label: 'Bins Added',
        bgColor: 'bg-[#DB1923]/15',
        iconColor: '#DB1923'
    }
];


export default function ProfileCard() {
    return (
        <View className="">
            {/* user info section */}
            <View className="flex-row items-start">
                {/* user avatar */}
                <Image
                    source={require('../../assets/images/user-avator.png')}
                    resizeMode='cover'
                    className="w-20 h-20 rounded-full mr-3"
                />

                {/* user details */}
                <View className="flex-1">
                    <Text className="text-xl font-bold">Prabin Joshi</Text>
                    <Text className="text-gray-600 text-sm rounded-md bg-gray-200 w-[22%] p-1">#021545</Text>

                    <View className="mt-3">
                        {/* level */}
                        <View className="flex-row items-center justify-between">
                            <Text className="font-semibold text-xs">Level 10</Text>

                            <Text className="font-semibold text-xs">1,240/4000 XP</Text>
                        </View>

                        {/* XP Progress Bar */}
                        <View className="mt-1 h-2 bg-gray-200 rounded-full">
                            <View
                                className="h-full bg-[#FFA600] rounded-full"
                                style={{ width: `${(1240 / 4000) * 100}%` }}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* stats summary */}
            <View className="flex-row justify-between mt-6">
                {statsItems.map((item) => (
                    <View key={item.id} className="flex flex-row items-center justify-between gap-2">
                        <View className={`w-11 h-11 ${item.bgColor} rounded-xl items-center justify-center mb-1`}>
                            <FontAwesome5 name={item.icon} size={20} color={item.iconColor} />
                        </View>

                        <View className="flex flex-col">
                            <Text className="font-semibold text-lg">{item.value}</Text>
                            <Text className="text-gray-600 text-xs">{item.label}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}