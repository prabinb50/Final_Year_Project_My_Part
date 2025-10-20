import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function ResultModal({ visible, result, onClose, onScanAgain }) {
  if (!result) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-2xl w-[85%] p-6 shadow-lg">
          {/* Result header */}
          <View className="items-center mb-6">
            {result.success ? (
              <>
                <View className="w-16 h-16 rounded-full bg-green-100 items-center justify-center mb-2">
                  <Ionicons name="checkmark-circle" size={40} color="#00A653" />
                </View>
                <Text className="text-xl font-bold">Detection Success!</Text>
              </>
            ) : (
              <>
                <View className="w-16 h-16 rounded-full bg-red-100 items-center justify-center mb-2">
                  <Ionicons name="close-circle" size={40} color="#FF3D00" />
                </View>
                <Text className="text-xl font-bold">Detection Failed</Text>
              </>
            )}
          </View>

          {/* Results details */}
          <View className="bg-gray-50 rounded-xl p-4 mb-6">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-gray-600 font-medium">Waste Type:</Text>
              <Text className="font-semibold">{result.wasteType}</Text>
            </View>
            
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-gray-600 font-medium">Bin Status:</Text>
              <Text 
                className={`font-semibold ${
                  result.binStatus === 'Inside' ? 'text-[#00A653]' : 'text-red-500'
                }`}
              >
                {result.binStatus}
              </Text>
            </View>
            
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600 font-medium">Points Earned:</Text>
              <View className="flex-row items-center">
                <FontAwesome5 name="coins" size={16} color="#FFA600" className="mr-1" />
                <Text className="font-bold text-[#FFA600]">{result.points}</Text>
              </View>
            </View>
          </View>

          {/* Action buttons */}
          <View className="flex-row justify-between">
            <TouchableOpacity 
              className="bg-gray-200 rounded-full py-3 px-6 flex-1 mr-2"
              onPress={onClose}
            >
              <Text className="text-center font-medium">Back to Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="bg-[#00A653] rounded-full py-3 px-6 flex-1 ml-2"
              onPress={onScanAgain}
            >
              <Text className="text-center text-white font-medium">Scan Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}