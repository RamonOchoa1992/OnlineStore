import { Product } from '@/type/products';

const getProductsById = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data: Product = await response.json();
  return data;
};

export default getProductsById;
