import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function DanteLayout(){
    return(
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
                name="homeDante"
                options={{
                    title:"Home",
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
                name="ambientesDante"
                options={{
                    title:"Ambientes",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                        name="easel-outline"
                        color={color}
                        size={size}
                    />
                    ),
                }}
            />
            <Tabs.Screen
                name="asignacionesDante"
                options={{
                    title:"Asignaciones",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="clipboard-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="trasladosDante"
                options={{
                    title:"Traslados",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                        name="bus-outline"
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