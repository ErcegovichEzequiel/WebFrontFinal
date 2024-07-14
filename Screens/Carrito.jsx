import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { getCartItems, deleteCartItem, checkout } from '../src/fetching/cart.fetching';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCartItems();
                setCartItems(items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleDeleteItem = async (productId) => {
        if (window.confirm('¿Está seguro de que desea eliminar este producto?')) {
            try {
                await deleteCartItem(productId);
                setCartItems(cartItems.filter(item => item._id !== productId));
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
                await checkout();
                setCartItems([]);
                alert('Carrito vaciado');
            } catch (error) {
                console.error('Error clearing cart:', error);
                alert('Error al vaciar el carrito');
            }
        }
    };

    const handleCheckout = async () => {
        document.body.innerHTML += '<p>Procesando pedido...</p>';
        setTimeout(async () => {
            try {
                await checkout();
                setCartItems([]);
                document.body.innerHTML = '<p>Carrito vacío</p>';
                alert('Gracias por su compra');
                navigate('/');
            } catch (error) {
                console.error('Error processing checkout:', error);
                alert('Error al procesar la compra');
            }
        }, 5000);
    };

    return (
        <>
            <Navbar />
            <div>
                <h1>Carrito</h1>
                <div>
                    {cartItems.map(item => (
                        <div key={item._id}>
                            <h2>{item.product.nombre}</h2>
                            <p>Cantidad: {item.cantidad}</p>
                            <button onClick={() => handleDeleteItem(item._id)}>Eliminar Producto</button>
                        </div>
                    ))}
                </div>
                <button onClick={handleClearCart}>Limpiar Carrito</button>
                <button onClick={handleCheckout}>Realizar Compra</button>
            </div>
            <Footer />
        </>
    );
};

export default Carrito;

