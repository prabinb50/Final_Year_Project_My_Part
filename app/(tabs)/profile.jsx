import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../src/components/Header';
import Leaderboard from '../../src/components/Leaderboard';
import ProfileCard from '../../src/components/ProfileCard';
import MyStats from '../../src/components/MyStats';
import Achievement from '../../src/components/Achievement';
import { useState } from 'react';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('stats');
    
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* header */}
            <View>
                <Header title="Profile" />
            </View>

            {/* main contents */}
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
                {/* profile card component */}
                <ProfileCard />

                {/* tab navigation */}
                <View className="flex-row mt-6 border-b border-gray-200">
                    <TouchableOpacity 
                        className={`flex-1 pb-2 ${activeTab === 'stats' ? 'border-b-2 border-[#00A653]' : ''}`}
                        onPress={() => setActiveTab('stats')}
                    >
                        <Text 
                            className={`text-center ${activeTab === 'stats' ? 'text-[#00A653] font-semibold' : 'text-gray-400'}`}
                        >
                            My Stats
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        className={`flex-1 pb-2 ${activeTab === 'achievements' ? 'border-b-2 border-[#00A653]' : ''}`}
                        onPress={() => setActiveTab('achievements')}
                    >
                        <Text 
                            className={`text-center ${activeTab === 'achievements' ? 'text-[#00A653] font-semibold' : 'text-gray-400'}`}
                        >
                            Achievement
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* tab content - conditional rendering */}
                {activeTab === 'stats' ? (
                    <>
                        <MyStats />
                        {/* leaderboard section */}
                        <View className="mt-4 mb-8">
                            <Leaderboard />
                        </View>
                    </>
                ) : (
                    <Achievement />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}