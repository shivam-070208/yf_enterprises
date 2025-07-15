import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
const Blogs = React.lazy(()=>import('../Components/Blogs'))

const Blog = () => {
 
  const [search, setSearch] = React.useState('');

  return (
    <div className='mb-10'>
      <section className="bg-cover bg-center py-30 " style={{ backgroundImage: "url('https://html.themexriver.com/industo/images/background/9.jpg')" }}>
        <div className="container mx-auto px-4">
          <ul className="flex gap-2 text-white text-sm">
            <li><Link to="/" className="underline">Home</Link></li>
            <li>/ Blog</li>
          </ul>
          <h2 className="text-4xl font-bold text-white mt-2">What We Do</h2>
        </div>
      </section>
      <section className='w-screen relative h-[190vh] overflow-scroll  pr-40 lg:pl-43 pt-9 gap-5 grid grid-cols-1 lg:grid-cols-3'>
        <Suspense fallback={null}>
          <Blogs search={search} />
        </Suspense>
        <div className='h-full w-full sticky top-1/2 right-0  p-6 flex flex-col gap-4'>
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="p-2 rounded border border-gray-300"
          />
         
        </div>
      </section>
    </div>
  )
}

export default Blog
