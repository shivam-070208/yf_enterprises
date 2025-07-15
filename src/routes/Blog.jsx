import React, { Suspense, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Allblogs } from '../assets'
import { motion } from 'motion/react'
const Blogs = React.lazy(()=>import('../Components/Blogs'))

const Blog = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [showCategories, setShowCategories] = useState(false);
  // Get unique categories
  const categories = ['All', ...new Set(Allblogs.map(blog => blog.category))];

  // Get latest 3 blogs
  const latestBlogs = Allblogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

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
      <section className='w-full max-w-7xl mx-auto px-4 py-9 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <Suspense fallback={null}>
          <Blogs search={search} selectedCategory={selectedCategory} />
        </Suspense>
        <div className='lg:col-span-1 space-y-6 order-first lg:order-last'>
          {/* Search Bar */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4 text-blue-950'>Search Blogs</h3>
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
         
          {/* Category Filter */}
          <div className='bg-white p-6 h-fit  rounded-lg shadow-md'>
            <h3 onClick={()=>setShowCategories(!showCategories)} className='text-xl cursor-pointer  font-bold mb-4 text-blue-950'>Filter</h3>
           {showCategories&& <div className='space-y-2 space-x-2'>
              {categories.map((category, idx) => (
                <motion.button layoutId={category+idx} initial={{height:0,opacity:0,filter:'blur(100px)'}} exit={{height:0,opacity:0,filter:'blur(100px)'}} animate={{height:'fit-content',opacity:1,filter:'blur(0)'}} transition={{delay:0.002*idx,duration:0.7}}
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-fit text-left p-2 cursor-pointer overflow-hidden rounded transition-colors ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>}
          </div>

          {/* Latest Blogs */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4 text-blue-950'>Latest Blogs</h3>
            <div className='space-y-4'>
              {latestBlogs.map((blog, index) => {
                const originalIndex = Allblogs.findIndex(b => b.title === blog.title);
                return (
                  <div 
                    key={index} 
                    className='flex gap-3 p-3 border border-gray-200 rounded hover:bg-gray-50 hover:shadow-md transition-all cursor-pointer'
                    onClick={() => navigate(`/blog/show?id=${originalIndex}`)}
                  >
                    <img 
                      src={blog.coverImage} 
                      alt={blog.title}
                      className='w-16 h-16 object-cover rounded'
                    />
                    <div className='flex-1'>
                      <h4 className='font-semibold text-sm text-blue-950 line-clamp-2 hover:text-blue-700 transition-colors'>{blog.title}</h4>
                      <p className='text-xs text-gray-500 mt-1'>{new Date(blog.date).toLocaleDateString()}</p>
                      <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mt-1 inline-block'>
                        {blog.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
