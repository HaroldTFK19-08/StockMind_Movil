import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [correo, setCorreo]=useState("");
    const [contrasena, setContrasena]=useState("");
    const IniciarSesion = ()=>{
        if(correo=="adminsena@soy.sena.edu"&&contrasena=="admin123"){
            router.push("/admin/home");
        }else if(correo=="instructorsena@soy.sena.edu"&&contrasena=="instructor124"){
            router.push("/instructor/home");
        }
        else if(correo=="dantesena@soy.sena.edu"&&contrasena=="dante321"){
            router.push("/cuentaDante/homeDante");
        }
    }
    return (
        <SafeAreaView className="flex-1 bg-[#39A900]">
            <View className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#55C52A] opacity-40" />
            <View className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#2E8500] opacity-30" />
            <View className="flex-1 justify-center px-6">
                <View className="bg-white rounded-[32px] px-7 py-8">
                    <View className="w-full items-center justify-center mb-3">
                        <Image
                        source={require("../../assets/Capa2.png")}
                        style={{ width: 60, height: 60 }}
                        resizeMode="contain"
                        />
                    </View>
                    <Text className="text-[#172117] text-2xl font-bold text-center mx-5 my-5">
                        Iniciar Sesion
                    </Text>
                    <Text className="text-gray-500 text-center text-sm mt-2 leading-5 mx-5 my-5">
                        Inicia Sesion para el uso del gestor de inventario StockMind
                    </Text>
                    <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 mx-5 my-5">
                        <Ionicons name="mail-outline" size={20} color="#6B7280" />
                        <TextInput
                            placeholder="Correo Electrónico"
                            placeholderTextColor="#9CA3AF"
                            className="flex-1 ml-3 text-gray-800 text-base"
                            autoCapitalize="none"
                            value={correo}
                            onChangeText={setCorreo}
                        />
                    </View>
                    <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 mx-5 my-5">
                        <Ionicons name="lock-closed-outline" size={20} color="#6B7280" />
                        <TextInput
                            placeholder="Contraseña"
                            placeholderTextColor="#9CA3AF"
                            secureTextEntry
                            className="flex-1 ml-3 text-gray-800 text-base"
                            value={contrasena}
                            onChangeText={setContrasena}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className="bg-[#39A900] rounded-2xl my-5 mx-5 py-4 flex-row items-center justify-center"
                        onPress={IniciarSesion}
                    >
                        <Ionicons name="log-in-outline" size={21} color="white" />
                        <Text className="text-white text-base font-bold ml-2">
                        Iniciar sesión
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}