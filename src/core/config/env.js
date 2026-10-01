/**
 * Configuración de entorno.
 * Expo expone al bundle solo las variables que empiezan por EXPO_PUBLIC_.
 * Copia `.env.example` a `.env` y ajusta los valores.
 */
const rawUrl = process.env.EXPO_PUBLIC_API_URL ?? "";
const rawMocks = process.env.EXPO_PUBLIC_USE_MOCKS;

export const env = {
    apiUrl: rawUrl.replace(/\/+$/, ""),
    // Si no hay URL configurada se usan mocks automáticamente.
    useMocks: rawMocks ? rawMocks === "true" : rawUrl === "",
    timeout: Number(process.env.EXPO_PUBLIC_API_TIMEOUT ?? 15000),
    mockLatency: 450,
};
