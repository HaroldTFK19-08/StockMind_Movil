import { env, http, ENDPOINTS, unwrapList, unwrapItem } from "@/core";
import { mapUsuario } from "./usuarios.mapper";
import { usuariosMock } from "./usuarios.mock";

export const usuariosService = {
    /** GET /usuarios?rol=aprendiz */
    async list({ rol } = {}) {
        if (env.useMocks) {
            const rows = await usuariosMock.list(rol ? (u) => u.rol === rol : undefined);
            return rows.map(mapUsuario);
        }
        const data = await http.get(ENDPOINTS.usuarios.base, { params: { rol } });
        return unwrapList(data).map(mapUsuario);
    },

    async get(id) {
        if (env.useMocks) return mapUsuario(await usuariosMock.get(id));
        return mapUsuario(unwrapItem(await http.get(ENDPOINTS.usuarios.byId(id))));
    },

    listAprendices() {
        return usuariosService.list({ rol: "aprendiz" });
    },
};
