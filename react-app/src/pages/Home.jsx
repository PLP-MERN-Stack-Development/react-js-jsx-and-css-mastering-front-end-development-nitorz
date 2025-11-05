import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-2xl font-bold">Week 3 — React + Tailwind Demo</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">This demo includes a Task Manager, Posts list (API), theme switcher, and reusable components.</p>
        <div className="mt-4 flex gap-2">
          <Link to="/tasks" className="underline">Go to Tasks</Link>
          <Link to="/posts" className="underline">View Posts (API)</Link>
        </div>
      </Card>
    </div>
  )
}
