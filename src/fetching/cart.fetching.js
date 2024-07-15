import { HTTP, URL } from "./http"

const ROUTE = '/api/carts'


export const getCartItems = async () => {
    try {
        const response = await HTTP.GET(URL.URL_API + ROUTE + '/')
        if (response.carrito.items) {
            return response.carrito.items
        }
        throw new Error("No contiene productos el carrito")
    } catch (error) {
        console.error("Error en getCartItems:", error)
        throw { message: error.message }
    }
}

export const addToCart = async (product_id, cantidad) => {
    try {
        const carrito = { product_id: product_id, cantidad: cantidad }
        const response = await HTTP.POST(URL.URL_API + ROUTE + '/agregarAlCart', carrito)
        console.log('crack', response)
        if (response) {
            return response
        }
        throw new Error("No se pudo agregar el producto al carrito")
    } catch (error) {
        console.error("Error en addToCart:", error)
        throw { message: error.message }
    }
}

export const deleteCartItem = async (product_Id) => {
    try {
        const response = await HTTP.DELETE(URL.URL_API + ROUTE + '/' + product_Id)
        console.log('crack', response.carrito.items)
        if (response.carrito.items) {
            return response.carrito.items
        }
        throw new Error("No se pudo eliminar el producto del carrito")
        
    } catch (error) {
        console.error("Error en deleteCartItem:", error)
        throw { message: error.message } 
    }
}


