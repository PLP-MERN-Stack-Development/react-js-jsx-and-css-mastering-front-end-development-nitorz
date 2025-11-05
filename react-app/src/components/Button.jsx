import React from 'react'
import clsx from 'clsx'

export default function Button({ variant='primary', children, className='', ...rest }){
  const base = 'px-4 py-2 rounded-lg font-medium transition transform active:scale-95'
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-500',
  }
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
