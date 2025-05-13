import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    />
  );
}