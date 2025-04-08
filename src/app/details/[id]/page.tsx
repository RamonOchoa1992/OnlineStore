import getProductsById from '@/fetchers/getProductById';
import Details from '@/views/Details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tiendas Ramon | Details',
};

const DetailsPage = async ({ params }: { params: { id: string } }) => {
  const productById = await getProductsById(params.id);
  return <Details product={productById} />;
};

export default DetailsPage;
