'use client';

import CategorySelector from '@/components/CategorySelector';
import ProductCard from '@/components/ProductCard';
import ShoppingCard from '@/components/ShoppingCard';
import { Product, ShoppingProduct } from '@/type/products';
import { useState } from 'react';

type HomeType = {
  products: Product[];
  categories: string[];
};

const Home = ({ products, categories }: HomeType) => {
  const [categoryValue, setCategoryValue] = useState('');
  const [isShoppingModalOpen, setIsShoppingModalOpen] = useState(false);
  const [shoppingProducts, setShoppingProducts] = useState<ShoppingProduct[]>(
    []
  );
  return (
    <>
      <header className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal grid grid-cols-2 justify-items-center'>
        <CategorySelector
          categories={categories}
          setCategoryValue={setCategoryValue}
        />
        <div
          className='relative py-2 cursor-pointer'
          onClick={() => setIsShoppingModalOpen(true)}
        >
          <div className='t-0 absolute left-3'>
            <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
              {shoppingProducts
                .map((product) => product.quantity)
                .reduce((accum, quantity) => accum + quantity, 0)}
            </p>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='file: mt-4 h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
        </div>
        {isShoppingModalOpen && (
          <ShoppingCard
            setIsShoppingModalOpen={setIsShoppingModalOpen}
            shoppingProducts={shoppingProducts}
            setShoppingProducts={setShoppingProducts}
          />
        )}
      </header>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center d-12'>
        {categoryValue
          ? products
              .filter(({ category }) => category === categoryValue)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  shoppingProducts={shoppingProducts}
                  setShoppingProducts={setShoppingProducts}
                />
              ))
          : products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                shoppingProducts={shoppingProducts}
                setShoppingProducts={setShoppingProducts}
              />
            ))}
      </div>
    </>
  );
};

export default Home;
