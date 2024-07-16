import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'
import '../../Styles/Desarrollador.css'
import { Link } from 'react-router-dom'

const Desarrollador = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    return (
        <>
            <Navbar />
            <div className='containerDesarrollador'>
                <div className='cartaDesarrollador'>
                    <h3>PRODUCTOS</h3>
                    <p>Aquí podrá editar los productos de su tienda.</p>
                    {isAuthenticated ? (
                        <Link className='botonDesarrollador' to="/ProductoDesarrollador">Editar</Link>
                    ) : (<p>Debe ser un usuario logueado</p>)
                    }
                </div>
                <div className='cartaDesarrollador'>
                    <h3>USUARIOS</h3>
                    <p>Aquí podrá editar los usuarios de su tienda.</p>
                    {isAuthenticated ? (
                        <Link className='botonDesarrollador' to="/UsuarioDesarrollador">Editar</Link>
                    ) : (<p>Debe ser un usuario logueado</p>)
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Desarrollador