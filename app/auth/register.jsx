import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Register() {
    const router = useRouter();

    // Estado para gestionar el rol seleccionado ('aprendiz' o 'instructor')
    const [role, setRole] = useState("aprendiz");

    return (
        <SafeAreaView className="flex-1 bg-[#39A900]">
        {/* Decoraciones del fondo */}
        <View className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#55C52A] opacity-40" />
        <View className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#2E8500] opacity-30" />

        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} className="px-6 py-4">
            <View className="bg-white rounded-[32px] px-7 py-8 my-auto">
            {/* LOGO */}
            <View className="w-full items-center justify-center mb-2">
                <Image
                source={require("../../assets/Capa2.png")}
                style={{ width: 55, height: 55 }}
                resizeMode="contain"
                />
            </View>

            {/* TÍTULO Y DESCRIPCIÓN */}
            <Text className="text-[#172117] text-2xl font-bold text-center">
                Registrarse
            </Text>
            <Text className="text-gray-500 text-center text-sm mt-1 mb-4 leading-5">
                Crea una cuenta para comenzar a usar StockMind
            </Text>

            {/* SELECCIÓN DE ROL (CHECKBOXES) */}
            <Text className="text-gray-500 text-center text-sm mt-1 mb-4 leading-5">
                Selecciona tu rol
            </Text>
            <View className="flex-row justify-between mb-3">
                {/* OPCIÓN APRENDIZ */}
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setRole("aprendiz")}
                className={`flex-1 flex-row items-center justify-center p-3 mr-2 rounded-2xl border ${
                    role === "aprendiz"
                    ? "bg-[#39A900]/10 border-[#39A900]"
                    : "bg-gray-50 border-gray-300"
                }`}
                >
                <Ionicons
                    name={role === "aprendiz" ? "checkbox" : "square-outline"}
                    size={20}
                    color={role === "aprendiz" ? "#39A900" : "#9CA3AF"}
                />
                <Text
                    className={`ml-2 text-sm font-semibold ${
                    role === "aprendiz" ? "text-[#39A900]" : "text-gray-600"
                    }`}
                >
                    Aprendiz
                </Text>
                </TouchableOpacity>

                {/* OPCIÓN INSTRUCTOR */}
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setRole("instructor")}
                className={`flex-1 flex-row items-center justify-center p-3 ml-2 rounded-2xl border ${
                    role === "instructor"
                    ? "bg-[#39A900]/10 border-[#39A900]"
                    : "bg-gray-50 border-gray-300"
                }`}
                >
                <Ionicons
                    name={role === "instructor" ? "checkbox" : "square-outline"}
                    size={20}
                    color={role === "instructor" ? "#39A900" : "#9CA3AF"}
                />
                <Text
                    className={`ml-2 text-sm font-semibold ${
                    role === "instructor" ? "text-[#39A900]" : "text-gray-600"
                    }`}
                >
                    Instructor
                </Text>
                </TouchableOpacity>
            </View>
            <View className="mb-2">
                <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 my-1.5">
                <Ionicons name="person-outline" size={20} color="#6B7280" />
                <TextInput
                    placeholder="Nombre Completo"
                    placeholderTextColor="#9CA3AF"
                    className="flex-1 ml-3 text-gray-800 text-base"
                />
                </View>
                <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 my-1.5">
                <Ionicons name="mail-outline" size={20} color="#6B7280" />
                <TextInput
                    placeholder="Correo Electrónico"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="flex-1 ml-3 text-gray-800 text-base"
                />
                </View>
                <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 my-1.5">
                <Ionicons name="lock-closed-outline" size={20} color="#6B7280" />
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                    className="flex-1 ml-3 text-gray-800 text-base"
                />
                </View>
                <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 my-1.5">
                <Ionicons name="checkmark-circle-outline" size={20} color="#6B7280" />
                <TextInput
                    placeholder="Confirmar Contraseña"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                    className="flex-1 ml-3 text-gray-800 text-base"
                />
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                className="bg-[#39A900] rounded-2xl py-4 flex-row items-center justify-center mt-3"
                onPress={()=>router.push("/auth/login")}
            >
                <Ionicons name="person-add-outline" size={21} color="white" />
                <Text className="text-white text-base font-bold ml-2">
                Crear cuenta
                </Text>
            </TouchableOpacity>
            <View className="flex-row items-center justify-center mt-4">
                <Text className="text-gray-500 text-sm">¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => router.push("/login")}>
                <Text className="text-[#39A900] font-bold text-sm ml-1.5">
                    Iniciar sesión
                </Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}