import React, { useState } from 'react';
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
                // Luego de eliminar, actualizamos la lista de usuarios para reflejar el cambio
                handleBuscarUsuarios();
            } else {
                throw new Error(response.message || "Error al eliminar usuario");
            }

        } catch (error) {
            console.error('Error en handleEliminarUsuario:', error.message);
            setDeleteMessage(`Error al eliminar usuario con ID ${userIdToDelete}: ${error.message}`);
        }
    };

    const handleChangeUserIdToDelete = (event) => {
        setUserIdToDelete(event.target.value);
    };

    return (
        <div>
            <h1>Panel de Administración de Usuarios</h1>
            <div>
                <h3>USUARIOS</h3>
                <button onClick={handleBuscarUsuarios}>BUSCAR</button>
                <ul>
                    {usuarios && usuarios.length > 0 ? (
                        usuarios.map((usuario) => (
                            <li key={usuario._id}>
                                <p>ID del Usuario: </p>{usuario._id}
                                <p>Email del Usuario:</p> {usuario.email}
                                <p>Password del Usuario: </p> {usuario.password} {/* Ajusta según la estructura de tus datos */}
                            </li>
                        ))
                    ) : (
                        <li>No hay usuarios disponibles</li>
                    )}
                </ul>
            </div>
            <div>
                <h3>Eliminar Usuario</h3>
                <input type="text" value={userIdToDelete} onChange={handleChangeUserIdToDelete} placeholder="ID del usuario a eliminar" />
                <button onClick={handleEliminarUsuario}>Eliminar</button>
                {deleteMessage && <p>{deleteMessage}</p>}
            </div>
            <div>
                <h3>Editar Usuario</h3>
                <input type="text" placeholder='ID del usuario' onChange={(event) => setUserIdToUpdate(event.target.value)} />
                <input type="text" placeholder='Nuevo email del usuario' onChange={(event) => setUserDataToUpdate({ ...userDataToUpdate, email: event.target.value })} />
                <input type="text" placeholder='Nueva password del usuario'  onChange={(event) => setUserDataToUpdate({ ...userDataToUpdate, password: event.target.value })}/>
                <button onClick={handleActualizarUsuario}>Editar</button>
                {updateMessage && <p>{updateMessage}</p>}
                
            </div>
        </div>
    );
};

export default UsuarioDesarrollador;




