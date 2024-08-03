import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import './index.css'; // Make sure to style the form as needed

const CheckoutForm = () => {
  const { cartItems, totalCost,clearCart} = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  console.log(cartItems)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const initialFormState = {
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your payment was successful')

    setFormData(initialFormState)

    clearCart();


    console.log('Form submitted:', formData);
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
    </div>
  );
};

export default CheckoutForm;
