import React from 'react'
import parse from 'html-react-parser'
import Button from '../Button'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'


const Blogcard = ({ item,index }) => {
    const navigate = useNavigate()
    return (
        <motion.div layoutId={item.title+index} className="w-full max-w-xl mx-auto bg-white   border border-neutral-200 overflow-hidden transition-shadow  cursor-pointer">
            <div className="overflow-hidden h-64">
                <img
                    src={"https://html.themexriver.com/industo/images/resource/news-15.jpg"}
                    alt={item.title}
                    className="w-full h-full object-cover hover:saturate-200 transform hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="px-6  py-6 space-y-4 ">
                <hr className="border-neutral-200" />
                <h1 className="font-extrabold text-2xl w-full text-blue-950 max-w-full line-clamp-2 tracking-tight">
                    {item.title}
                </h1>
                <p className=" text-lg text-neutral-500   max-w-full line-clamp-4">
                    {parse(item.content.replaceAll(/<[^>]+>/g, ''))}
                </p>
                <div className='text-center'>

                <div className='inline-block m-auto mt-7' onClick={()=>navigate(`/blog/show?id=${index}`)}>

                  <Button text={"Read More"} primarycolor={"bg-blue-600"} secondarycolor={"bg-orange-500"} />
                </div>
                </div>
             
            </div>
        </motion.div>
    )
}

export default Blogcard
