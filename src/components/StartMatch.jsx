import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function StartMatch() {
  return (
    <View className="w-full rounded-2xl overflow-hidden bg-black border pb-2">
      <View className="bg-[#00A653] px-6 py-5 rounded-2xl">
        {/* title with trophy icons */}
        <View className="flex-row items-center justify-center mb-3">
          <FontAwesome5 name="trophy" size={24} color="#FFD700" />
          <Text className="text-white text-3xl font-bold mx-3">Start a match</Text>
          <FontAwesome5 name="trophy" size={24} color="#FFD700" />
        </View>
        
        {/* dashed line */}
        <View className="border-t border-dashed border-white opacity-70 mb-3" />
        
        {/* buttons */}
        <View className="flex-row justify-center items-center gap-3">
          <TouchableOpacity className="bg-white py-2 px-6 rounded-full">
            <Text className="text-[#00A653] font-semibold text-center">1v1</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-white py-2 px-6 rounded-full">
            <Text className="text-[#00A653] font-semibold text-center">Team</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}