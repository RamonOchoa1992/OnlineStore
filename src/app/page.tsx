import getProductCategories from '@/fetchers/getProductCategories';
import getProducts from '@/fetchers/getProducts';
import Home from '@/views/Home';

const HomePage = async () => {
  const products = await getProducts();
  const categories = await getProductCategories();
  return <Home products={products} categories={categories} />;
};

export default HomePage;
