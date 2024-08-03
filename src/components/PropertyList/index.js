// src/components/PropertyList.js
import React, { useState } from 'react';
import properties from '../../properties.json';
import Property from '../Property';

const PropertyList = () => {
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    bedrooms: '',
    amenities: []
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters(prevFilters => ({
        ...prevFilters,
        amenities: checked
          ? [...prevFilters.amenities, value]
          : prevFilters.amenities.filter(amenity => amenity !== value)
      }));
    } else {
      setFilters({
        ...filters,
        [name]: value
      });
    }
  };

  const filteredProperties = properties.filter(property => {
    return (
      (filters.location === '' || property.location.includes(filters.location)) &&
      (filters.price === '' || property.price <= filters.price) &&
      (filters.bedrooms === '' || property.bedrooms >= filters.bedrooms) &&
      (filters.amenities.length === 0 || filters.amenities.every(amenity => property.amenities.includes(amenity)))
    );
  });

  return (
    <div>
      <h1 className='main-heading'>Book your dream property</h1>
      <div className="filters">
        <input type="text" name="location" placeholder="Location" value={filters.location} onChange={handleFilterChange} />
        <input type="text" name="price" placeholder="Max Price" value={filters.price} onChange={handleFilterChange} />
        <input type="number" name="bedrooms" placeholder="Min Bedrooms" value={filters.bedrooms} onChange={handleFilterChange} />
        <label>
          <input type="checkbox" name="amenities" value="Pool" checked={filters.amenities.includes('Pool')} onChange={handleFilterChange} /> Pool
        </label>
        <label>
          <input type="checkbox" name="amenities" value="Garage" checked={filters.amenities.includes('Garage')} onChange={handleFilterChange} /> Garage
        </label>
        <label>
          <input type="checkbox" name="amenities" value="Garden" checked={filters.amenities.includes('Garden')} onChange={handleFilterChange} /> Garden
        </label>
        <label>
          <input type="checkbox" name="amenities" value="Gym" checked={filters.amenities.includes('Gym')} onChange={handleFilterChange} /> Gym
        </label>
        <label>
          <input type="checkbox" name="amenities" value="Balcony" checked={filters.amenities.includes('Balcony')} onChange={handleFilterChange} /> Balcony
        </label>
      </div>
      <div className="property-list">
        {filteredProperties.map(property => (
          <Property key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
