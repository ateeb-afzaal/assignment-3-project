import config from '../config';

export async function fetchProducts() {
  try {
    const res = await fetch(`${config.API_URL}/products`);
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
