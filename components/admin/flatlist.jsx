import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Reportes from "../../data/admin/reportes";

export default function ReportesList() {
    return (
        <FlatList
            data={Reportes}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                padding: 16,
            }}
            ItemSeparatorComponent={() => (
                <View className="h-4" />
            )}
            renderItem={({ item }) => (
                <View className="bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center flex-1">
                            <View className="ml-3 flex-1">
                                <Text className="text-xs text-gray-400 uppercase">
                                    Elemento
                                </Text>
                                <Text className="text-lg font-bold text-gray-800">
                                    {item.elemento}
                                </Text>
                            </View>
                        </View>
                        <View className="items-end">
                            <Ionicons
                                name="calendar-outline"
                                size={18}
                                color="#9CA3AF"
                            />
                            <Text className="text-xs text-gray-400 mt-1">
                                {item.fecha}
                            </Text>
                        </View>
                    </View>
                    <View className="h-[1px] bg-gray-100 my-4" />
                    <View>
                        <Text className="text-xs text-gray-400 uppercase mb-1">
                            Descripción
                        </Text>
                        <Text className="text-gray-600 leading-5">
                            {item.descripcion}
                        </Text>
                    </View>
                    <View className="flex-row justify-between items-center mt-5">
                        <View className="flex-row items-center bg-green-50 px-3 py-2 rounded-full">
                            <Ionicons
                                name="pricetag-outline"
                                size={15}
                                color="#39A900"
                            />
                            <Text className="ml-2 text-[#39A900] font-semibold text-sm">
                                {item.categoria}
                            </Text>
                        </View>
                        <TouchableOpacity className="flex-row items-center bg-green-50 px-3 py-2 rounded-lg">
                            <Text className="text-[#39A900] text-sm font-semibold mr-1">
                                Ver reporte
                            </Text>
                            <Ionicons
                                name="arrow-forward-outline"
                                size={17}
                                color="#39A900"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    );
}