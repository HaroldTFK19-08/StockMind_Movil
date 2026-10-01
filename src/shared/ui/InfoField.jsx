import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/colors";

/** Par etiqueta / valor con ícono opcional. */
export default function InfoField({ label, value, icon, children, className = "" }) {
    return (
        <View className={`flex-row items-start ${className}`}>
            {icon ? (
                <View className="w-9 h-9 rounded-xl bg-gray-50 items-center justify-center mr-3">
                    <Ionicons name={icon} size={17} color={COLORS.gray500} />
                </View>
            ) : null}
            <View className="flex-1">
                <Text className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">{label}</Text>
                {children ?? <Text className="text-[15px] text-gray-800 font-medium mt-0.5">{value ?? "—"}</Text>}
            </View>
        </View>
    );
}

/** Bloque gris para agrupar InfoFields dentro de un detalle. */
export function InfoGroup({ children }) {
    return <View className="bg-gray-50 rounded-2xl p-4 gap-4 mb-4">{children}</View>;
}
