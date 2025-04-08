'use client';

import { Dispatch, SetStateAction } from 'react';

type CategorySelectorType = {
  categories: string[];
  setCategoryValue: Dispatch<SetStateAction<string>>;
};

const CategorySelector = ({
  categories,
  setCategoryValue,
}: CategorySelectorType) => {
  return (
    <form className='max-w-sm mx-auto'>
      <label
        htmlFor='categories'
        className='block text-sm font-medium text-gray-900 dark:text-white'
      >
        Select an option
      </label>
      <select
        id='categories'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={(event) => setCategoryValue(event.target.value)}
      >
        <option value=''>Choose a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CategorySelector;
