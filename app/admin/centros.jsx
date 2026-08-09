import { View, Text } from "react-native";
import HeaderAdmin from "../../components/admin/header";
import CentrosList from "../../components/admin/listCentros";
export default function Centros(){
    return(
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
        </View>
    )
}