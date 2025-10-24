import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { usePoints } from '../context/PointsProvider';

export default function ResultModal({ visible, result, onClose, onScanAgain }) {
  const { addPoints } = usePoints();
  const pointsAddedRef = useRef(false);

  // Add points when a successful detection occurs - only once per result
  useEffect(() => {
    if (visible && result && result.success && !pointsAddedRef.current) {
      addPoints(result.points);
      pointsAddedRef.current = true;
    }

    // Reset the ref when modal is closed
    if (!visible) {
      pointsAddedRef.current = false;
    }
  }, [visible, result, addPoints]);

  if (!result) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-3xl w-[90%] p-6 shadow-lg relative">
          {/* Close button */}
          <TouchableOpacity
            className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full items-center justify-center z-10"
            onPress={onClose}
          >
            <Ionicons name="close" size={20} color="white" />
          </TouchableOpacity>

          {result.success ? (
            <>
              {/* Mascot Image */}
              <View className="items-center mt-2 mb-4">
                <Image
                  source={require('../../assets/images/Mascot.png')}
                  style={{ width: 200, height: 200 }}
                  resizeMode="contain"
                />
              </View>

              {/* Success Title */}
              <Text className="text-[#00A653] text-2xl font-bold text-center">
                Scan Successful!
              </Text>

              {/* Success Message */}
              <Text className="text-base text-center mt-3 px-2 leading-6">
                You've earned {result.points} points for disposing a {result.wasteType.toLowerCase()} waste correctly. Keep it up — you're helping build a cleaner world!
              </Text>

              {/* Bin Status - subtle display */}
              <Text className="text-gray-600 text-sm text-center mt-2">
                Bin Status: <Text className="text-[#00A653] font-semibold">{result.binStatus}</Text>
              </Text>

              {/* Points Badge */}
              <View className="items-center mt-5 mb-6">
                <View className="flex-row items-center">
                  <FontAwesome5 name="coins" size={24} color="#FFA600" />
                  <Text className="text-[#FFA600] font-bold text-2xl ml-2">
                    x{result.points}
                  </Text>
                </View>
              </View>

              {/* Action buttons */}
              <View className="flex-row justify-between mt-2">
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
            </>
          ) : (
            <>
              {/* Failure State - keeping the old design */}
              <View className="items-center mb-6">
                <View className="w-16 h-16 rounded-full bg-red-100 items-center justify-center mb-2">
                  <Ionicons name="close-circle" size={40} color="#FF3D00" />
                </View>
                <Text className="text-xl font-bold">Detection Failed</Text>
              </View>

              {/* Results details */}
              <View className="bg-gray-50 rounded-xl p-4 mb-6">
                <View className="flex-row justify-between items-center mb-3">
                  <Text className="text-gray-600 font-medium">Waste Type:</Text>
                  <Text className="font-semibold">{result.wasteType}</Text>
                </View>

                <View className="flex-row justify-between items-center mb-3">
                  <Text className="text-gray-600 font-medium">Bin Status:</Text>
                  <Text className="font-semibold text-red-500">
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
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}