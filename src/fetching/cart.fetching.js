import { HTTP, URL } from "./http"

const ROUTE = '/api/carts'


export const getCartItems = async () => {
    try {
        const response = await HTTP.GET(URL.URL_API + ROUTE + '/')
        console.log(response)
        if (response.result && response.result.items) {
            return response.result.items
        }
        throw new Error("No contiene productos en el carrito")
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

export const deleteCartItem = async (productId) => {
    try {
        const response = await HTTP.DELETE(UURL.URL_API + ROUTE + '/' + productId)
        if (!response || !response.result || response.result.message !== 'Producto eliminado del carrito') {
            throw new Error("No se pudo eliminar el producto del carrito")
        }
        return response.result.message
    } catch (error) {
        console.error("Error en deleteCartItem:", error)
        throw { message: error.message } // Consistencia en el formato del error
    }
}

export const checkout = async () => {
    try {
        const response = await HTTP.DELETE(URL.URL_API + ROUTE)
        if (!response || !response.result || response.result.message !== 'Carrito vaciado') {
            throw new Error("No se pudo vaciar el carrito")
        }
        return response.result.message
    } catch (error) {
        console.error("Error en checkout:", error)
        throw { message: error.message } // Consistencia en el formato del error
    }
}



// export const getCartItems = async () => {
//     try {
//         const response = await HTTP.GET(URL.URL_API + ROUTE + '/')
//         console.log(response)
//         if (response.result.items) {
//             return response.result.items
//         }
//         throw new Error("La respuesta no contiene productos en el carrito")
//     } catch (error) {
//         console.error("Error en getCartItems:", error)
//         throw { message: error.message }
//     }
// }


//  export const deleteCartItem = async (productId) => {
//     try {
//         const response = await HTTP.DELETE(URL.URL_API + `${ROUTE}/${productId}`)
//         if (!response || !response.result || response.result.message !== 'Producto eliminado del carrito') {
//             throw new Error("No se pudo eliminar el producto del carrito")
//         }
//         return response.result.message
//     } catch (error) {
//         console.error("Error en deleteCartItem:", error)
//         throw error
//     }
// }

// export const checkout = async () => {
//     try {
//         const response = await HTTP.DELETE(URL.URL_API + ROUTE)
//         if (!response || !response.result || response.result.message !== 'Carrito vaciado') {
//             throw new Error("No se pudo vaciar el carrito")
//         }
//         return response.result.message
//     } catch (error) {
//         console.error("Error en checkout:", error)
//         throw error
//     }
// }

