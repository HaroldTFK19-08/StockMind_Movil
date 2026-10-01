import { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen, Avatar, Badge, Card, InfoField, Button, BottomSheet } from "@/shared/ui";
import { COLORS } from "@/shared/theme";
import { env } from "@/core";
import PortalHeader from "@/navigation/PortalHeader";
import { useAuth } from "../AuthProvider";

function Opcion({ icon, label, description, onPress }) {
    return (
        <Pressable onPress={onPress} className="flex-row items-center py-3.5 active:opacity-70">
            <View className="w-10 h-10 rounded-2xl bg-sena-soft items-center justify-center">
                <Ionicons name={icon} size={19} color={COLORS.primary} />
            </View>
            <View className="flex-1 ml-3">
                <Text className="text-[15px] font-semibold text-gray-800">{label}</Text>
                {description ? <Text className="text-xs text-gray-500 mt-0.5">{description}</Text> : null}
            </View>
            <Ionicons name="chevron-forward" size={18} color={COLORS.gray400} />
        </Pressable>
    );
}

export default function ProfileScreen() {
    const router = useRouter();
    const { user, logout } = useAuth();
    const [confirmar, setConfirmar] = useState(false);
    const [saliendo, setSaliendo] = useState(false);

    const salir = async () => {
        setSaliendo(true);
        await logout();
    };

    return (
        <Screen>
            <PortalHeader showBack />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
                <View className="bg-sena rounded-b-[32px] items-center pt-4 pb-14">
                    <View className="p-1.5 rounded-full bg-white/20">
                        <Avatar name={user?.nombre} size={92} variant="light" />
                    </View>
                    <Text className="text-2xl font-extrabold text-white mt-4 text-center px-6">{user?.nombre}</Text>
                    <Text className="text-green-100 mt-1">{user?.correo}</Text>
                </View>

                <View className="px-5 -mt-8 gap-4">
                    <Card>
                        <Text className="text-lg font-bold text-ink mb-4">Información personal</Text>
                        <View className="gap-4">
                            <InfoField icon="shield-checkmark-outline" label="Rol">
                                <View className="mt-1">
                                    <Badge label={user?.rolLabel} tone="success" />
                                </View>
                            </InfoField>
                            {user?.documento ? <InfoField icon="card-outline" label="Documento" value={user.documento} /> : null}
                            {user?.programa ? <InfoField icon="school-outline" label="Programa" value={user.programa} /> : null}
                            {user?.ficha ? <InfoField icon="people-outline" label="Ficha" value={user.ficha} /> : null}
                            {user?.centro ? <InfoField icon="business-outline" label="Centro" value={user.centro} /> : null}
                        </View>
                    </Card>

                    <Card className="py-1">
                        <Opcion icon="information-circle-outline" label="Acerca de StockMind" description="Versión y créditos" onPress={() => router.push("/acerca")} />
                        <View className="h-px bg-gray-100" />
                        <Opcion
                            icon={env.useMocks ? "flask-outline" : "cloud-done-outline"}
                            label="Origen de datos"
                            description={env.useMocks ? "Datos de demostración (sin backend)" : env.apiUrl}
                            onPress={() => router.push("/acerca")}
                        />
                    </Card>

                    <Button title="Cerrar sesión" icon="log-out-outline" variant="danger" onPress={() => setConfirmar(true)} />
                </View>
            </ScrollView>

            <BottomSheet visible={confirmar} onClose={() => setConfirmar(false)} title="¿Cerrar sesión?" icon="log-out-outline">
                <Text className="text-gray-600 leading-5 mb-5">Tendrás que ingresar de nuevo con tu correo y contraseña.</Text>
                <Button title="Sí, cerrar sesión" variant="danger" loading={saliendo} onPress={salir} />
                <Button title="Cancelar" variant="ghost" className="mt-2" onPress={() => setConfirmar(false)} />
            </BottomSheet>
        </Screen>
    );
}
