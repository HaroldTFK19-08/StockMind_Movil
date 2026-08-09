import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import { push } from "expo-router/build/global-state/router";

export default function Inicio() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-[#39A900]">
            <View className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#55C52A] opacity-40" />
            <View className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#2E8500] opacity-30" />
            <View className="flex-1 justify-center px-6">
            <View className="items-center mb-8">
                <View
                    className="items-center justify-center"
                    style={{
                    width: 100,
                    height: 100,
                    }}
                >
                    <Image
                    source={require("../../assets/Capa21.png")}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    resizeMode="contain"
                    />
                </View>

                <Text className="text-white text-4xl font-extrabold mt-5">
                    StockMind
                </Text>
                </View>
                <View className="bg-white rounded-[32px] px-7 py-8">
                    <View className="items-center mb-7">
                        <Text className="text-[#172117] text-2xl font-bold">
                        ¡Bienvenido!
                        </Text>

                        <Text className="text-gray-500 text-center text-sm mt-2 leading-5">
                        Gestiona tu inventario de forma rápida, sencilla y eficiente.
                        </Text>
                    </View>

                    {/* BOTÓN INICIAR SESIÓN */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className="bg-[#39A900] rounded-2xl py-4 flex-row items-center justify-center"
                        onPress={()=>router.push("/auth/login")}
                    >
                        <Ionicons name="log-in-outline" size={21} color="white" />
                        <Text className="text-white text-base font-bold ml-2">
                        Iniciar sesión
                        </Text>
                    </TouchableOpacity>

                    {/* BOTÓN REGISTRARSE */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className="border-2 border-[#39A900] rounded-2xl py-4 flex-row items-center justify-center mt-4"
                        onPress={()=>router.push("/auth/register")}
                    >
                        <Ionicons name="person-add-outline" size={20} color="#39A900" />
                        <Text className="text-[#39A900] text-base font-bold ml-2">
                        Registrarse
                        </Text>
                    </TouchableOpacity>

                    {/* INSIGNIA DE SEGURIDAD */}
                    <View className="flex-row items-center justify-center mt-6">
                        <Ionicons
                        name="shield-checkmark-outline"
                        size={15}
                        color="#39A900"
                        />
                        <Text className="text-gray-400 text-xs ml-2">
                        Plataforma segura
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}