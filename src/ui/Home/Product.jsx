import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaArrowRight } from 'react-icons/fa';

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
  }
];

const ProductCarousel = () => {
  return (
    <section className="bg-[#efefefb1] py-16">
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <div className=" rounded-xl  relative py-24  flex flex-col items-center bg-transparent text-center transition ">
                <img src={product.image} alt={product.name} className="w-40 h-40 shadow-md absolute -translate-y-1/2  rounded-full object-cover " />
               <div className='bg-white p-10 flex flex-col items-center rounded pt-29 pb-9 rounded-2 flex-1 w-full'>
                <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
                <div className="mb-2">
                  {product.originalPrice && (
                    <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                  )}
                  <span className="text-black font-bold">{product.price}</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: product.rating }).map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 text-white font-semibold rounded-full flex items-center gap-2">
                  BUY NOW <FaArrowRight />
                </button>
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
