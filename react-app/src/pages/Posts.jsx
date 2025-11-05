import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

function PostCard({ post }){
  return (
    <div className="p-3 border rounded-md dark:border-gray-700">
      <h3 className="font-semibold">{post.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{post.body}</p>
    </div>
  )
}

export default function PostsPage(){
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(r => r.json())
      .then(data => { setPosts(p => page===1 ? data : [...p, ...data]); setLoading(false) })
      .catch(e => { setError('Failed to load'); setLoading(false) })
  }, [page])

  const filtered = posts.filter(p => p.title.includes(query) || p.body.includes(query))

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search posts..." className="flex-1 px-3 py-2 rounded-lg border dark:bg-gray-800" />
        <button onClick={()=>setPage(1)} className="px-3 py-2 rounded-lg border">Refresh</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(p => <PostCard key={p.id} post={p} />)}
      </div>

      {loading && <div className="text-sm">Loading...</div>}
      {error && <div className="text-sm text-red-500">{error}</div>}

      <div className="flex items-center justify-center mt-4 gap-2">
        <button onClick={()=>setPage(prev=>Math.max(1, prev-1))} className="px-3 py-2 border rounded">Prev</button>
        <span>Page {page}</span>
        <button onClick={()=>setPage(prev=>prev+1)} className="px-3 py-2 border rounded">Next</button>
      </div>
    </div>
  )
}
