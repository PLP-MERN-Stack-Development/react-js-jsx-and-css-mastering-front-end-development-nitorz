import React, { useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Card from './Card'
import Button from './Button'

export default function TaskManager(){
  const [tasks, setTasks] = useLocalStorage('tasks', [
    { id: 1, text: 'Example task: edit this', done: false },
    { id: 2, text: 'Example completed task', done: true }
  ])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  const add = () => {
    if(!text.trim()) return
    setTasks(prev => [...prev, { id: Date.now(), text: text.trim(), done: false }])
    setText('')
  }

  const toggle = (id) => setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t))
  const remove = (id) => setTasks(prev => prev.filter(t => t.id !== id))

  const filtered = useMemo(() => {
    if(filter === 'active') return tasks.filter(t => !t.done)
    if(filter === 'completed') return tasks.filter(t => t.done)
    return tasks
  }, [tasks, filter])

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input className="flex-1 px-3 py-2 rounded-lg border dark:bg-gray-800" value={text} onChange={e=>setText(e.target.value)} placeholder="Add a task..." />
          <Button onClick={add}>Add</Button>
        </div>

        <div className="flex gap-2">
          <Button variant={filter==='all'?'primary':'secondary'} onClick={()=>setFilter('all')}>All</Button>
          <Button variant={filter==='active'?'primary':'secondary'} onClick={()=>setFilter('active')}>Active</Button>
          <Button variant={filter==='completed'?'primary':'secondary'} onClick={()=>setFilter('completed')}>Completed</Button>
        </div>

        <ul className="space-y-2">
          {filtered.map(t => (
            <li key={t.id} className={`flex justify-between items-center p-2 rounded-md border dark:border-gray-700`}>

              <div className="flex items-center gap-3">
                <input type="checkbox" checked={t.done} onChange={()=>toggle(t.id)} />
                <span className={t.done ? 'line-through text-gray-500' : ''}>{t.text}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="danger" onClick={()=>remove(t.id)}>Delete</Button>
              </div>
            </li>
          ))}
          {filtered.length === 0 && <li className="text-sm text-gray-500">No tasks.</li>}
        </ul>
      </div>
    </Card>
  )
}
