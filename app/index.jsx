import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500 text-2xl">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}



// import React from "react";
// import * as Animatable from "react-native-animatable";
// import { LinearGradient } from "expo-linear-gradient";
// import LottieView from "lottie-react-native";

// export default function Index() {
//   return (
//     <LinearGradient
//       colors={['#ebf9f2', '#ffffff', '#d9f2e6']}
//       className="flex-1 justify-center items-center"
//     >
//       {/* Animated container */}
//       <Animatable.View
//         animation="fadeIn"
//         duration={1000}
//         className="items-center"
//       >
//         {/* Logo or placeholder */}
//         <Animatable.Image
//           source={require("../assets/images/Mascot.png")}
//           className="w-32 h-32 mb-6"
//           animation="pulse"
//           easing="ease-out"
//           iterationCount="infinite"
//           resizeMode="contain"
//         />

//         {/* Loading animation */}
//         <LottieView
//           autoPlay
//           loop
//           style={{ width: 120, height: 80 }}
//           source={require('../assets/animations/animation.json')}
//         // If you don't have this animation file yet, you can comment this out
//         // and use the fallback ActivityIndicator below
//         />

//         {/* App name with animated reveal */}
//         <Animatable.Text
//           animation="fadeInUp"
//           className="text-3xl font-bold text-green-600 mt-4"
//         >
//           BinHero
//         </Animatable.Text>

//         {/* Tagline */}
//         <Animatable.Text
//           animation="fadeInUp"
//           delay={300}
//           className="text-base text-gray-600 mt-2"
//         >
//           Smart waste management
//         </Animatable.Text>
//       </Animatable.View>
//     </LinearGradient>
//   );
// }