import { View, Image, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import MenuAdmin from "./menuAdmin";

export default function HeaderAdmin() {
    const router = useRouter();
    const [menu, setMenu ] = useState(false);
    return (
        <View className="h-16 flex-row justify-between items-center bg-[#39A900] px-4">
            {/* Menú + Logo + Nombre */}
            <View className="flex-row items-center">
                <Pressable className="mr-3" onPress={() => setMenu(true)}>
                    <Ionicons
                        name="menu-outline"
                        size={30}
                        color="#FFFFFF"
                    />
                </Pressable>
                <Image
                    source={require("../../assets/Capa21.png")}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
                <Text className="ml-2 text-xl font-bold text-white">
                    StockMind
                </Text>
            </View>
            <Pressable className="w-8 h-8 rounded-full bg-white items-center justify-center" onPress={()=>router.push("/admin/perfil")}>
                <Ionicons
                    name="person"
                    size={15}
                    color="#39A900"
                />
            </Pressable>
            <MenuAdmin
                visible={menu}
                onClose={() => setMenu(false)}
            />
        </View>
    );
}