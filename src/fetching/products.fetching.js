import { HTTP, URL } from "./http"

const ROUTE = '/api/products'

const getProducts = async () => {
  try {
    const response = await HTTP.GET(URL.URL_API + ROUTE);
    if (!response || !response.result || !response.result.productos) {
      throw new Error("La respuesta no contiene productos");
    }
    return response.result.productos;
  } catch (error) {
    console.error("Error en getProducts:", error);
    throw error;
  }
};

const getProductById = async (pid) => {
  try {
    const response = await HTTP.GET(URL.URL_API + ROUTE + '/' + pid);
    if (!response || !response.result || !response.result.producto) {
      throw new Error("La respuesta no contiene el producto");
    }
    return response.result.producto;
  } catch (error) {
    console.error("Error en getProductById:", error);
    throw error;
  }
};

const createProduct = async (productData) => {
  try {
    const response = await HTTP.POST(URL.URL_API + ROUTE, productData);
    if (!response || !response.result || !response.result.producto) {
      throw new Error("No se pudo crear el producto");
    }
    return response.result.producto;
  } catch (error) {
    console.error("Error en createProduct:", error);
    throw error;
  }
};

const updateProduct = async (pid, productData) => {
  try {
    const response = await HTTP.PUT(URL.URL_API + ROUTE + '/' + pid, productData);
    if (!response || !response.result || !response.result.producto) {
      throw new Error("No se pudo modificar el producto");
    }
    return response.result.producto;
  } catch (error) {
    console.error("Error en updateProduct:", error);
    throw error;
  }
};

const deleteProduct = async (pid) => {
  try {
    const response = await HTTP.DELETE(URL.URL_API + ROUTE + '/' + pid);
    if (!response || !response.result || !response.result.message !== 'Producto eliminado') {
      throw new Error("No se pudo eliminar el producto");
    }
    return response.result.message;
  } catch (error) {
    console.error("Error en deleteProduct:", error);
    throw error;
  }
};

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
