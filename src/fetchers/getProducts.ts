import { Product } from '@/type/products';

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      // Forzamos a que no use caché antigua para evitar respuestas corruptas
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0', // Algunos servidores bloquean peticiones si no ven un User-Agent
      },
    });

    // Verificamos si la respuesta es realmente JSON antes de parsear
    const contentType = response.headers.get('content-type');
    if (
      !response.ok ||
      !contentType ||
      !contentType.includes('application/json')
    ) {
      console.error('La API no devolvió JSON. Status:', response.status);
      return []; // Devolvemos un array vacío para que la web no explote
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error en getProducts:', error);
    return []; // Si hay un error de red, devolvemos array vacío
  }
};

export default getProducts;
