import { Product } from '@/type/products';

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data: Product[] = await response.json();
  return data;
};

export default getProducts;
