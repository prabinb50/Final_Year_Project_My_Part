import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../src/components/Header'
import Leaderboard from '../../src/components/Leaderboard'

export default function Profile() {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* header */}
            <View>
                <Header title="Profile" />
            </View>

            {/* main contents */}
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} >
                {/* leaderboard section */}
                <View className="mt-6">
                    <Leaderboard />
                </View>
            </ScrollView >
        </SafeAreaView>
    )
}
