import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TasksPage from './pages/Tasks'
import PostsPage from './pages/Posts'

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='tasks' element={<TasksPage />} />
        <Route path='posts' element={<PostsPage />} />
      </Route>
    </Routes>
  )
}
