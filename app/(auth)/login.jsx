import { useRouter } from "expo-router";
import { Image, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Login = () => {
    const router = useRouter(); // Hook to navigate between screens

    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    // State to manage confirm password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Validation schema
    const SigninSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Confirm password is required"),
    });

    // function for signup logic
    const handleSignIn = () => { };

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Set status bar style for better UI visibility */}
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FAF9F6"
            />

            {/* Header Background */}
            <View>
                <ImageBackground
                    resizeMode="cover"
                    source={require("../../assets/images/signup-rectangle.png")}
                    style={{ width: "100%", height: 260 }}
                    className="flex justify-end"
                >
                    <View className="ml-6 mb-20">
                        <Text className="text-white text-3xl font-semibold">Welcome Back</Text>

                        <View className="flex-row items-center mt-1">
                            <Text className="text-white text-base">Don't have a registered account?</Text>

                            <TouchableOpacity onPress={() => router.push("/signup")}>
                                <Text className="text-white text-base font-semibold ml-1 underline">Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/* Form Section */}
            <View className="px-6 mt-4">
                <Formik
                    initialValues={{
                        fullName: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={SigninSchema}
                    onSubmit={handleSignIn}
                // console.log(values);
                // Handle signup logic here
                //router.push("/home"); 
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <View>
                            {/* Email Input */}
                            <View className="mb-6">
                                <TextInput
                                    className="border border-gray-300 rounded-full px-4 py-4 text-gray-700"
                                    placeholder="Email Address"
                                    keyboardType="email-address"
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                />

                                {/* Error message for Email */}
                                {errors.email && touched.email && (
                                    <Text className="text-red-500 text-xs ml-4 mt-1">{errors.email}</Text>
                                )}
                            </View>

                            {/* Password Input */}
                            <View className="mb-6 relative">
                                <View className="flex-row items-center border border-gray-300 rounded-full">
                                    <TextInput
                                        className="flex-1 px-4 py-4 text-gray-700"
                                        placeholder="Password"
                                        secureTextEntry={!showPassword}
                                        value={values.password}
                                        onChangeText={handleChange("password")}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setShowPassword(!showPassword)}
                                        className="pr-4"
                                    >
                                        <Text className="text-gray-400">{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Error message for Password */}
                                {errors.password && touched.password && (
                                    <Text className="text-red-500 text-xs ml-4 mt-1">{errors.password}</Text>
                                )}
                            </View>

                            {/* Confirm Password Input */}
                            <View className="mb-10 relative">
                                <View className="flex-row items-center border border-gray-300 rounded-full">
                                    <TextInput
                                        className="flex-1 px-4 py-4 text-gray-700"
                                        placeholder="Confirm Password"
                                        secureTextEntry={!showConfirmPassword}
                                        value={values.confirmPassword}
                                        onChangeText={handleChange("confirmPassword")}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="pr-4"
                                    >
                                        <Text className="text-gray-400">{showConfirmPassword ? "👁️" : "👁️‍🗨️"}</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Error message for Confirm Password */}
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <Text className="text-red-500 text-xs ml-4 mt-1">{errors.confirmPassword}</Text>
                                )}
                            </View>

                            {/* Login Button */}
                            <TouchableOpacity
                                onPress={() => router.push("/")}
                                className="bg-green-500 py-4 rounded-full items-center justify-center w-7/12 mx-auto"
                            >
                                <Text className="text-white text-lg font-semibold">Sign in</Text>
                            </TouchableOpacity>

                            {/* Divider */}
                            <View className="flex-row items-center my-8">
                                <View className="flex-1 h-[1px] bg-gray-300" />
                                <Text className="text-gray-500 mx-4">or</Text>
                                <View className="flex-1 h-[1px] bg-gray-300" />
                            </View>

                            {/* Social Login Options */}
                            <View className="flex-row justify-center gap-3">
                                {/* Google */}
                                <TouchableOpacity>
                                    <Image
                                        source={require("../../assets/images/google.png")}
                                        className="w-10 h-10"
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>

                                {/* Facebook */}
                                <TouchableOpacity>
                                    <Image
                                        source={require("../../assets/images/facebook.png")}
                                        className="w-10 h-10"
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    )
}

export default Login;