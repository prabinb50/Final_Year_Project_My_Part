import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../src/components/Header';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useMemo } from 'react';

export default function Notifications() {
    // static notification data
    const notifications = useMemo(() => [
        {
            id: 1,
            title: 'Bin Under Review',
            message: 'Your bin photo and location are now being reviewed by our moderators. Once approved, it will appear on the public map and you\'ll be rewarded.',
            icon: 'search',
            iconType: 'material',
            iconColor: '#4169E1',
            // iconBgColor: '#E3F2FD',
            actionText: 'Track My Submission',
            // actionLink: 'track',
            time: '5 min',
            read: false
        },
        {
            id: 2,
            title: 'Reward Unlocked!',
            message: 'You just earned 100 points for correctly disposing waste. Keep scanning to climb the leaderboard and unlock more rewards!',
            icon: 'gift',
            iconType: 'font-awesome',
            iconColor: '#FF3D00',
            // iconBgColor: '#FFEBEE',
            actionText: 'See Info',
            // actionLink: 'info',
            time: '45 min',
            read: false
        },
        {
            id: 3,
            title: 'PvP Challenge Results Are In',
            message: 'Well done! Your challenge just ended and you\'ve secured a top rank. See your final score and claim your points.',
            icon: 'trophy',
            iconType: 'font-awesome',
            iconColor: '#F1C40F',
            // iconBgColor: 'bg-[#FFCE29]/25',
            actionText: 'View Results & Claim',
            // actionLink: 'results',
            time: '18 hr',
            read: true
        },
        {
            id: 4,
            title: 'Your Bin is Approved',
            message: 'Thanks for helping the community! The bin you submitted has been verified and added to the map. Points have been credited to your account.',
            icon: 'leaf',
            iconType: 'font-awesome',
            iconColor: '#00A653',
            // iconBgColor: '#E8F5E9',
            actionText: 'View on Map',
            // actionLink: 'map',
            time: '2 day',
            read: true
        },
        {
            id: 5,
            title: 'Daily Streak Achieved',
            message: 'You\'ve scanned waste for 3 days in a row! Stay consistent to earn a streak bonus and level up faster.',
            icon: 'fire',
            iconType: 'font-awesome',
            iconColor: '#FFA600',
            // iconBgColor: 'bg-[#FFA600]/25',
            actionText: 'Continue Streak',
            // actionLink: 'streak',
            time: '3 day',
            read: true
        },
    ], []);

    // helper function to render the correct icon
    const renderIcon = (notification) => {
        if (notification.iconType === 'material') {
            return <MaterialIcons name={notification.icon} size={24} color={notification.iconColor} />;
        } else {
            return <FontAwesome5 name={notification.icon} size={20} color={notification.iconColor} />;
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* header */}
            <View>
                <Header title="Notifications" />
            </View>

            {/* main contents */}
            <ScrollView className="flex-1 mt-2" showsVerticalScrollIndicator={false}>
                {notifications.map((notification) => (
                    <View 
                        key={notification.id} 
                        className={`border-b border-[#000000]/50 ${notification.read ? 'bg-white' : 'bg-[#00A653]/10'}`}
                    >
                        <View className="py-3 ml-5">
                            <View className="flex-row">
                                {/* left column for indicator dot and icon  */}
                                <View className="w-14 items-center">
                                    {/* unread indicator dot */}
                                    {!notification.read && (
                                        <View className="h-2 w-2 rounded-full bg-[#FF3D00] absolute top-3 right-14" />
                                    )}
                                    
                                    {/* icon */}
                                    <View className="h-9 w-9 rounded-full items-center justify-center">
                                        {renderIcon(notification)}
                                    </View>
                                </View>
                                
                                {/* right column for content */}
                                <View className="flex-1 pr-5">
                                    {/* title and time row */}
                                    <View className="flex-row justify-between items-center mb-1">
                                        <Text className="text-[#00A653] font-semibold text-lg">
                                            {notification.title}
                                        </Text>
                                        
                                        <Text className="text-gray-600 text-sm">
                                            {notification.time}
                                        </Text>
                                    </View>
                                    
                                    {/* message */}
                                    <Text className="text-gray-600 text-sm mb-1">
                                        {notification.message}
                                    </Text>
                                    
                                    {/* action button */}
                                    <TouchableOpacity>
                                        <Text className="text-[#00A653] text-sm font-medium underline italic">
                                            {notification.actionText}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}