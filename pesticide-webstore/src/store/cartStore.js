import { useState } from 'react';

const useCart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => setItems([...items, product]);

  return { items, addToCart };
};

export default useCart;
