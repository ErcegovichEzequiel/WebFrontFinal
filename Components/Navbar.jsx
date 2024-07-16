import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import '../Styles/Global.css'
import { FaShoppingCart } from 'react-icons/fa';
import { getCartItems } from '../src/fetching/cart.fetching';

const Navbar = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    const [contadorItemsCarrito, setContadorItemsCarrito] = useState(0);

    useEffect(() => {
        if (isAuthenticated) {
            const fetchCartItems = async () => {
                try {
                    const cartItems = await getCartItems();
                    const totalItems = cartItems.reduce((total, item) => total + item.cantidad, 0);
                    setContadorItemsCarrito(totalItems);
                } catch (error) {
                    console.error('Error fetching cart items:', error);
                }
            };
            fetchCartItems();
        }
    }, [isAuthenticated]);

    return (
        <>
            <div className='containerNavbar'>
                <div className='containerIRC'>
                    {isAuthenticated && <Link className='linkIRC' to="/Desarrollador">Opciones de Desarrollador</Link>}
                    <Link className='linkIRC' to="/Login">Inicia sesión</Link>
                    <Link className='linkIRC' to="/Register">Registrate</Link>
                    <Link className='linkIRC' to="/Carrito"> {contadorItemsCarrito > 0 && <span className='contadorCarrito'>{contadorItemsCarrito}</span>}<FaShoppingCart /></Link>
                </div>
                <div className='navbar'>
                    <h1 className='logo'>HERMES</h1>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/Historia">Historia</Link>
                    <Link className='link' to="/Nosotros">Nosotros</Link>
                    <Link className='link' to="/Tienda">Tienda</Link>
                </div>

            </div>
        </>
    )
}

export default Navbar