import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AdminLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 70,
                    paddingTop: 8,
                    paddingBottom: 8,
                    marginHorizontal: 15,
                    marginBottom: 15,
                    borderRadius: 20,
                    borderTopWidth: 0,
                    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.15)",
                },
                tabBarActiveTintColor: "#39A900",
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: "600",
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="elementos"
                options={{
                    title: "Inventario",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="cube-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="reportes"
                options={{
                    title: "Reportes",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="bar-chart-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="centros"
                options={{
                    title: "Centros",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="business-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
}