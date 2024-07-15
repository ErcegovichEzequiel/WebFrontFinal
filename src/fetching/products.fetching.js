import { HTTP, URL } from "./http"

const ROUTE = '/api/products'

export const getProducts = async () => {
  try {
    const response = await HTTP.GET(URL.URL_API + ROUTE + '/');
    if (response.result.productos) {
      return response.result.productos;
    }
    throw new Error(response.message || "Error al buscar todos los productos");
  } catch (error) {
    console.error("Error en getProducts:", error);
    throw { message: error.message };
  }
};

export const getProductById = async (pid) => {
  try {
    const response = await HTTP.GET(URL.URL_API + ROUTE + '/' + pid);
    if (response) {
      return response;
    }
    throw new Error(response.message || "Error al buscar el producto");
  } catch (error) {
    console.error("Error en getProductById:", error);
    throw { message: error.message };
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await HTTP.POST(URL.URL_API + ROUTE + '/createProduct', productData);
    if (response) {
      return response;
    }
    throw new Error("No se pudo crear el producto");
  } catch (error) {
    console.error("Error en createProduct:", error);
    throw { message: error.message };
  }
};

export const updateProduct = async (pid, productData) => {
  try {
    const response = await HTTP.PUT(URL.URL_API + ROUTE + '/' + pid, productData);
    if (response) {
      return response
    }
    throw new Error("No se pudo modificar el producto");
  } catch (error) {
    console.error("Error en updateProduct:", error);
    throw { message: error.message };
  }
};

export const deleteProduct = async (pid) => {
  try {
    const response = await HTTP.DELETE(URL.URL_API + ROUTE + '/' + pid);
    if (response) {
      return response
    }
    throw new Error("No se pudo eliminar el producto");
  } catch (error) {
    console.error("Error en deleteProduct:", error);
    throw { message: error.message };
  }
};

