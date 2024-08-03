import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Property = ({ id, image, title, description, price, location, bedrooms, amenities }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, image, title, price });
  };

  return (
    <div className="property">
      <img src={image} alt={title} height={300} width={300} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Location: {location}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Amenities: {amenities.join(', ')}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Property;
