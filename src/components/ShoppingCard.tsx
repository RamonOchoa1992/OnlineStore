import { ShoppingProduct } from '@/type/products';
import { Dispatch, SetStateAction, useState } from 'react';
import PaymentModal from './PaymentModal';

type ShoppingCard = {
  setIsShoppingModalOpen: Dispatch<SetStateAction<boolean>>;
  shoppingProducts: ShoppingProduct[];
  setShoppingProducts: Dispatch<SetStateAction<ShoppingProduct[]>>;
};

const ShoppingCard = ({
  setIsShoppingModalOpen,
  shoppingProducts,
  setShoppingProducts,
}: ShoppingCard) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  return (
    <div
      className='relative z-10'
      aria-labelledby='slide-over-title'
      role='dialog'
      aria-modal='true'
    >
      <div
        className='fixed inset-0 bg-gray-500/75 transition-opacity'
        aria-hidden='true'
      ></div>

      <div className='fixed inset-0 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
            <div className='pointer-events-auto w-screen max-w-md'>
              <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                  <div className='flex items-start justify-between'>
                    <h2
                      className='text-lg font-medium text-gray-900'
                      id='slide-over-title'
                    >
                      Shopping car
                    </h2>
                    <div className='ml-3 flex h-7 items-center'>
                      <button
                        type='button'
                        className='relative -m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer'
                        onClick={() => setIsShoppingModalOpen(false)}
                      >
                        <span className='absolute -inset-0.5'></span>
                        <span className='sr-only'>Close panel</span>
                        <svg
                          className='size-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18 18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className='mt-8'>
                    <div className='flow-root'>
                      <ul
                        role='list'
                        className='-my-6 divide-y divide-gray-200'
                      >
                        {shoppingProducts.map((product) => (
                          <li key={product.id} className='flex py-6'>
                            <div className='size-24 shrink-0 overflow-hidden rounded-md border border-gray-200'>
                              <img src={product.image} />
                            </div>

                            <div className='ml-4 flex flex-1 flex-col'>
                              <div>
                                <div className='flex justify-between text-base font-medium text-gray-900'>
                                  <h3>
                                    <a
                                      href={`/details/${product.id}`}
                                      target='BLANK'
                                    >
                                      {product.title}
                                    </a>
                                  </h3>
                                  <p className='ml-4'>
                                    {`$${(
                                      product.price * product.quantity
                                    ).toFixed(2)}`}
                                  </p>
                                </div>
                              </div>
                              <div className='flex flex-1 items-end justify-between text-sm'>
                                <span className='text-gray-500'>
                                  Qty
                                  <input
                                    type='number'
                                    value={product.quantity}
                                    className='text-gray-500 w-10 ml-2'
                                    onChange={(event) => {
                                      if (+event.target.value === 0) {
                                        setShoppingProducts(
                                          shoppingProducts.filter(
                                            (shopping) =>
                                              shopping.id !== product.id
                                          )
                                        );
                                      } else {
                                        setShoppingProducts(
                                          shoppingProducts.map((shopping) => ({
                                            ...shopping,
                                            quantity:
                                              shopping.id === product.id
                                                ? +event.target.value
                                                : shopping.quantity,
                                          }))
                                        );
                                      }
                                    }}
                                  />
                                </span>
                                <div className='flex'>
                                  <button
                                    type='button'
                                    className='font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer'
                                    onClick={() => {
                                      if (product.quantity === 1) {
                                        setShoppingProducts(
                                          shoppingProducts.filter(
                                            (shopping) =>
                                              shopping.id !== product.id
                                          )
                                        );
                                      } else {
                                        setShoppingProducts(
                                          shoppingProducts.map((shopping) => ({
                                            ...shopping,
                                            quantity:
                                              shopping.id === product.id
                                                ? shopping.quantity - 1
                                                : shopping.quantity,
                                          }))
                                        );
                                      }
                                    }}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                  <div className='flex justify-between text-base font-medium text-gray-900'>
                    <p>Total</p>
                    <p>
                      {`$${shoppingProducts
                        .map((product) => product.price * product.quantity)
                        .reduce((accum, quantity) => accum + quantity, 0)
                        .toFixed(2)}`}
                    </p>
                  </div>
                  <div className='mt-6 flex justify-center'>
                    <button
                      className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 cursor-pointer'
                      onClick={() => {
                        setIsPaymentModalOpen(true);
                      }}
                      disabled={shoppingProducts.length === 0}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPaymentModalOpen && (
        <PaymentModal
          shoppingProducts={shoppingProducts}
          setShoppingProducts={setShoppingProducts}
          setIsShoppingModalOpen={setIsShoppingModalOpen}
        />
      )}
    </div>
  );
};

export default ShoppingCard;
