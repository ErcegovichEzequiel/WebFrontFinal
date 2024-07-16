import React, { useState } from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'
import '../../Styles/Desarrollador.css'
import '../../Styles/Desarrollador.css'
import { getAllUsers, deleteUserById, updateUserById } from '../../src/fetching/auth.fetching';

const UsuarioDesarrollador = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [userIdToDelete, setUserIdToDelete] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');
    const [userIdToUpdate, setUserIdToUpdate] = useState('');
    const [userDataToUpdate, setUserDataToUpdate] = useState({});
    const [updateMessage, setUpdateMessage] = useState('');

    const handleActualizarUsuario = async () => {
        try {
            const response = await updateUserById(userIdToUpdate, userDataToUpdate);
            if (response) {
                setUpdateMessage(`Usuario con ID ${userIdToUpdate} actualizado correctamente.`);
            } else {
                throw new Error(response.message || "Error al actualizar usuario");
            }
        } catch (error) {
            console.error('Error en handleActualizarUsuario:', error.message);
            setUpdateMessage(`Error al actualizar usuario con ID ${userIdToUpdate}: ${error.message}`);
        }
    };

    const handleBuscarUsuarios = async () => {
        try {
            const response = await getAllUsers();
            console.log(response)
            if (response.result.usuarios) {
                setUsuarios(response.result.usuarios);
            } else {
                console.error('Error al buscar usuarios:', response.message);
            }
        } catch (error) {
            console.error('Error en getAllUsers:', error.message);
        }
    };
    const handleEliminarUsuario = async () => {
        try {
            const response = await deleteUserById(userIdToDelete);
            if (response) {
                setDeleteMessage(`Usuario con ID ${userIdToDelete} eliminado correctamente.`);
                handleBuscarUsuarios();
            } else {
                throw new Error(response.message || "Error al eliminar usuario");
            }

        } catch (error) {
            console.error('Error en handleEliminarUsuario:', error.message);
            setDeleteMessage(`Error al eliminar usuario con ID ${userIdToDelete}: ${error.message}`);
        }
    };

    const handleChangeUserIdToDelete = (e) => {
        setUserIdToDelete(e.target.value);
    };

    return (<>
        <Navbar />
        <div className='containerDesarrollador'>
            <h1>Panel de Administración de Usuarios</h1>
            <div className='cartaDesarrollador'>
                <h3>Usuarios</h3>
                <button className='botonDesarrollador' onClick={handleBuscarUsuarios}>Buscar</button>
                <ul>
                    {usuarios && usuarios.length > 0 ? (
                        usuarios.map((usuario) => (
                            <li key={usuario._id}>
                                <p>ID del Usuario: </p>{usuario._id}
                                <p>Email del Usuario:</p> {usuario.email}
                                <p>Password del Usuario: </p> {usuario.password}
                                <hr />
                            </li>
                        ))
                    ) : (
                        <p>No hay usuarios disponibles</p>
                    )}
                </ul>
            </div>

            <div className='cartaDesarrollador'>
                <h3>Eliminar Usuario</h3>
                <label htmlFor="ID">ID</label>
                <input type="text" value={userIdToDelete} onChange={handleChangeUserIdToDelete} placeholder="ID del usuario a eliminar" />
                <button className='botonDesarrollador' onClick={handleEliminarUsuario}>Eliminar</button>
                {deleteMessage && <p>{deleteMessage}</p>}
            </div>

            <div className='cartaDesarrollador'>
                <h3>Editar Usuario</h3>
                <label htmlFor="ID">ID</label>
                <input type="text" placeholder='ID del usuario' onChange={(e) => setUserIdToUpdate(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Nuevo email del usuario' onChange={(e) => setUserDataToUpdate({ ...userDataToUpdate, email: e.target.value })} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Nueva password del usuario' onChange={(e) => setUserDataToUpdate({ ...userDataToUpdate, password: e.target.value })} />
                <button className='botonDesarrollador' onClick={handleActualizarUsuario}>Editar</button>
                {updateMessage && <p>{updateMessage}</p>}
            </div>

        </div>
        <Footer />
    </>
    );
};

export default UsuarioDesarrollador;




