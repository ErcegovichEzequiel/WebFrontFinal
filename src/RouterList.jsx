import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home';
import Login from '../Screens/Login/Login';
import Register from '../Screens/Register/Register';
import Carrito from '../Screens/Carrito';
import Nosotros from '../Screens/Nosotros';
import Tienda from '../Screens/Tienda';
import Desarrollador from '../Screens/Desarrollador/Desarrollador';
import UsuarioDesarrollador from '../Screens/Desarrollador/UsuarioDesarrollador';
import ProductoDesarrollador from '../Screens/Desarrollador/ProductoDesarrollador';

const RouterList = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Tienda' element={<Tienda />} />
        <Route path='/Desarrollador' element={<Desarrollador />} />
        <Route path='/UsuarioDesarrollador' element={<UsuarioDesarrollador />} />
        <Route path='/ProductoDesarrollador' element={<ProductoDesarrollador />} />
      </Routes>
    </div>
  );
};

export default RouterList;
