import { View, Text } from "react-native";

/** Banner verde curvo con título y subtítulo. `children` se pinta debajo (p. ej. estadísticas). */
export default function PageHero({ title, subtitle, children, compact = false }) {
    return (
        <View className={`bg-sena rounded-b-[32px] px-5 pt-4 ${compact ? "pb-10" : "pb-12"}`}>
            <Text className="text-[28px] leading-9 font-extrabold text-white">{title}</Text>
            {subtitle ? (
                <Text className="text-green-100 mt-1.5 text-[15px] leading-5">{subtitle}</Text>
            ) : null}
            {children}
        </View>
    );
}
