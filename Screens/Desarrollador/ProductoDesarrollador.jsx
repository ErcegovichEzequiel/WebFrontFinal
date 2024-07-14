import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'
import '../../Styles/Desarrollador.css'
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../src/fetching/products.fetching';

const ProductoDesarrollador = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0 });
    const [editProduct, setEditProduct] = useState({ id: '', name: '', description: '', price: 0 });

    const handleGetProducts = async () => {
        try {
            const productsData = await getProducts();
            setProducts(productsData);
        } catch (error) {
            console.error('Error obteniendo productos:', error);
        }
    };

    const handleCreateProduct = async () => {
        try {
            await createProduct(newProduct);
            handleGetProducts(); // Actualizar la lista de productos
            setNewProduct({ name: '', description: '', price: 0 }); // Limpiar el formulario
        } catch (error) {
            console.error('Error creando producto:', error);
        }
    };

    const handleUpdateProduct = async () => {
        try {
            await updateProduct(editProduct.id, editProduct);
            handleGetProducts(); // Actualizar la lista de productos
            setEditProduct({ id: '', name: '', description: '', price: 0 }); // Limpiar el formulario
        } catch (error) {
            console.error('Error actualizando producto:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            handleGetProducts(); // Actualizar la lista de productos
        } catch (error) {
            console.error('Error eliminando producto:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="containerProductoDesarrollador">
                <h1>Aquí podrá editar los productos de su tienda</h1>

                <div className="cartaDesarrollador">
                    <h3>Agregar Producto</h3>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Precio"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    />
                    <button onClick={handleCreateProduct}>Agregar</button>
                </div>

                <div className="cartaDesarrollador">
                    <h3>Editar Producto</h3>
                    <input
                        type="text"
                        placeholder="ID"
                        value={editProduct.id}
                        onChange={(e) => setEditProduct({ ...editProduct, id: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Nombre"
                        value
                        ={editProduct.name}
                        onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        value={editProduct.description}
                        onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Precio"
                        value={editProduct.price}
                        onChange={(e) => setEditProduct({ ...editProduct, price: Number(e.target.value) })}
                    />
                    <button onClick={handleUpdateProduct}>Editar</button>
                </div>

                <div className="cartaDesarrollador">
                    <h3>Eliminar Producto</h3>
                    <input
                        type="text"
                        placeholder="ID"
                        onChange={(e) => setEditProduct({ ...editProduct, id: e.target.value })}
                    />
                    <button onClick={() => handleDeleteProduct(editProduct.id)}>Eliminar</button>
                </div>

                <div className="cartaDesarrollador">
                    <h3>Traer todos los productos</h3>
                    <button onClick={handleGetProducts}>Traer</button>
                    <div>
                        {products.map((product) => (
                            <div key={product._id}>
                                <p>ID: {product._id}</p>
                                <p>Nombre: {product.name}</p>
                                <p>Descripción: {product.description}</p>
                                <p>Precio: {product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductoDesarrollador;
