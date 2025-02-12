import React, { useEffect, useState } from 'react'
import {motion, useAnimation } from 'framer-motion'
import arrowDown from '../assets/icon-arrow-down.svg'
import plus from '../assets/plus.png'
import InvoiceCard from './InvoiceCard'
import { useDispatch, useSelector } from 'react-redux'
import invoiceSlice from '../redux/invoiceSlice'
import CreateInvoice from './CreateInvoice'
import { useLocation } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode'

function Center() {
    const location = useLocation()
    const controls = useAnimation();
    const dispatch = useDispatch()
    const filter = ['paid', 'pending', 'draft']
    const [isDropdown, setIsDropdown] = useState(false)
    const [openCreateInvoice, setOpenCreateInvoice] = useState(false)
    const [filterValue, setfilterValue] = useState('')
    const [colorTheme] = useDarkMode();

    const invoices = useSelector((state) => state.invoices.filteredInvoice)

    useEffect(() => {
        dispatch(invoiceSlice.actions.filterInvoice({ status: filterValue }))
    }, [filterValue, dispatch])

    useEffect(() => {
        controls.start({
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20
            }
        });
    }, [controls]);

    return (
        <div className={colorTheme === "dark" ? "dark" : ""}>
            <div className='dark:bg-[#141625] scrollbar-hide duration-300 min-h-screen bg-[#f8f8fb] py-[34px] px-2 md:px-8 lg:px-12 lg:py-[72px]'>
                <div
                    key={location.pathname}
                    initial={{ x: '0' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-150%' }}
                    transition={{ duration: 0.5 }}
                    className='max-w-3xl flex flex-col mx-auto my-auto'>

                    <div className='min-w-full h-[80px] flex items-center justify-between'>
                        <div>
                            <h1 className='lg:text-4xl md:text-2xl text-xl dark:text-white tracking-wide font-semibold'>Invoices</h1>
                            <p className='text-gray-500 font-light dark:text-gray-400'>There are {invoices.length} total invoices.</p>
                        </div>

                        <div className='flex max-h-full items-center'>
                            <div className='flex items-center'>
                                <p className='hidden md:block dark:text-white font-medium'>Filter by status</p>
                                <p className='md:hidden dark:text-white font-medium'>Filter</p>
                                <div onClick={() => setIsDropdown(!isDropdown)} className='cursor-pointer ml-3'>
                                    <img
                                        src={arrowDown}
                                        animate={isDropdown ? { rotate: -180 } : { rotate: 0 }}
                                        transition={{ stiffness: 200 }}
                                    />
                                </div>
                            </div>
                            {isDropdown && (
                                <div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className='w-40 bg-white dark:bg-[#1E2139] dark:text-white flex px-6 py-4 flex-col absolute shadow-2xl rounded-xl space-y-2'>
                                    {filter.map((item, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setfilterValue(item === filterValue ? '' : item)}
                                            className='cursor-pointer flex space-x-2 items-center'>
                                            <input
                                                type='checkbox'
                                                checked={filterValue === item}
                                                className='accent-[#7c5dfa] hover:accent-[#7c5dfa] dark:bg-gray-800'
                                            />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button onClick={() => setOpenCreateInvoice(true)} className='hover:opacity-80 ml-4 md:ml-10 flex items-center py-2 px-2 md:space-x-3 space-x-2 bg-[#7c5dfa] rounded-full'>
                                <img src={plus} alt='' />
                                <p className='md:block hidden text-white font-semibold text-lg'>New invoice</p>
                                <p className='md:hidden block text-white font-semibold text-base'>New</p>
                            </button>
                        </div>
                    </div>

                    <div className='mt-10 space-y-4'>
                        {invoices.map((invoice, index) => (
                            <div
                                key={invoice.id}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <InvoiceCard invoice={invoice} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {openCreateInvoice && (
                <CreateInvoice openCreateInvoice={openCreateInvoice} setOpenCreateInvoice={setOpenCreateInvoice} />
            )}
        </div>
    )
}

export default Center
