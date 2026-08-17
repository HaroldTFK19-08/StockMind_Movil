import {View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderInstructor from '../../components/instructor/header';

export default function HomeInstructor(){
    return(
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-[#F4F7F2]">
                <HeaderInstructor/>
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
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}