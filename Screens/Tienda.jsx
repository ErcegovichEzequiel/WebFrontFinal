import React, { useEffect, useState } from 'react';
import '../Styles/Global.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../src/fetching/products.fetching';
import { addToCart } from '../src/fetching/cart.fetching';

const Tienda = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem('token');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    try {
      const response = await addToCart(productId, quantity);
      if (response) {
        alert('Producto agregado al carrito');
        setCart(response);
      } else {
        alert('No se pudo agregar el producto al carrito');
        throw new Error(response.message || 'Error adding product to cart');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: quantity
    })); 
  };

  return (
    <>
      <Navbar />
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h3>{product.titulo}</h3>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
            <p>Stock: {product.stock}</p>
            {isAuthenticated && (
              <>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      product._id,
                      (cart[product._id] || 0) - 1
                    )
                  }
                  disabled={cart[product._id] <= 0}
                >
                  -
                </button>
                <span>{cart[product._id] || 0}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      product._id,
                      (cart[product._id] || 0) + 1
                    )
                  }
                  disabled={cart[product._id] >= product.stock}
                >
                  +
                </button>
                <button
                  onClick={() =>
                    handleAddToCart(product._id, cart[product._id] || 1)
                  }
                  disabled={cart[product._id] <= 0}
                >
                  Agregar al carrito
                </button>
              </>
            )}
          </div>
        ))}
        {isAuthenticated && (
          <button onClick={() => navigate('/Carrito')}>Ir al carrito</button> // Ir al carrito
        )}
      </div>
      <Footer />
    </>
  );
};

export default Tienda;
