import getProductCategories from '@/fetchers/getProductCategories';
import getProducts from '@/fetchers/getProducts';
import Home from '@/views/Home';

// ESTO ES CLAVE: Evita que el build falle si la API no está disponible
// o devuelve HTML en lugar de JSON durante el despliegue.
export const dynamic = 'force-dynamic';

const HomePage = async () => {
  // Nota: Si estos fetchers fallan, ahora el error se verá en el navegador
  // y no bloqueará el despliegue en Vercel.
  const products = await getProducts();
  const categories = await getProductCategories();

  return <Home products={products} categories={categories} />;
};

export default HomePage;
