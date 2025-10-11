import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, image }) {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={image || require('../../assets/images/home-header-1.png')}
        style={{ width: '100%', height: 155 }}
        resizeMode="cover"
      >
        {/* overlay container */}
        <View className="flex-1 justify-center items-center">
          {/* back button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute bottom-15 left-10 bg-white/10 rounded-full p-2 mb-3"
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          {/* header title */}
          <Text className="text-white text-2xl font-bold text-center mb-3">
            {title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
