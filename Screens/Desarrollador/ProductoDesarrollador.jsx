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

    const handleGetProducts = async () => {
        try {
            const productsData = await getProducts();
            console.log('Datos de productos obtenidos:', productsData); // Log para verificar datos
            if (productsData && Array.isArray(productsData)) {
                setProducts(productsData);
            } else {
                console.error('Error: La estructura de los datos de productos no es la esperada.');
            }
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div>
                <h1>Panel de Administración de Productos</h1>
                <div>
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
                                </li>
                            ))
                        ) : (
                            <li>No hay productos disponibles</li>
                        )}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductoDesarrollador;







// const ProductoDesarrollador = () => {
//     const [products, setProducts] = useState([]);
//     const [newProduct, setNewProduct] = useState({ titulo: '', descripcion: '', precio: 0, stock: 0 });
//     const [editProduct, setEditProduct] = useState({ pid: '', titulo: '', descripcion: '', precio: 0, stock: 0 });

//     const handleGetProducts = async () => {
//         try {
//             const productsData = await getProducts();
//             if (productsData) {
//                 setProducts(productsData);
//             }
//         }
//         catch (error) {
//             console.error('Error al obtener los productos:', error);
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div>
//                 <h1>Panel de Administración de Usuarios</h1>
//                 <div>
//                     <h3>Productos</h3>
//                     <button onClick={handleGetProducts}>Buscar</button>
//                     <ul>
//                         {products && products.length > 0 ? (
//                             products.map((producto) => (
//                                 <li key={producto.pid}>
//                                     <p>ID del Usuario: </p>{producto.pid}
//                                     <p>Titulo: </p>{producto.titulo}
//                                     <p>Descripción: </p>{producto.descripcion}
//                                     <p>Precio: </p>{producto.precio}
//                                     <p>Stock: </p>{producto.stock}
//                                 </li>
//                             ))
//                         ) : (
//                             <li>No hay usuarios disponibles</li>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default ProductoDesarrollador;
