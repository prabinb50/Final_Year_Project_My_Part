import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { usePoints } from '../context/PointsProvider';

// instruction data for unsuccessful scan
const SCAN_INSTRUCTIONS = [
  {
    icon: 'phone-portrait-outline',
    iconType: 'Ionicons',
    iconColor: '#3B82F6',
    iconSize: 32,
    text: 'Keep your phone stable while scanning.'
  },
  {
    icon: 'hand-pointing-up',
    iconType: 'MaterialCommunityIcons',
    iconColor: '#F59E0B',
    iconSize: 40,
    text: 'Make sure the waste item is visible to the camera.'
  },
  {
    icon: 'sunny',
    iconType: 'Ionicons',
    iconColor: '#FCD34D',
    iconSize: 36,
    text: 'Ensure there\'s enough light for accurate detection.'
  },
  {
    icon: 'delete',
    iconType: 'MaterialCommunityIcons',
    iconColor: '#00A653',
    iconSize: 40,
    text: 'Drop the item fully inside the bin before ending the scan.'
  }
];

export default function ResultModal({ visible, result, onClose, onScanAgain }) {
  const { addPoints } = usePoints();
  const pointsAddedRef = useRef(false);

  // add points when a successful detection occurs - only once per result
  useEffect(() => {
    if (visible && result?.success && !pointsAddedRef.current) {
      addPoints(result.points);
      pointsAddedRef.current = true;
    }

    // reset the ref when modal is closed
    if (!visible) {
      pointsAddedRef.current = false;
    }
  }, [visible, result, addPoints]);

  // render icon based on type
  const renderIcon = (instruction) => {
    const IconComponent = instruction.iconType === 'Ionicons' ? Ionicons : MaterialCommunityIcons;
    return (
      <IconComponent 
        name={instruction.icon} 
        size={instruction.iconSize} 
        color={instruction.iconColor} 
      />
    );
  };

  // early return if no result
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
          {/* close button */}
          <TouchableOpacity
            className="absolute top-[-8] right-[-8] w-8 h-8 bg-[#DB1923] rounded-full items-center justify-center z-10"
            onPress={onClose}
            accessibilityLabel="Close modal"
            accessibilityRole="button"
          >
            <Ionicons name="close" size={20} color="white" />
          </TouchableOpacity>

          {result.success ? (
            <>
              {/* mascot image */}
              <View className="items-center">
                <Image
                  source={require('../../assets/images/Mascot.png')}
                  style={{ width: 200, height: 200 }}
                  resizeMode="contain"
                  accessible={true}
                  accessibilityLabel="Success mascot"
                />
              </View>

              {/* success title */}
              <Text className="text-[#00A653] text-2xl font-bold text-center">
                Scan Successful!
              </Text>

              {/* success message */}
              <Text className="text-base text-center mt-3 px-2 leading-6">
                You've earned {result.points} points for disposing a {result.wasteType.toLowerCase()} waste correctly. Keep it up — you're helping build a cleaner world!
              </Text>

              {/* bin status */}
              <Text className="text-gray-600 text-sm text-center mt-2">
                Bin Status: <Text className="text-[#00A653] font-semibold">{result.binStatus}</Text>
              </Text>

              {/* points badge */}
              <View className="items-center mt-5 mb-6">
                <View className="flex-row items-center">
                  <FontAwesome5 name="coins" size={24} color="#FFA600" />
                  <Text className="text-[#FFA600] font-bold text-2xl ml-2">
                    x{result.points}
                  </Text>
                </View>
              </View>

              {/* back to home button */}
              <TouchableOpacity
                className="bg-gray-200 rounded-full py-4 px-6"
                onPress={onClose}
                accessibilityLabel="Back to home"
                accessibilityRole="button"
              >
                <Text className="text-center font-medium">Back to Home</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* warning icon */}
              <View className="items-center">
                <Ionicons name="warning" size={80} color="#DB1923" />
              </View>

              {/* failure title */}
              <Text className="text-[#DB1923] text-2xl font-bold text-center">
                Scan Unsuccessful
              </Text>

              {/* failure message */}
              <Text className="text-base text-center mt-3 px-2">
                Your action couldn't be verified as correct. Here's how to dispose properly:
              </Text>

              {/* bin status */}
              <Text className="text-gray-600 text-sm text-center mt-2 mb-4">
                Bin Status: <Text className="text-[#DB1923] font-semibold">{result.binStatus}</Text>
              </Text>

              {/* instructions grid */}
              <View className="flex-row flex-wrap justify-between px-2 mb-6">
                {SCAN_INSTRUCTIONS.map((index, instruction) => (
                  <View 
                    key={index} 
                    className="w-[48%] bg-gray-50 rounded-2xl p-4 mb-3 items-center"
                  >
                    <View className="w-16 h-16 items-center justify-center">
                      {renderIcon(instruction)}
                    </View>
                    <Text className="text-xs text-center leading-4">
                      {instruction.text}
                    </Text>
                  </View>
                ))}
              </View>

              {/* action buttons */}
              <View className="flex-row justify-between mt-2">
                <TouchableOpacity
                  className="bg-gray-200 rounded-full py-3 px-6 flex-1 mr-2"
                  onPress={onClose}
                  accessibilityLabel="Back to home"
                  accessibilityRole="button"
                >
                  <Text className="text-center font-medium">Back to Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="bg-[#00A653] rounded-full py-3 px-6 flex-1 ml-2"
                  onPress={onScanAgain}
                  accessibilityLabel="Scan again"
                  accessibilityRole="button"
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