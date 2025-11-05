import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-8 border-t dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Week 3 React + Tailwind Demo — Built for your assignment.
      </div>
    </footer>
  )
}
