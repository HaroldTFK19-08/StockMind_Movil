import { View, Text, FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Usuarios from "../../data/admin/usuarios";

export default function ListUsuarios() {
    return (
        <FlatList
            data={Usuarios}
            keyExtractor={(item) => item.id}
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
                    <View className="flex-row items-center">
                        <View className="w-14 h-14 rounded-full bg-[#39A900] items-center justify-center">
                            <Text className="text-white text-lg font-bold">
                                {item.nombre.charAt(0)}
                            </Text>
                        </View>
                        <View className="flex-1 ml-4">
                            <Text
                                className="text-gray-900 text-base font-bold"
                                numberOfLines={1}
                            >
                                {item.nombre}
                            </Text>
                            <View className="flex-row items-center mt-1">
                                <Ionicons
                                    name="school-outline"
                                    size={15}
                                    color="#6B7280"
                                />
                                <Text className="text-gray-500 text-sm ml-1">
                                    {item.programa}
                                </Text>
                            </View>
                        </View>
                        <Pressable
                            className="w-9 h-9 rounded-full bg-gray-100 items-center justify-center"
                            onPress={() => console.log(item)}
                        >
                            <Ionicons
                                name="ellipsis-vertical"
                                size={20}
                                color="#6B7280"
                            />
                        </Pressable>
                    </View>
                    <View className="h-[1px] bg-gray-100 my-4" />
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <View className="w-9 h-9 rounded-full bg-green-100 items-center justify-center">
                                <Ionicons
                                    name="person-outline"
                                    size={18}
                                    color="#39A900"
                                />
                            </View>
                            <View className="ml-2">
                                <Text className="text-gray-400 text-xs">
                                    Rol
                                </Text>
                                <Text className="text-gray-700 text-sm font-semibold">
                                    {item.rol}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        />
    );
}