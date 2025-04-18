import { Product, ShoppingProduct } from '@/type/products';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type ProductCardType = {
  product: Product;
  shoppingProducts: ShoppingProduct[];
  setShoppingProducts: Dispatch<SetStateAction<ShoppingProduct[]>>;
};

const ProductCard = ({
  product,
  shoppingProducts,
  setShoppingProducts,
}: ProductCardType) => (
  <div className='size-100 rounded overflow-hidden shadow-lg grid justify-items-center hover:bg-gray-100 cursor-auto'>
    <Link className='grid justify-items-center' href={`/details/${product.id}`}>
      <img className='size-40 m-2 cursor-pointer' src={product.image} />
      <div className='px-6 py-4'>
        <div className='font-bold text-md mb-2'>{product.title}</div>
      </div>
    </Link>
    <div className='px-6 pt-4 pb-2'>
      <span className='inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-auto'>
        {`$${product.price}`}
      </span>
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer'
        onClick={() => {
          setShoppingProducts(
            shoppingProducts.filter(
              (shoppingProduct) => shoppingProduct.id === product.id
            ).length === 0
              ? [
                  ...shoppingProducts,
                  {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  },
                ]
              : shoppingProducts.map((shoppingProduct) => ({
                  ...shoppingProduct,
                  quantity:
                    shoppingProduct.id === product.id
                      ? shoppingProduct.quantity + 1
                      : shoppingProduct.quantity,
                }))
          );
        }}
      >
        <svg
          className='w-3.5 h-3.5 me-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 18 21'
        >
          <path d='M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z' />
        </svg>
        Buy now
      </button>
    </div>
  </div>
);

export default ProductCard;
