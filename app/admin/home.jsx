import { View, Text, Pressable, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import HeaderAdmin from "../../components/admin/header";
export default function Home(){
    return(
        <View className="flex-1 bg-[#F4F7F2]">

            {/* Header */}
            <HeaderAdmin />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 30,
                }}
            >
                <View className="bg-[#39A900] rounded-b-[35px] px-5 pt-6 pb-10">
                    <Text className="text-3xl font-extrabold text-white">
                        Bienvenido Administrativo
                    </Text>
                    <Text className="text-green-100 mt-5">
                        Aqui encontraras las acciones
                    </Text>
                </View>
                <View className="flex-row mx-5 mt-6 gap-3">
                    <View className="flex-1 bg-white rounded-2xl p-4">
                        <View className="w-11 h-11 bg-green-100 rounded-xl items-center justify-center">
                            <Ionicons
                                name="cube-outline"
                                size={24}
                                color="#39A900"
                            />
                        </View>
                        <Text className="text-3xl font-extrabold text-gray-800 mt-3">
                            128
                        </Text>
                        <Text className="text-gray-500 mt-1">
                            Elementos
                        </Text>
                    </View>
                    <View className="flex-1 bg-white rounded-2xl p-4">
                        <View className="w-11 h-11 bg-red-50 rounded-xl items-center justify-center">
                            <Ionicons
                                name="alert-circle-outline"
                                size={24}
                                color="#EF4444"
                            />
                        </View>
                        <Text className="text-3xl font-extrabold text-gray-800 mt-3">
                            12
                        </Text>
                        <Text className="text-gray-500 mt-1">
                            Reportes
                        </Text>
                    </View>
                </View>
                <View className="flex-row mx-5 mt-3 gap-3">
                    <View className="flex-1 bg-white rounded-2xl p-4">
                        <View className="w-11 h-11 bg-blue-50 rounded-xl items-center justify-center">
                            <Ionicons
                                name="business-outline"
                                size={24}
                                color="#3B82F6"
                            />
                        </View>
                        <Text className="text-3xl font-extrabold text-gray-800 mt-3">
                            8
                        </Text>
                        <Text className="text-gray-500 mt-1">
                            Centros
                        </Text>
                    </View>
                    <View className="flex-1 bg-white rounded-2xl p-4">
                        <View className="w-11 h-11 bg-purple-50 rounded-xl items-center justify-center">
                            <Ionicons
                                name="people-outline"
                                size={24}
                                color="#8B5CF6"
                            />
                        </View>
                        <Text className="text-3xl font-extrabold text-gray-800 mt-3">
                            24
                        </Text>
                        <Text className="text-gray-500 mt-1">
                            Usuarios
                        </Text>
                    </View>
                </View>
                <View className="px-5 mt-7">
                    <Text className="text-xl font-bold text-gray-800">
                        Accesos rápidos
                    </Text>
                    <Text className="text-gray-500 mt-1 mb-4">
                        Gestiona rápidamente tu inventario
                    </Text>
                    <Pressable className="bg-white rounded-2xl p-4 flex-row items-center">
                        <View className="w-12 h-12 bg-green-100 rounded-xl items-center justify-center">
                            <Ionicons
                                name="people-outline"
                                size={25}
                                color="#39A900"
                            />
                        </View>
                        <View className="flex-1 ml-4">
                            <Text className="text-base font-bold text-gray-800">
                                Usuarios
                            </Text>
                            <Text className="text-sm text-gray-500 mt-1">
                                Gestionar usuarios del sistema
                            </Text>
                        </View>
                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color="#9CA3AF"
                        />
                    </Pressable>
                </View>
                <View className="px-5 mt-7">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-xl font-bold text-gray-800">
                            Actividad reciente
                        </Text>
                        <Text className="text-[#39A900] font-semibold">
                            Ver todo
                        </Text>
                    </View>
                    <View className="bg-white rounded-2xl p-4">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
                                <Ionicons
                                    name="add-outline"
                                    size={22}
                                    color="#39A900"
                                />
                            </View>
                            <View className="flex-1 ml-3">
                                <Text className="font-semibold text-gray-800">
                                    Nuevo elemento registrado
                                </Text>
                                <Text className="text-sm text-gray-500 mt-1">
                                    Computador portátil
                                </Text>
                            </View>
                            <Text className="text-xs text-gray-400">
                                Hoy
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}