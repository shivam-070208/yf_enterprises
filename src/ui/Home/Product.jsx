import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Flameproof Junction Box',
    price: '$150.00',
    originalPrice: '$180.00',
    rating: 5,
    image: 'https://fcghitech.com/wp-content/uploads/2021/10/IJ-61100.jpg',
  },
  {
    name: 'Flameproof Control Panel',
    price: '$450.00',
    originalPrice: '$500.00',
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjJJtrKBUnTPsimw_5iR49KNOVrpGrtnwTA&s',
  },
  {
    name: 'Flameproof Motor Starter',
    price: '$320.00',
    originalPrice: '$380.00',
    rating: 5,
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/HW/YA/GL/24596939/flame-proof-motor-starter-500x500.jpg',
  },
  {
    name: 'Flameproof Emergency Stop',
    price: '$65.00',
    originalPrice: '$80.00',
    rating: 5,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/NL/IB/NQ/195998/flameproof-push-button-stations-250x250.webp',
  },
 
  {
    name: 'Flameproof Motor Starter',
    price: '$320.00',
    originalPrice: '$380.00',
    rating: 5,
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/HW/YA/GL/24596939/flame-proof-motor-starter-500x500.jpg',
  }
];

const ProductCarousel = () => {
  return (
    <section className="bg-[#efefef9f] py-16">
      <div className="text-center mb-12">
          <div className="text-orange-600 inline-block font-bold uppercase relative beforetext md:before:content-['Products'] mb-10">Populat Products</div>
        <h2 className="text-4xl font-bold">We have the best quality <br /> industrial products.</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[ Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <div className=" rounded-xl  relative py-24 group   flex flex-col items-center bg-transparent text-center transition ">

                
                <img src={product.image} alt={product.name} className="w-50 h-50 z-1 shadow-md absolute -translate-y-1/2  rounded-full object-cover " />
               <div className='bg-white relative max-w-70  p-4 flex flex-col items-center  pt-40 pb-18 rounded-lg flex-1 w-full'>
                <h4 className="text-2xl font-bold  mb-1 w-60">{product.name}</h4>
                <hr className='text-neutral-300 h-4 w-full' />
               <div className='w-full flex justify-between items-center mb-4 flex-wrap'>

                <div className="">
                  {product.originalPrice && (
                    <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                  )}
                  <span className="text-black font-bold">{product.price}</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-yellow-400 ">
                  {Array.from({ length: product.rating }).map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
                  </div>
                <Link href='/products'  className="bg-orange-500 absolute -bottom-4  hover:cursor-pointer hover:bg-orange-600 transition px-8 py-4 text-white font-bold rounded text-md   flex items-center gap-2">

                  BUY NOW <span >&gt;</span>
                </Link >
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
