import { Product } from '@/type/products';

const getProductsById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    });

    const contentType = response.headers.get('content-type');
    if (!response.ok || !contentType?.includes('application/json')) {
      console.error(`Error en producto ${id}: No se recibió JSON`);
      return null; // Retorna null si falla
    }

    return await response.json();
  } catch (error) {
    console.error(`Error cargando producto ${id}:`, error);
    return null;
  }
};

export default getProductsById;
