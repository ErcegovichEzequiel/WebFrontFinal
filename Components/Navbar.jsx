import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import '../Styles/Global.css'

const Navbar = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    return (
        <>
            <div className='containerNavbar'>
                <div className='containerIRC'>
                    {isAuthenticated && <Link className='linkIRC' to="/Desarrollador">Opciones de Desarrollador</Link>                    }
                    <Link className='linkIRC' to="/Login">Inicia sesión</Link>
                    <Link className='linkIRC' to="/Register">Registrate</Link>
                    <Link className='linkIRC' to="/Carrito">Carrito</Link>
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