import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { getCartItems, deleteCartItem } from '../src/fetching/cart.fetching';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const [totalProductos, setTotalProductos] = useState([]);
    const [processingOrder, setProcessingOrder] = useState(false);
    const isAuthenticated = !!localStorage.getItem('token');

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCartItems();
                setCartItems(items);
                setTotalProductos(items.map(item => item.product_id._id));
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
        {isAuthenticated && fetchCartItems()}
        
    }, []);

    const handleDeleteItem = async (productId) => {
        if (window.confirm('¿Está seguro de que desea eliminar este producto?')) {
            try {
                await deleteCartItem(productId);
                setCartItems(cartItems.filter(item => item.product_id._id !== productId));
                setTotalProductos(totalProductos.filter(id => id !== productId));
                alert('Producto eliminado del carrito');
            } catch (error) {
                console.error('Error deleting cart item:', error);
                alert('Error al eliminar el producto del carrito');
            }
        }
    };

    const handleClearCart = async () => {
        if (window.confirm('¿Está seguro de que desea vaciar el carrito?')) {
            try {
                for (let productId of totalProductos) {
                    await deleteCartItem(productId);
                }
                setCartItems([]);
                setTotalProductos([]);
                alert('Carrito vaciado');
            } catch (error) {
                console.error('Error clearing cart:', error);
                alert('Error al vaciar el carrito');
            }
        }
    };

    const handleCheckout = async () => {
        setProcessingOrder(true);
        setTimeout(async () => {
            try {
                for (let productId of totalProductos) {
                    await deleteCartItem(productId);
                }
                setCartItems([]);
                setTotalProductos([]);
                alert('Gracias por su compra');
                navigate('/');
            } catch (error) {
                console.error('Error processing checkout:', error);
                alert('Error al procesar la compra');
            } finally {
                setProcessingOrder(false);
            }
        }, 5000);
    }

    return (
        <>
            <Navbar />
            <div>
                <h1>Carrito</h1>
                {!isAuthenticated && <p>Inicia sesión para ver el carrito</p>}
                {isAuthenticated && (<>
                    <div>
                        {cartItems.length === 0 && <p>No hay productos en el carrito</p>}
                        {cartItems.map(item => (
                            <div key={item.product_id._id}>
                                <h2>{item.product_id.titulo}</h2>
                                <p>Precio: ${item.product_id.precio}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <button onClick={() => handleDeleteItem(item.product_id._id)}>Eliminar Producto</button>
                            </div>
                        ))}
                    </div>
                    <p>Total: ${cartItems.reduce((total, item) => total + item.product_id.precio * item.cantidad, 0)}</p>
                    {processingOrder && <p>Procesando orden...</p>}
                    <button onClick={handleClearCart}>Limpiar Carrito</button>
                    <button onClick={handleCheckout}>Realizar Compra</button>
                </>)}
            </div>
            <Footer />
        </>
    );
};

export default Carrito;

