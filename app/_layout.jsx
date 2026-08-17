import { Stack } from "expo-router";
import "../global.css";
export default function LayoutApp() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="auth"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="admin"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="instructor"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="cuentaDante"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}