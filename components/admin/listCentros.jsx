import { View, Text, FlatList, Pressable } from "react-native";
import Centros from "../../data/admin/centros";

export default function CentrosList() {
    return (
        <FlatList
            data={Centros}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 20,
                paddingBottom: 30,
            }}
            ItemSeparatorComponent={() => (
                <View className="h-4" />
            )}
            renderItem={({ item }) => (
                <View className="bg-white rounded-2xl p-5 border border-gray-100">
                    <View>
                        <Text className="text-xs text-gray-400 uppercase">
                            Centro formativo
                        </Text>
                        <Text className="text-xl font-bold text-gray-800 mt-1">
                            {item.centro}
                        </Text>
                    </View>
                    <View className="h-[1px] bg-gray-100 my-4" />
                    <View>
                        <Text className="text-xs text-gray-400 uppercase">
                            Ubicación
                        </Text>
                        <Text className="text-gray-700 font-medium mt-1">
                            {item.ubicacion}
                        </Text>
                    </View>
                    <View className="mt-4">
                        <Text className="text-xs text-gray-400 uppercase">
                            Dirección
                        </Text>
                        <Text className="text-gray-600 mt-1">
                            {item.direccion}
                        </Text>
                    </View>
                    <View className="flex-row gap-3 mt-5">
                        <View className="flex-1 bg-green-50 rounded-xl p-4">
                            <Text className="text-xs text-gray-500 uppercase">
                                Sedes
                            </Text>
                            <Text className="text-2xl font-bold text-[#39A900] mt-1">
                                {item.sedes}
                            </Text>
                        </View>
                        <View className="flex-1 bg-gray-50 rounded-xl p-4">
                            <Text className="text-xs text-gray-500 uppercase">
                                Ambientes
                            </Text>
                            <Text className="text-2xl font-bold text-gray-700 mt-1">
                                {item.ambientes}
                            </Text>
                        </View>
                    </View>
                    <Pressable className="bg-green-50 rounded-xl py-3 mt-5 items-center">
                        <Text className="text-[#39A900] font-bold">
                            Ver centro
                        </Text>
                    </Pressable>
                </View>
            )}
        />
    );
}