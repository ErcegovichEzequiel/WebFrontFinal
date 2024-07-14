import { HTTP, URL } from "./http"

const ROUTE = '/api/auth'

export const login = async (usuario) => {
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/login', usuario);
        if (!result.ok) {
            throw result;
        } else {
            localStorage.setItem('token', result.token);
        }
    } catch (error) {
        throw { message: error.message };
    }
}
export const register = async (usuario) => {
    try {
        const data = await HTTP.POST(URL.URL_API + ROUTE + '/register', usuario);
        if (!data.ok) {
            throw new Error(data.message || "Error en el registro");
        }
        return data;
    } catch (error) {
        console.error("Error en register:", error);
        throw { message: error.message };
    }
}
export const getAllUsers = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await HTTP.GET(URL.URL_API + ROUTE + '/users', { token });
        if (response) {
            return response;
        }
        throw new Error(response.message || "Error al buscar todos los usuarios");
    } catch (error) {
        console.error("Error en getAllUsers:", error);
        throw { message: error.message };
    }
};

export const updateUserById = async (userId, userData) => {
    try {
        const response = await HTTP.PUT(URL.URL_API + ROUTE + '/' + userId, userData);
        if (response) {
            return response;
        }
        throw new Error(response.message || "Error al modificar usuario");
    }
    catch (error) {
        console.error("Error en updateUserById:", error);
        throw { message: error.message };
    }
};

export const deleteUserById = async (userId) => {
    try {
        const response = await HTTP.DELETE(URL.URL_API + ROUTE + '/' + userId);
        if (response) {
            return response;
        }
        throw new Error(response.message || "Error al eliminar usuario");

    } catch (error) {
        console.error("Error en deleteUserById:", error);
        throw { message: error.message };
    }
};
