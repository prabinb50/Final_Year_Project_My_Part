import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return <Stack initialRouteName="splash" screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name="splash" />
    {/* <Stack.Screen name="(introduction)/onboarding" /> */}
    <Stack.Screen name="(auth)/signup" />
    <Stack.Screen name="(auth)/login" />
    <Stack.Screen name="index" />
  </Stack>;
}