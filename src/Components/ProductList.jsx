import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice'; // Action to add product to cart
import './ProductList.css'; 



const ProductList = () => {    

    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));// Add product to cart
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => {
          const isAlreadyInCart = cartItems.some(item => item.id === product.id); // Check if product is already in cart
          return (
            <li key={product.id} className="product-list-item">
              <span>{product.name} - ${product.price}</span>
              <button
                className={`add-to-cart-btn ${isAlreadyInCart ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={isAlreadyInCart} // Disable button if already added
              >
                {isAlreadyInCart ? 'Added' : 'Add to Cart'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
