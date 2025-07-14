import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
         <section className="bg-cover bg-center py-30" style={{ backgroundImage: "url('https://html.themexriver.com/industo/images/background/9.jpg')" }}>
        <div className="container mx-auto px-4">
          <ul className="flex gap-2 text-white text-sm">
            <li><Link to="/" className="underline">Home</Link></li>
            <li>/ Blog</li>
          </ul>
          <h2 className="text-4xl font-bold text-white mt-2">What We Do</h2>
        </div>
        
      </section>
      <section className='w-screen min-h-screen px-9 lg:pl-44 pr-9 gap-8 grid grid-cols-1 lg:grid-cols-3'>
        <div className='flex flex-col lg:col-span-2 h-full  overflow-auto'>

        </div>
        <div className=' '>

        </div>
      </section>
    </div>
  )
}

export default Blog
