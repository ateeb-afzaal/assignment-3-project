import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">View</Link>
    </div>
  );
};

export default ProductCard;
