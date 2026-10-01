import { Modal, View, Text, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Badge } from "@/shared/ui";
import { COLORS, LOGO_BLANCO } from "@/shared/theme";
import { useAuth } from "@/modules/auth/AuthProvider";
import { PORTALS, profileOf } from "./portals";

function MenuItem({ icon, label, description, onPress, danger }) {
    return (
        <Pressable onPress={onPress} className="flex-row items-center rounded-2xl px-3 py-3 mb-1 active:bg-gray-50">
            <View className={`w-11 h-11 rounded-2xl items-center justify-center ${danger ? "bg-red-50" : "bg-sena-soft"}`}>
                <Ionicons name={icon} size={21} color={danger ? COLORS.danger : COLORS.primary} />
            </View>
            <View className="flex-1 ml-3.5">
                <Text className={`font-bold text-[15px] ${danger ? "text-red-500" : "text-gray-800"}`}>{label}</Text>
                {description ? <Text className="text-gray-500 text-xs mt-0.5">{description}</Text> : null}
            </View>
            {!danger ? <Ionicons name="chevron-forward" size={18} color={COLORS.gray400} /> : null}
        </Pressable>
    );
}

export default function SideMenu({ visible, onClose }) {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { user, logout } = useAuth();
    const portal = PORTALS[user?.rol];
    const ir = (href) => {
        onClose();
        router.push(href);
    };
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose} statusBarTranslucent>
            <View className="flex-1 flex-row">
                <View className="w-[80%] max-w-[340px] h-full bg-white">
                    <View className="bg-sena px-5 pb-6" style={{ paddingTop: insets.top + 16 }}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <Image source={LOGO_BLANCO} style={{ width: 28, height: 28 }} resizeMode="contain" />
                                <Text className="text-xl font-extrabold text-white ml-2">StockMind</Text>
                            </View>
                            <Pressable onPress={onClose} hitSlop={10} accessibilityLabel="Cerrar menú">
                                <Ionicons name="close" size={26} color={COLORS.white} />
                            </Pressable>
                        </View>
                        <View className="flex-row items-center mt-6">
                            <Avatar name={user?.nombre} size={50} variant="light" />
                            <View className="flex-1 ml-3">
                                <Text className="text-white font-bold text-base" numberOfLines={1}>
                                    {user?.nombre}
                                </Text>
                                <Text className="text-green-100 text-xs mt-0.5" numberOfLines={1}>
                                    {user?.correo}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex-1 px-3 pt-4">
                        <MenuItem icon="person-circle-outline" label="Mi perfil" description={user?.rolLabel} onPress={() => ir(profileOf(user?.rol))} />
                        {portal?.menu.map((item) => (
                            <MenuItem key={item.href} {...item} onPress={() => ir(item.href)} />
                        ))}
                        <MenuItem icon="information-circle-outline" label="Acerca de StockMind" description="Versión e información" onPress={() => ir("/acerca")} />
                    </View>
                    <View className="px-3 border-t border-gray-100" style={{ paddingBottom: insets.bottom + 12, paddingTop: 8 }}>
                        <MenuItem
                            icon="log-out-outline"
                            label="Cerrar sesión"
                            danger
                            onPress={() => {
                                onClose();
                                logout();
                            }}
                        />
                        <View className="items-center mt-1">
                            <Badge label="SENA · Regional Cauca" tone="neutral" />
                        </View>
                    </View>
                </View>
                <Pressable className="flex-1 bg-black/40" onPress={onClose} accessibilityLabel="Cerrar menú" />
            </View>
        </Modal>
    );
}
