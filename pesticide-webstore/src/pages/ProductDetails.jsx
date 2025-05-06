import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return <div className="p-4">Details for product ID: {id}</div>;
};

export default ProductDetails;
