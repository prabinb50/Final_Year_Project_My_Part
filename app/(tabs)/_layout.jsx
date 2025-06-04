import { Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#00A653', // Green active color
                tabBarInactiveTintColor: 'rgba(0, 166, 83, 0.45)', // Light green inactive color
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    borderTopColor: '#f0f0f0',
                },
            }}>
            {/* Home Tab */}
            <Tabs.Screen name='home'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                }}
            />

            {/* Map Tab */}
            <Tabs.Screen name='map'
                options={{
                    title: "Map",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map-marker-outline" size={24} color={color} />
                    ),
                }}
            />

            {/* Camera Tab (Special floating button) */}
            <Tabs.Screen name='camera'
                options={{
                    title: "",
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            className="w-15 h-15 rounded-full bg-green-600 justify-center items-center -mt-5 shadow-lg"
                        >
                            <Ionicons name="scan" size={26} color="white" />
                        </TouchableOpacity>
                    ),
                }}
            />

            {/* Challenges Tab */}
            <Tabs.Screen name='challenges'
                options={{
                    title: "Challenges",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="gamepad" size={24} color={color} />
                    ),
                }}
            />

            {/* Profile Tab */}
            <Tabs.Screen name='profile'
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabLayout;