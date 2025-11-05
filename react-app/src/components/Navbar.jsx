import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="font-bold text-lg">Week3 Demo</NavLink>
          <NavLink to="/tasks" className="text-sm text-gray-600 dark:text-gray-300">Tasks</NavLink>
          <NavLink to="/posts" className="text-sm text-gray-600 dark:text-gray-300">Posts</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
