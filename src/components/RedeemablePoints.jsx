import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function RedeemablePoints() {
    const router = useRouter();

    return (
        <View className=" rounded-2xl overflow-hidden">
            <LinearGradient colors={['#CEE8CD', '#FDE1B8']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 2 }} className="p-4">
                <View className="flex-row justify-between items-center">
                    <View>
                        <Text className="text-[#00A653] font-bold text-3xl">1,576</Text>
                        <Text className="text-lg text-black">Redeemable Points</Text>

                        <View className="mt-2">
                            <Text className="text-sm text-gray-600">Scan, Play & Gain more points.</Text>
                            <Text className="text-sm text-gray-600">Redeem for exciting prizes & offers!</Text>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => router.push("/redeem-points")}
                            className="justify-center items-center flex flex-col gap-1">
                            <FontAwesome5 name="award" size={70} color="#FFA600" />
                            <Text className="text-sm text-[#00A653] underline">Redeem now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}
