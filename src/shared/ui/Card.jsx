import { Pressable, View } from "react-native";

/** Tarjeta blanca. Si recibe onPress se vuelve presionable con feedback. */
export default function Card({ children, onPress, className = "", ...rest }) {
    const base = `bg-white rounded-3xl p-4 border border-gray-100 ${className}`;
    if (!onPress) {
        return (
            <View className={base} {...rest}>
                {children}
            </View>
        );
    }
    return (
        <Pressable
            onPress={onPress}
            className={`${base} active:opacity-80`}
            accessibilityRole="button"
            {...rest}
        >
            {children}
        </Pressable>
    );
}
