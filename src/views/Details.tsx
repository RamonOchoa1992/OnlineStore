'use client';

import { Product } from '@/type/products';
type DetailsType = {
  product: Product;
};

const Details = ({ product }: DetailsType) => {
  return (
    <div className='lg:h-100 lg:w-350 lg:flex m-12'>
      <div
        className='h-100 lg:h-100 lg:w-90 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
        style={{ backgroundImage: `url('${product.image}')` }}
      ></div>
      <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <p className='text-sm text-gray-600 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6 cursor-pointer text-blue-gray-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
              ></path>
            </svg>
            {`Rating: ${product.rating.rate}`}
          </p>
          <div className='text-gray-900 font-bold text-xl mb-2 mt-4'>
            {product.title}
          </div>
          <p className='text-gray-700 text-base italic mb-2'>
            {product.category}
          </p>
          <p className='text-gray-700 text-base'>{product.description}</p>
        </div>
        <div>
          <span className='inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-auto'>
            {`$${product.price}`}
          </span>
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer'
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
    </div>
  );
};

export default Details;
