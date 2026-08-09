import { View, Text, FlatList, Pressable } from "react-native";
import Elementos from "../../data/admin/elementos";
export default function InventarioList(){
    return(
        <FlatList
            data={Elementos}
            keyExtractor={(item)=> item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 20,
                paddingBottom: 30,
            }}
            ItemSeparatorComponent={() => (
                <View className="h-4" />
            )}
            renderItem={({item})=>(
                <View className="bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row justify-between items-start">
                        <View className="flex-1">
                            <Text className="text-xs text-gray-400 uppercase">
                                Elemento
                            </Text>
                            <Text className="text-xl font-bold text-gray-800 mt-1">
                                {item.elemento}
                            </Text>
                        </View>
                        <View className="bg-green-50 px-3 py-1.5 rounded-full">
                            <Text className="text-[#39A900] font-semibold text-sm">
                                {item.estado}
                            </Text>
                        </View>
                    </View>
                    <View className="h-[1px] bg-gray-100 my-4" />
                    <View>
                        <Text className="text-xs text-gray-400 uppercase">
                            Categoría
                        </Text>
                        <Text className="text-gray-700 font-medium mt-1">
                            {item.categoria}
                        </Text>
                    </View>
                    <View className="mt-4">
                        <Text className="text-xs text-gray-400 uppercase">
                            Descripción
                        </Text>
                        <Text className="text-gray-600 mt-1 leading-5">
                            {item.descripcion}
                        </Text>
                    </View>
                    <Pressable className="bg-green-50 rounded-xl py-3 mt-5 items-center">
                        <Text className="text-[#39A900] font-bold">
                            Ver elemento
                        </Text>
                    </Pressable>
                </View>
            )}
        />
    );
}