import { View, Text, Modal, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function MenuAdmin({ visible, onClose }) {
    const navegacion = (enlace) => {
        onClose();
        router.push(enlace);
    };
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View className="flex-1 flex-row">
                <View className="w-[78%] h-full bg-white">
                    <View className="bg-[#39A900] px-5 pt-14 pb-6">
                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className="text-2xl font-extrabold text-white">
                                    StockMind
                                </Text>
                                <Text className="text-green-100 mt-1">
                                    Opciones
                                </Text>
                            </View>
                            <Pressable onPress={onClose}>
                                <Ionicons
                                    name="close"
                                    size={28}
                                    color="#FFFFFF"
                                />
                            </Pressable>
                        </View>
                    </View>
                    <View className="px-5 pt-6">
                        <Pressable
                            onPress={() =>
                                navegacion("/admin/notificaciones")
                            }
                            className="flex-row items-center bg-gray-50 rounded-xl px-4 py-4 mb-3"
                        >
                            <View className="w-11 h-11 rounded-xl bg-green-100 items-center justify-center">
                                <Ionicons
                                    name="notifications-outline"
                                    size={23}
                                    color="#39A900"
                                />
                            </View>
                            <View className="ml-4 flex-1">
                                <Text className="text-gray-800 font-bold text-base">
                                    Notificaciones
                                </Text>
                                <Text className="text-gray-500 text-sm mt-1">
                                    Revisa tus notificaciones
                                </Text>
                            </View>
                            <Ionicons
                                name="chevron-forward"
                                size={20}
                                color="#9CA3AF"
                            />
                        </Pressable>
                    </View>
                </View>
                <Pressable
                    className="flex-1 bg-black/40"
                    onPress={onClose}
                />
            </View>
        </Modal>
    );
}