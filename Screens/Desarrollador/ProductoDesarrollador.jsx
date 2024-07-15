import React, { useState } from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'
import '../../Styles/Desarrollador.css'
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../src/fetching/products.fetching';


const ProductoDesarrollador = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ titulo: '', descripcion: '', precio: 0, stock: 0 });
    const [editProduct, setEditProduct] = useState({ pid: '', titulo: '', descripcion: '', precio: 0, stock: 0 });
    const [eliminarProducto, setEliminarProducto] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleEditProduct = async () => {
        try {
            const response = await updateProduct(editProduct.pid, editProduct);
            if (response) {
                const updatedProducts = products.map((product) => {
                    if (product._id === editProduct.pid) {
                        return { ...product, ...editProduct };
                    }
                    return product;
                });
                setProducts(updatedProducts);
                setEditProduct({ pid: '', titulo: '', descripcion: '', precio: 0, stock: 0 });
            } else {
                throw new Error(response.message || "Error al modificar el producto");
            }
        } catch (error) {
            console.error('Error en handleEditProduct:', error.message);
        }
    };

    const handleCreateProduct = async () => {
        try {
            const response = await createProduct(newProduct);
            if (response && response._id) {
                setProducts([...products, response]);
                setNewProduct({ titulo: '', descripcion: '', precio: 0, stock: 0 });
            } else {
                throw new Error(response.message || "Error al crear el producto");
            }
        } catch (error) {
            console.error('Error en handleCreateProduct:', error.message);
        }
    };

    const handleGetProducts = async () => {
        try {
            const productsData = await getProducts();
            if (productsData && Array.isArray(productsData)) {
                setProducts(productsData);
            } else {
                console.error('Error: La estructura de los datos de productos no es la esperada.');
            }
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    const handleDeleteProduct = async () => {
        try {
            const response = await deleteProduct(eliminarProducto);
            if (response) {
                setDeleteMessage(`Producto con ID ${eliminarProducto} eliminado correctamente.`);
                handleGetProducts();
            } else {
                throw new Error(response.message || "Error al eliminar el producto");
            }
        } catch (error) {
            console.error('Error en handleDeleteProduct:', error.message);
        }
    }

    const handleChangeProductPidDelete = (e) => {
        setEliminarProducto(e.target.value);
    };

    return (
        <>
            <Navbar />
            <div className='containerDesarrollador'>
                <h1>Panel de Administración de Productos</h1>

                <div className='cartaDesarrollador'>
                    <h3>Productos</h3>
                    <button onClick={handleGetProducts}>Buscar</button>
                    <ul>
                        {products && products.length > 0 ? (
                            products.map((producto) => (
                                <li key={producto._id}>
                                    <p>ID del Producto: {producto._id}</p>
                                    <p>Título: {producto.titulo}</p>
                                    <p>Descripción: {producto.descripcion}</p>
                                    <p>Precio: {producto.precio}</p>
                                    <p>Stock: {producto.stock}</p>
                                    <hr />
                                </li>
                            ))
                        ) : (
                            <p>No hay productos disponibles</p>
                        )}
                    </ul>
                </div>

                <div className='cartaDesarrollador'>
                    <h3>Añadir un nuevo producto</h3>
                    <label>Titulo</label>
                    <input
                        type="text"
                        value={newProduct.titulo}
                        onChange={(e) => setNewProduct({ ...newProduct, titulo: e.target.value })}
                    />
                    <label>Descripción</label>
                    <input
                        type="text"
                        value={newProduct.descripcion}
                        onChange={(e) => setNewProduct({ ...newProduct, descripcion: e.target.value })}
                    />
                    <label>Precio</label>
                    <input
                        type="number"
                        value={newProduct.precio}
                        onChange={(e) => setNewProduct({ ...newProduct, precio: parseFloat(e.target.value) })}
                    />
                    <label>Stock</label>
                    <input
                        type="number"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value, 10) })}
                    />
                    <button onClick={handleCreateProduct}>Añadir</button>
                </div>

                <div className='cartaDesarrollador'>
                    <h3>Editar un producto</h3>
                    <label htmlFor="pid">ID</label>
                    <input
                        type="text"
                        id="pid"
                        value={editProduct.pid}
                        onChange={(e) => setEditProduct({ ...editProduct, pid: e.target.value })}
                    />
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        id="title"
                        value={editProduct.titulo}
                        onChange={(e) => setEditProduct({ ...editProduct, titulo: e.target.value })}
                    />
                    <label htmlFor="description">Descripción</label>
                    <input
                        type="text"
                        id="description"
                        value={editProduct.descripcion}
                        onChange={(e) => setEditProduct({ ...editProduct, descripcion: e.target.value })}
                    />
                    <label htmlFor="price">Precio</label>
                    <input
                        type="number"
                        id="price"
                        value={editProduct.precio}
                        onChange={(e) => setEditProduct({ ...editProduct, precio: parseFloat(e.target.value) })}
                    />
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        id="stock"
                        value={editProduct.stock}
                        onChange={(e) => setEditProduct({ ...editProduct, stock: parseInt(e.target.value, 10) })}
                    />
                    <button onClick={handleEditProduct}>Editar</button>
                </div>

                <div className='cartaDesarrollador'>
                    <h3>Eliminar un producto</h3>
                    <label htmlFor="pid">ID</label>
                    <input type="text" value={eliminarProducto} onChange={handleChangeProductPidDelete} />
                    <button onClick={handleDeleteProduct}>Eliminar</button>
                </div>


            </div>
            <Footer />
        </>
    );
}


export default ProductoDesarrollador;