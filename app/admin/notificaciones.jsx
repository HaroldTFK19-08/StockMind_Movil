import { View, Text, Pressable, ScrollView } from "react-native";
import HeaderAdmin from "../../components/admin/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function NotificacionesAdmin() {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-[#F4F7F2]">
                <HeaderAdmin />
                <View className="bg-[#39A900] rounded-b-[35px] px-5 pt-6 pb-10">
                    <Text className="text-3xl font-extrabold text-white">
                        Notificaciones
                    </Text>

                    <Text className="text-green-100 mt-5">
                        Aqui encontraras tus notificaciones
                    </Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 30,
                    }}
                >
                    {/* Resumen de notificaciones */}
                    <View className="mx-5 mt-6 bg-white rounded-2xl p-4 flex-row items-center">
                        <View className="w-12 h-12 bg-green-100 rounded-xl items-center justify-center">
                            <Ionicons
                                name="notifications-outline"
                                size={25}
                                color="#39A900"
                            />
                        </View>

                        <View className="flex-1 ml-4">
                            <Text className="text-base font-bold text-gray-800">
                                Tienes 3 notificaciones
                            </Text>

                            <Text className="text-sm text-gray-500 mt-1">
                                2 están pendientes de revisar
                            </Text>
                        </View>
                    </View>
                    <View className="px-5 mt-7">
                        <Text className="text-xl font-bold text-gray-800 mb-4">
                            Hoy
                        </Text>
                        <Pressable className="bg-white rounded-2xl p-4 mb-3 flex-row">
                            <View className="w-11 h-11 bg-green-100 rounded-xl items-center justify-center">
                                <Ionicons
                                    name="cube-outline"
                                    size={23}
                                    color="#39A900"
                                />
                            </View>
                            <View className="flex-1 ml-4">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-base font-bold text-gray-800">
                                        Nuevo elemento
                                    </Text>
                                    <View className="w-2.5 h-2.5 bg-[#39A900] rounded-full" />
                                </View>
                                <Text className="text-sm text-gray-500 mt-1 leading-5">
                                    Se registró un nuevo elemento en el
                                    inventario.
                                </Text>
                                <Text className="text-xs text-gray-400 mt-2">
                                    Hace 10 minutos
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable className="bg-white rounded-2xl p-4 mb-3 flex-row">
                            <View className="w-11 h-11 bg-red-50 rounded-xl items-center justify-center">
                                <Ionicons
                                    name="alert-circle-outline"
                                    size={23}
                                    color="#EF4444"
                                />
                            </View>
                            <View className="flex-1 ml-4">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-base font-bold text-gray-800">
                                        Inventario bajo
                                    </Text>
                                    <View className="w-2.5 h-2.5 bg-[#39A900] rounded-full" />
                                </View>
                                <Text className="text-sm text-gray-500 mt-1 leading-5">
                                    Algunos productos alcanzaron el nivel
                                    mínimo establecido.
                                </Text>
                                <Text className="text-xs text-gray-400 mt-2">
                                    Hace 1 hora
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable className="bg-white rounded-2xl p-4 mb-3 flex-row">
                            <View className="w-11 h-11 bg-blue-50 rounded-xl items-center justify-center">
                                <Ionicons
                                    name="person-add-outline"
                                    size={23}
                                    color="#3B82F6"
                                />
                            </View>
                            <View className="flex-1 ml-4">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-base font-bold text-gray-800">
                                        Nuevo usuario
                                    </Text>
                                    <View className="w-2.5 h-2.5 bg-[#39A900] rounded-full" />
                                </View>
                                <Text className="text-sm text-gray-500 mt-1 leading-5">
                                    Se registró un nuevo usuario en StockMind.
                                </Text>
                                <Text className="text-xs text-gray-400 mt-2">
                                    Hace 3 horas
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    <View className="px-5 mt-5">
                        <Text className="text-xl font-bold text-gray-800 mb-4">
                            Anteriores
                        </Text>
                        <Pressable className="bg-white rounded-2xl p-4 mb-3 flex-row opacity-80">
                            <View className="w-11 h-11 bg-purple-50 rounded-xl items-center justify-center">
                                <Ionicons
                                    name="document-text-outline"
                                    size={23}
                                    color="#8B5CF6"
                                />
                            </View>
                            <View className="flex-1 ml-4">
                                <Text className="text-base font-semibold text-gray-800">
                                    Nuevo reporte generado
                                </Text>
                                <Text className="text-sm text-gray-500 mt-1 leading-5">
                                    Se generó un nuevo reporte de inventario.
                                </Text>
                                <Text className="text-xs text-gray-400 mt-2">
                                    Ayer
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable className="bg-white rounded-2xl p-4 mb-3 flex-row opacity-80">
                            <View className="w-11 h-11 bg-yellow-50 rounded-xl items-center justify-center">
                                <Ionicons
                                    name="warning-outline"
                                    size={23}
                                    color="#F59E0B"
                                />
                            </View>
                            <View className="flex-1 ml-4">
                                <Text className="text-base font-semibold text-gray-800">
                                    Elemento reportado
                                </Text>
                                <Text className="text-sm text-gray-500 mt-1 leading-5">
                                    Un elemento del inventario fue reportado
                                    como dañado.
                                </Text>
                                <Text className="text-xs text-gray-400 mt-2">
                                    Hace 2 días
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    <View className="items-center px-10 mt-8 mb-5">
                        <Ionicons
                            name="checkmark-circle-outline"
                            size={35}
                            color="#39A900"
                        />
                        <Text className="text-sm text-gray-500 text-center mt-2">
                            Estás al día con tus notificaciones.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

