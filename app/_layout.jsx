import "../global.css";
import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider, BrandSplash } from "@/shared/ui";
import { AuthProvider, useAuth, ROLES } from "@/modules/auth";

SplashScreen.preventAutoHideAsync().catch(() => {});
const MIN_SPLASH_MS = 1400;
function RootNavigator() {
    const { status, user } = useAuth();
    const [splashListo, setSplashListo] = useState(false);
    useEffect(() => {
        SplashScreen.hideAsync().catch(() => {});
        const t = setTimeout(() => setSplashListo(true), MIN_SPLASH_MS);
        return () => clearTimeout(t);
    }, []);
    if (status === "restoring" || !splashListo) return <BrandSplash />;
    const rol = user?.rol;
    // Rutas protegidas: cada grupo solo existe si se cumple su condición.
    // Al iniciar/cerrar sesión expo-router redirige solo a "index".
    return (
        <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
            <Stack.Screen name="index" />
            <Stack.Protected guard={!user}>
                <Stack.Screen name="auth" />
            </Stack.Protected>
            <Stack.Protected guard={Boolean(user)}>
                <Stack.Screen name="acerca" options={{ animation: "slide_from_right" }} />
            </Stack.Protected>
            <Stack.Protected guard={rol === ROLES.ADMIN}>
                <Stack.Screen name="admin" />
            </Stack.Protected>
            <Stack.Protected guard={rol === ROLES.INSTRUCTOR}>
                <Stack.Screen name="instructor" />
            </Stack.Protected>
            <Stack.Protected guard={rol === ROLES.CUENTADANTE}>
                <Stack.Screen name="cuentaDante" />
            </Stack.Protected>
            <Stack.Protected guard={rol === ROLES.APRENDIZ}>
                <Stack.Screen name="aprendiz" />
            </Stack.Protected>
        </Stack>
    );
}

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <ToastProvider>
                    <StatusBar style="light" />
                    <RootNavigator />
                </ToastProvider>
            </AuthProvider>
        </SafeAreaProvider>
    );
}
