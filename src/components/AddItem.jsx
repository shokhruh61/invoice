import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import { TrashIcon } from '@heroicons/react/24/solid'
import {
  validateItemCount,
  validateItemName,
  validateItemPrice
} from '../functions/createInvoiceValidator'
import useInvoiceStore from '../store/useInvoiceStore'

function AddItem ({ itemDetails }) {
  const [colorTheme] = useDarkMode() // Dark mode
  const { updateItem, deleteItem } = useInvoiceStore()

  // Input o'zgarishini boshqarish
  const handleChange = e => {
    const { name, value } = e.target
    updateItem(itemDetails.id, { [name]: value })
  }

  return (
    <div className={colorTheme === 'dark' ? 'dark' : ''}>
      <div className='flex dark:text-white justify-between items-center'>
        <div className='flex flex-wrap'>
          <div className='flex px-2 py-2 flex-col items-start'>
            <h1>Item Name</h1>
            <input
              name='name'
              onChange={handleChange}
              value={itemDetails.name}
              type='text'
              className={`dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg focus:outline-purple-400 border-gray-300 focus:outline-none 
                            ${
                              !validateItemName(itemDetails.name)
                                ? 'border-red-500 dark:border-red-500 outline-red-500 border-2'
                                : ''
                            } 
                            dark:border-gray-800`}
            />
          </div>

          <div className='flex px-2 py-2 flex-col items-start'>
            <h1>Qty.</h1>
            <input
              name='quantity'
              type='number'
              onChange={handleChange}
              value={itemDetails.quantity}
              min={0}
              className={`dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg focus:outline-purple-400 max-w-[60px] border-gray-300 focus:outline-none 
                            ${
                              !validateItemCount(itemDetails.quantity)
                                ? 'border-red-500 dark:border-red-500 outline-red-500 border-2'
                                : ''
                            } 
                            dark:border-gray-800`}
            />
          </div>

          <div className='flex px-2 py-2 flex-col items-start'>
            <h1>Price</h1>
            <input
              name='price'
              type='number'
              onChange={handleChange}
              value={itemDetails.price}
              min={0}
              className={`dark:bg-[#1e2139] py-2 max-w-[100px] px-4 border-[.2px] rounded-lg focus:outline-purple-400 border-gray-300 focus:outline-none 
                            ${
                              !validateItemPrice(itemDetails.price)
                                ? 'border-red-500 dark:border-red-500 outline-red-500 border-2'
                                : ''
                            } 
                            dark:border-gray-800`}
            />
          </div>

          <div className='flex px-2 py-2 flex-col items-start'>
            <h1>Total</h1>
            <div className='max-w-[100px] dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg focus:outline-none focus:outline-purple-400 border-gray-300 dark:border-gray-800 dark:text-white'>
              {itemDetails.quantity * itemDetails.price}
            </div>
          </div>
        </div>
        <button onClick={() => deleteItem(itemDetails.id)}>
          <TrashIcon className='text-gray-500 hover:text-red-500 cursor-pointer mt-4 h-6 w-6' />
        </button>
      </div>
    </div>
  )
}

export default AddItem
