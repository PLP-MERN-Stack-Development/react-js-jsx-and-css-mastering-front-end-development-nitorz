import React from 'react'

export default function Card({ children, className='' }){
  return (
    <div className={'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 shadow-sm '+className}>
      {children}
    </div>
  )
}
