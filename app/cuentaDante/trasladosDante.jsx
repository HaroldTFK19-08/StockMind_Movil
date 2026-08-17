import {View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderDante from '../../components/cuentaDante/header';
export default function TrasladosDante(){
    return(
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-[#F4F7F2]">
                <HeaderDante/>
                <View className="bg-[#39A900] rounded-b-[35px] px-5 pt-6 pb-10">
                    <Text className="text-3xl font-extrabold text-white">
                        Traslados
                    </Text>
                    <Text className="text-green-100 mt-5">
                        Aqui puedes gestionar diferentes traslados de acuerdo a tu criterio
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}