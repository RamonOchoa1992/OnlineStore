const getProductCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data: string[] = await response.json();
  return data;
};

export default getProductCategories;
