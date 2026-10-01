import { View, Text, Pressable } from "react-native";

export default function SectionTitle({ title, actionLabel, onAction }) {
    return (
        <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-bold text-ink">{title}</Text>
            {actionLabel ? (
                <Pressable onPress={onAction} hitSlop={8}>
                    <Text className="text-sena font-semibold">{actionLabel}</Text>
                </Pressable>
            ) : null}
        </View>
    );
}
