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
    rating: 5,
    image: 'https://fcghitech.com/wp-content/uploads/2021/10/IJ-61100.jpg',
  },
  {
    name: 'Flameproof Control Panel',
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjJJtrKBUnTPsimw_5iR49KNOVrpGrtnwTA&s',
  },
  {
    name: 'Flameproof Motor Starter',

    rating: 5,
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/HW/YA/GL/24596939/flame-proof-motor-starter-500x500.jpg',
  },
  {
    name: 'Flameproof Emergency Stop',

    rating: 5,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/NL/IB/NQ/195998/flameproof-push-button-stations-250x250.webp',
  },
 
  {
    name: 'Flameproof Motor Starter',
    rating: 5,
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/HW/YA/GL/24596939/flame-proof-motor-starter-500x500.jpg',
  }
];

const ProductCarousel = () => {
  return (
    <section className="bg-[#efefef9f] py-16">
      <div className="text-center mb-12">
        <div className="text-orange-600 inline-block font-bold uppercase relative beforetext md:before:content-['Products'] mb-10">Popular Products</div>
        <h2 className="text-4xl font-bold">We offer the highest quality <br /> industrial products.</h2>
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
              <div className="bg-white rounded-xl shadow-lg flex flex-col items-center text-center transition hover:shadow-2xl p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-36 h-36 object-cover rounded-lg mb-4 border-4 border-orange-100 shadow"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h4>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                  {Array.from({ length: product.rating }).map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
                <Link
                  to="/products"
                  className="mt-4 bg-orange-500 hover:bg-orange-600 transition px-6 py-2 text-white font-semibold rounded-full flex items-center gap-2 text-sm"
                >
                  ENQUIRE NOW <span>&gt;</span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
