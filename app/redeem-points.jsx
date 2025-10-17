import  { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../src/components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const rewardItems = [
    {
        title: 'Gym Discount',
        description: '10% off monthly membership',
        cost: 2500,
        icon: 'dumbbell',
        iconBgColor: 'bg-[#1F7EBA]/25',
        iconColor: '#1F7EBA',
        detailDescription: 'Take a step toward both personal health and environmental impact! By redeeming this reward, you\'ll enjoy 10% off your monthly gym membership, giving you the motivation to stay active while also being rewarded for making eco-friendly choices through BinHero.',
        additionalInfo: 'This offer is a great way to connect your sustainable habits with your lifestyle goals. Whether you\'re working on fitness milestones or just starting your journey, this discount helps you stay consistent without stretching your budget.',
        note: 'Note: Offer valid once per month at all partner gyms.'
    },
    {
        title: 'Music Class Pass',
        description: '1-hour session at partner studio',
        cost: 500,
        icon: 'music',
        iconBgColor: 'bg-[#C300FF]/25',
        iconColor: '#C300FF',
        detailDescription: 'Express yourself through music! This pass gives you access to a 1-hour session at any of our partner music studios. Learn an instrument, take vocal lessons, or just jam out!',
        additionalInfo: 'Music is a wonderful way to reduce stress while developing a new skill. Our partner studios offer various classes for all skill levels, from beginners to advanced musicians.',
        note: 'Note: Booking required 48 hours in advance. Subject to availability.'
    },
    {
        title: 'Movie Ticket',
        description: 'Enjoy 1 free movie entry',
        cost: 2500,
        icon: 'film',
        iconBgColor: 'bg-[#FF0000]/25',
        iconColor: '#FF0000',
        detailDescription: 'Reward yourself with entertainment! This voucher gives you one free movie ticket at any partner cinema. Enjoy the latest blockbusters as a reward for your environmental contributions.',
        additionalInfo: 'Take a break and immerse yourself in a great story. This reward is perfect for unwinding after working hard on your sustainability goals.',
        note: 'Note: Valid for standard screenings only. Not applicable on weekends and holidays.'
    },
    {
        title: 'Coffee Voucher',
        description: 'Get a free coffee at AB cafe',
        cost: 300,
        icon: 'coffee',
        iconBgColor: 'bg-[#675131]/25',
        iconColor: '#675131',
        detailDescription: 'Perk up your day with a free coffee from AB Cafe! This voucher lets you enjoy any regular-sized coffee beverage of your choice as a thank you for your eco-conscious efforts.',
        additionalInfo: 'AB Cafe is committed to sustainability with compostable cups and ethically sourced beans. Your voucher supports both your caffeine needs and environmental values!',
        note: 'Note: Valid for one regular-sized coffee. Additional customizations may incur extra charges.'
    },
];

export default function RedeemPoints() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedReward, setSelectedReward] = useState(null);

    const openRedeemModal = (reward) => {
        setSelectedReward(reward);
        setModalVisible(true);
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* header */}
            <View>
                <Header title="Redeem Points" />
            </View>

            {/* main content */}
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
                {/* points summary card */}
                <View className="rounded-2xl overflow-hidden mb-7">
                    <LinearGradient colors={['#CEE8CD', '#FDE1B8']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 2 }} className="p-4">
                        <View className="flex-row justify-between items-center">
                            <View className="flex-row items-center">
                                <FontAwesome5 name="coins" size={45} color="#FFA500" />

                                <View className="ml-5">
                                    <Text className="text-gray-600 text-base">Your Points</Text>
                                    <Text className="text-[#00A653] font-bold text-3xl">1,576</Text>
                                </View>
                            </View>

                            <Image
                                source={require('../assets/images/Mascot-1.png')}
                                className="w-24 h-24"
                                resizeMode="cover"
                            />
                        </View>
                    </LinearGradient>
                </View>

                {/* reward items */}
                {rewardItems.map((item, index) => (
                    <View key={index} className="bg-white rounded-2xl mb-4 p-4 shadow">
                        <View className="flex-row items-center">
                            <View className={`${item.iconBgColor} w-14 h-14 rounded-full items-center justify-center`}>
                                <FontAwesome5 name={item.icon} size={24} color={item.iconColor} />
                            </View>

                            <View className="ml-4">
                                <Text className="text-lg font-semibold">{item.title}</Text>
                                <Text className="text-gray-600">{item.description}</Text>
                            </View>
                        </View>

                        <View className="flex-row justify-between items-center mt-3">
                            <Text className="text-base">Cost: {item.cost.toLocaleString()} pts</Text>

                            <TouchableOpacity
                                className="flex-row items-center"
                                onPress={() => openRedeemModal(item)}
                            >
                                <Text className="text-[#00A653] text-sm underline">Redeem</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={20} color="#00A653" className="mt-0.5 -ml-0.5" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* redeem modal */}
            {selectedReward && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <Pressable
                        className="flex-1 justify-center items-center bg-black/50"
                        onPress={() => setModalVisible(false)}
                    >
                        <Pressable className="w-[90%] bg-white rounded-3xl p-6" onPress={e => e.stopPropagation()}>
                            {/* icon */}
                            <View className="items-center mb-4">
                                <View className={`${selectedReward.iconBgColor} w-20 h-20 rounded-full items-center justify-center`}>
                                    <FontAwesome5
                                        name={selectedReward.icon}
                                        size={32}
                                        color={selectedReward.iconColor}
                                    />
                                </View>
                            </View>

                            {/* title */}
                            <Text className="text-center text-2xl font-bold mb-4">
                                {selectedReward.title}
                            </Text>

                            {/* description */}
                            <Text className="text-base mb-4 text-center">
                                {selectedReward.detailDescription}
                            </Text>

                            <Text className="text-base mb-6 text-center">
                                {selectedReward.additionalInfo}
                            </Text>

                            {/* note */}
                            <Text className="text-[#00A653] italic text-base mb-6 text-center">
                                {selectedReward.note}
                            </Text>

                            {/* buttons */}
                            <View className="flex-row justify-between mt-2">
                                <TouchableOpacity
                                    onPress={() => setModalVisible(false)}
                                    className="px-6 py-4 rounded-2xl w-[45%]"
                                >
                                    <Text className="text-center text-lg font-semibold">Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        // handle redeem logic here in future
                                        setModalVisible(false);
                                    }}
                                    className="bg-[#00A653] px-6 py-4 rounded-2xl w-[45%]"
                                >
                                    <Text className="text-white text-center text-lg font-semibold">Redeem Now</Text>
                                </TouchableOpacity>
                            </View>
                        </Pressable>
                    </Pressable>
                </Modal>
            )}
        </SafeAreaView>
    );
}