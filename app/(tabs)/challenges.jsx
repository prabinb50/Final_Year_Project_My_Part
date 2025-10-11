import { View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../src/components/Header'
import TodayMission from '../../src/components/TodayMission';
import Leaderboard from '../../src/components/Leaderboard';
import RedeemablePoints from '../../src/components/RedeemablePoints';
import YourChallenges from '../../src/components/YourChallenges';
import StartMatch from '../../src/components/StartMatch';

export default function Challenges() {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* header */}
            <View>
                <Header title="Challenges" />
            </View>

            {/* main contents */}
            < ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} >
                {/* today mission*/}
                <View className="">
                    <TodayMission />
                </View>

                {/* start match section */}
                <View className="mt-6">
                    <StartMatch />
                </View>

                {/* leaderboard section */}
                <View className="mt-6">
                    <Leaderboard />
                </View>

                {/* your challenges section */}
                <View className="mt-6">
                    <YourChallenges />
                </View>

                {/* redeemable points section */}
                <View className="mt-2">
                    <RedeemablePoints />
                </View> 
            </ScrollView >
        </SafeAreaView>
    )
}
