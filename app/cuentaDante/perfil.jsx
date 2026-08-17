import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderAdmin from "../../components/admin/header";
import { useRouter } from "expo-router";

export default function PerfilDante() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-[#F4F7F2]">
                <HeaderAdmin />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 30,
                    }}
                >
                    <View className="bg-[#39A900] rounded-b-[35px] items-center pt-7 pb-12">
                        <View className="w-28 h-28 rounded-full bg-white items-center justify-center">
                            <View className="w-24 h-24 rounded-full bg-green-50 items-center justify-center">
                                <Ionicons
                                    name="person"
                                    size={50}
                                    color="#39A900"
                                />
                            </View>
                        </View>
                        <Text className="text-2xl font-extrabold text-white mt-4">
                            Cuenta Dante
                        </Text>
                        <Text className="text-green-100 mt-1">
                            Encargado del inventario de los ambientes
                        </Text>
                    </View>
                    <View className="mx-5 -mt-5">
                        <View className="bg-white rounded-2xl p-5 border border-gray-100">
                            <Text className="text-xl font-bold text-gray-800">
                                Información personal
                            </Text>
                            <View className="mt-5">
                                <Text className="text-xs text-gray-400 uppercase">
                                    Nombre completo
                                </Text>
                                <Text className="text-gray-800 font-semibold mt-1">
                                    Administrador StockMind
                                </Text>
                            </View>
                            <View className="mt-4">
                                <Text className="text-xs text-gray-400 uppercase">
                                    Correo electrónico
                                </Text>
                                <Text className="text-gray-700 mt-1">
                                    administrador@sena.edu.co
                                </Text>
                            </View>
                            <View className="mt-4">
                                <Text className="text-xs text-gray-400 uppercase">
                                    Rol
                                </Text>
                                <View className="bg-green-50 self-start px-3 py-1.5 rounded-full mt-1">
                                    <Text className="text-[#39A900] font-semibold">
                                        Cuenta Dante
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className="bg-white rounded-2xl p-5 border border-gray-100 mt-4">
                            <Text className="text-xl font-bold text-gray-800 mb-3">
                                Configuración
                            </Text>
                            <Pressable className="flex-row items-center py-4 border-b border-gray-100">
                                <View className="flex-1">
                                    <Text className="text-gray-800 font-semibold">
                                        Editar perfil
                                    </Text>
                                    <Text className="text-gray-500 text-sm mt-1">
                                        Actualiza tu información personal
                                    </Text>
                                </View>
                                <Ionicons
                                    name="chevron-forward"
                                    size={20}
                                    color="#9CA3AF"
                                />
                            </Pressable>
                            <Pressable className="flex-row items-center py-4 border-b border-gray-100">
                                <View className="flex-1">
                                    <Text className="text-gray-800 font-semibold">
                                        Cambiar contraseña
                                    </Text>
                                    <Text className="text-gray-500 text-sm mt-1">
                                        Actualiza la contraseña de tu cuenta
                                    </Text>
                                </View>
                                <Ionicons
                                    name="chevron-forward"
                                    size={20}
                                    color="#9CA3AF"
                                />
                            </Pressable>
                            <Pressable className="flex-row items-center py-4" onPress={()=>router.push("/auth/inicio")}>
                                <View className="flex-1">
                                    <Text className="text-red-500 font-semibold">
                                        Cerrar sesión
                                    </Text>
                                    <Text className="text-gray-500 text-sm mt-1">
                                        Salir de tu cuenta
                                    </Text>
                                </View>
                                <Ionicons
                                    name="log-out-outline"
                                    size={22}
                                    color="#EF4444"
                                />
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}