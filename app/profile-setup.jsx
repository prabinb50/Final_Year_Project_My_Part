import { StatusBar } from "react-native";
import ProfileSetupScreen from "../src/components/ProfileSetupScreen";

const ProfileSetupRoute = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ProfileSetupScreen />
        </>
    )
}

export default ProfileSetupRoute