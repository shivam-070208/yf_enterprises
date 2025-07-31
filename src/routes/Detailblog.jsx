import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Allblogs } from '../assets'
import parse from 'html-react-parser'
const Detailblog = () => {
    const [blogdetail,setblogdetail] = useState(null)
    useEffect(()=>{
        const param = new URLSearchParams(window.location.search);
       setblogdetail(Allblogs[param.get('id')])
       
    },[])
  return (
    <div className='w-screen'>
      <section className="bg-cover bg-center py-30" style={{ backgroundImage: "url('https://html.themexriver.com/industo/images/background/9.jpg')" }}>
        <div className="container mx-auto px-4">
          <ul className="flex gap-2 text-white text-sm">
            <li><Link to="/" className="underline">Home</Link>/</li>
            <li> <Link to="/blog" className="underline">Blog</Link>/</li>
             <li> {blogdetail?.title}</li>
          </ul>
          <h2 className="text-4xl font-bold text-white mt-2">What We Do</h2>
        </div>
      </section>
     {!!blogdetail && <div className='w-full px-4 mt-10 mb-10 max-w-5xl border py-4 border-neutral-200 mx-auto relative'>
      {/* Close Button at the top left, square with rounded corners */}
      <Link to="/blog" className="absolute top-5 left-5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg w-12 h-12 flex items-center justify-center shadow-lg z-20 text-3xl font-bold transition-all duration-200" title="Close">
        &times;
      </Link>
      <img src={blogdetail.coverImage} className='w-full h-[30vw] min-h-60 object-object-fit-fill' />
      <h1 className='w-full text-2xl mt-6 tracking-tighter md:text-4xl text-blue-950 font-semibold font-sans'>{blogdetail.title}</h1>
      <div className='blog-content'>{parse(blogdetail.content)}</div>
      </div>}
    </div>
  )
}

export default Detailblog
