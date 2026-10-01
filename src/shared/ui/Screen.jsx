import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/** Contenedor base de todas las pantallas: área segura + fondo institucional. */
export default function Screen({ children, className = "", edges = ["top"] }) {
    return (
        <SafeAreaView edges={edges} className="flex-1 bg-sena">
            <View className={`flex-1 bg-surface ${className}`}>{children}</View>
        </SafeAreaView>
    );
}
