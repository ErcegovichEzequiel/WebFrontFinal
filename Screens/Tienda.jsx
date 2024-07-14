import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { getProducts } from '../src/fetching/products.fetching';
import { addToCart } from '../src/fetching/cart.fetching';
// import { verificarToken } from '../src/fetching/auth.fetching';



const Tienda = () => {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
          // await verificarToken();
          setLoggedIn(true);
      } catch (error) {
          console.error('Error al verificar token:', error.message);
          setLoggedIn(false);
      }
  };

    const fetchProducts = async () => {
      try {
        const productos = await getProducts();
        setProducts(productos);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    checkLoginStatus();
    fetchProducts();
  }, []);

  const handleAddToCart = async (product, cantidad) => {
    if (!loggedIn) {
      alert('Por favor, inicie sesión para comprar.');
      return;
    }

    try {
      await addToCart({ product, cantidad });
      alert('Producto agregado al carrito');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error al agregar el producto al carrito');
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Tienda</h1>
        <div>
          {products.map(product => (
            <div key={product._id}>
              <h2>{product.nombre}</h2>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.precio}</p>
              <p>Stock: {product.stock}</p>
              <Counter stock={product.stock} onAddToCart={(cantidad) => handleAddToCart(product, cantidad)} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const Counter = ({ stock, onAddToCart }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAddToCart(cantidad)}>Comprar</button>
    </div>
  );
};

export default Tienda;

