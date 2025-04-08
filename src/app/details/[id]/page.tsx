import getProductsById from '@/fetchers/getProductById';
import Details from '@/views/Details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tiendas Ramon | Details',
};

type Params = Promise<{ id: string }>;

const DetailsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const productById = await getProductsById(id);
  return <Details product={productById} />;
};

export default DetailsPage;
