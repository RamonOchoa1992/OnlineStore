const getProductCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(
      'https://fakestoreapi.com/products/categories',
      {
        cache: 'no-store',
        headers: { Accept: 'application/json' },
      },
    );

    const contentType = response.headers.get('content-type');
    if (!response.ok || !contentType?.includes('application/json')) {
      console.error('Error en categorías: La API no devolvió JSON');
      return []; // Retorna array vacío si falla
    }

    return await response.json();
  } catch (error) {
    console.error('Error cargando categorías:', error);
    return [];
  }
};

export default getProductCategories;
