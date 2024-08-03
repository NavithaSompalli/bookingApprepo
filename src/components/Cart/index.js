import React from 'react';
import { useCart } from '../../contexts/CartContext';


const Cart = () => {
  const { cart, removeFromCart, totalCost } = useCart();

  return (
    <div className="cart">
      <h2>Booking Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((property) => (
            <div key={property.id} className="cart-item">
              <h3>{property.title}</h3>
              <p>Price: ${property.price}</p>
              <button onClick={() => removeFromCart(property.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Cost: ${totalCost}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
