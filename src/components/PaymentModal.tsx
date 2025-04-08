import { ShoppingProduct } from '@/type/products';
import React, { Dispatch, SetStateAction } from 'react';

type PaymentModalType = {
  shoppingProducts: ShoppingProduct[];
  setShoppingProducts: Dispatch<SetStateAction<ShoppingProduct[]>>;
  setIsShoppingModalOpen: Dispatch<SetStateAction<boolean>>;
};

const PaymentModal = ({
  shoppingProducts,
  setShoppingProducts,
  setIsShoppingModalOpen,
}: PaymentModalType) => {
  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div
        className='fixed inset-0 bg-gray-500/75 transition-opacity'
        aria-hidden='true'
      ></div>

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:size-10'>
                  <svg
                    aria-hidden='true'
                    className='w-8 h-8 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3
                    className='text-base font-semibold text-gray-900'
                    id='modal-title'
                  >
                    Payment successful
                  </h3>
                  <div className='mt-2'>
                    {shoppingProducts.map((product) => (
                      <li key={product.id} className='flex py-6'>
                        <div className='ml-4 flex flex-1 flex-col'>
                          <div>
                            <div className='flex justify-between text-base text-gray-900'>
                              <h3>
                                <a
                                  href={`/details/${product.id}`}
                                  target='BLANK'
                                >
                                  {product.title}
                                </a>
                              </h3>
                              <p className='ml-4 font-semibold'>
                                {`$${(product.price * product.quantity).toFixed(
                                  2
                                )}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex justify-between text-base font-medium text-gray-900'>
                <p>Total</p>
                <p>
                  {`$${shoppingProducts
                    .map((product) => product.price * product.quantity)
                    .reduce((accum, quantity) => accum + quantity, 0)
                    .toFixed(2)}`}
                </p>
              </div>
            </div>

            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='button'
                className='inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto cursor-pointer'
                onClick={() => {
                  setIsShoppingModalOpen(false);
                  setShoppingProducts([]);
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
