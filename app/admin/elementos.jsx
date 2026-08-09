import { View, Text, Pressable, TextInput } from "react-native";
import HeaderAdmin from "../../components/admin/header";
import { Ionicons } from "@expo/vector-icons";
import InventarioList from "../../components/admin/listElements";
export default function Elementos(){
    return(
        <View className="flex-1 bg-[#F4F7F2]">
            <HeaderAdmin/>
            <View className="bg-[#39A900] rounded-b-[35px] px-5 pt-6 pb-10">
                <Text className="text-3xl font-extrabold text-white">
                    Inventario
                </Text>
                <Text className="text-green-100 mt-5">
                    Administra el invetario general del Sena, Popayan
                </Text>
            </View>
            <View className="flex-row mx-5 -mt-6">
                <View className="flex-1 h-12 bg-white rounded-xl px-4 flex-row items-center shadow-sm">
                    <Ionicons
                        name="search-outline"
                        size={21}
                        color="#39A900"
                    />
                    <TextInput
                        placeholder="Buscar elementos en el Inventario"
                        placeholderTextColor="#9CA3AF"
                        className="flex-1 ml-3"
                    />
                </View>
                <Pressable className="w-12 h-12 ml-3 bg-white rounded-xl items-center justify-center">
                    <Ionicons
                        name="filter-outline"
                        size={23}
                        color="#39A900"
                    />
                </Pressable>
            </View>
            <View className="flex-1 my-5">
                <InventarioList/>
            </View>
        </View>
    )
}