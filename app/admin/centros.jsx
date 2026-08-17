import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import HeaderAdmin from "../../components/admin/header";
import CentrosList from "../../components/admin/listCentros";
export default function Centros(){
    return(
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-[#F4F7F2]">
                <HeaderAdmin/>
                <View className="bg-[#39A900] rounded-b-[35px] px-5 pt-6 pb-10">
                    <Text className="text-3xl font-extrabold text-white">
                        Centros
                    </Text>
                    <Text className="text-green-100 mt-1">
                        Administra los espacios donde se encuentran tus elementos
                    </Text>
                </View>
                <View className="flex-1 my-5">
                    <CentrosList/>
                </View>
                <Pressable className="absolute bottom-6 right-5 w-12 h-12 ml-3 bg-[#39A900] rounded-xl items-center justify-center">
                    <Ionicons
                        name="add-circle-outline"
                        size={30}
                        color="#FFFFFF"
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}