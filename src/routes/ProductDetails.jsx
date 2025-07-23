
import React, { useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { flameproofProducts } from '../assets/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductDetails = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  // Try to get product id from URL query param or navigation state
  let productId = null;
  if (searchParams.get('id')) {
    productId = parseInt(searchParams.get('id'), 10);
  } else if (location.state && location.state.id) {
    productId = location.state.id;
  }

  // Find the product by id
  const product = flameproofProducts.find((p) => p.id === productId) || flameproofProducts[0];

  // Find similar products (same category, not the current one)
  const similarProducts = flameproofProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Background */}
      <section 
        className="bg-cover bg-center py-25 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://html.themexriver.com/industo/images/gallery/1.jpg')"
        }}
      >
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center text-white text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-orange-400">Product Details</span>
          </nav>
          
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {product.name}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Product Details Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Product Information Panel */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-slate-800 text-white p-4">
                <h2 className="text-lg font-semibold text-center">Product Information</h2>
              </div>
              
              {/* Specifications List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {product.specifications &&
                    Object.entries(product.specifications).map(([key, value]) => (
                      <li key={key} className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                        </span>
                      </li>
                    ))}
                </ul>

                {/* Enquire Button */}
                <div className="mt-8">
                  <a href='/contact' className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg">

                    Enquire Now
                  </a>
                </div>

                {/* Rating */}
                <div className="mt-4 text-center">
                  <div className="flex justify-center items-center gap-1 text-yellow-400 mb-2">
                    {Array.from({ length: product.rating }).map((_, j) => (
                      <FaStar key={j} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Customer Rating: {product.rating}/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Product Description</h3>
          <p className="text-gray-700 font-semibold leading-relaxed text-lg">
            {product.description} This high-quality flameproof equipment is designed to meet the strictest safety standards for hazardous environments. 
            Built with premium materials and advanced engineering, it ensures reliable operation in Zone 1 & 2 classified areas with protection against various gas groups.
          </p>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Similar Products</h2>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.similar-next',
                prevEl: '.similar-prev',
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="w-full"
              style={{ paddingBottom: '3rem' }}
            >
              {similarProducts.map((similarProduct, i) => (
                <SwiperSlide key={similarProduct.id}>
                  <div
                    className="rounded-xl group relative py-24 flex flex-col items-center text-center transition"
                  >
                    {/* 🟠 Product Image on Top */}
                    <div className='w-40 h-45 group-hover:opacity-100 origin-center scale-0 group-hover:scale-100 opacity-0 transition-all duration-400 absolute  -translate-y-1/2 rounded-full bg-orange-500' />
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="productimg shadow-lg  w-40 h-40  absolute -translate-y-1/2 rounded-full object-cover z-50"
                    />
                    {/* 🔶 Animated Card */}
                    <div className=" bg-white h-fit p-6 flex flex-col items-center rounded pt-28 pb-6 flex-1 w-full relative z-10">
                        <div className='absolute origin-center rounded-lg opacity-0 group-hover:opacity-100  w-full scale-x-0 group-hover:scale-x-100 duration-400 transition-all h-full bg-black top-0 -z-1' />
                      <h4 className="text-lg font-semibold mb-2 z-20 group-hover:text-white">{similarProduct.name}</h4>
                      <div className="text-xs text-orange-600 font-medium mb-2 z-20">
                        {similarProduct.category}
                      </div>
                      <div className="mb-2 z-20">
                        {!isNaN(similarProduct.originalPrice) && (
                          <span className="line-through text-gray-400 mr-2">
                            {similarProduct.originalPrice}
                          </span>
                        )}
                        <span className="text-black font-bold group-hover:text-white">{similarProduct.price}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3 z-20">
                        {Array.from({ length: similarProduct.rating }).map((_, j) => (
                          <FaStar key={j} />
                        ))}
                      </div>
                      <p className="text-gray-600 group-hover:text-white text-sm mb-4 leading-relaxed z-20">
                        {similarProduct.description}
                      </p>
                      <div className="text-xs text-gray-500 group-hover:text-white mb-4 z-20">
                        <div className="flex justify-between mb-1">
                          <span>Material:</span>
                          <span>{similarProduct.specifications.material}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 z-20">
                        <Link
                          to="/contact#contact"
                          className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer transition px-4 py-2 text-white font-semibold rounded-full flex items-center gap-2 text-sm relative z-20"
                        >
                          INQUIRY <FaArrowRight size={10} />
                        </Link>
                        <Link
                          to={`/products/details?id=${similarProduct.id}`}
                          className="bg-gray-200 hover:cursor-pointer hover:bg-gray-300 transition px-4 py-2 text-gray-700 font-semibold rounded-full text-sm"
                        >
                          Details
                        </Link>
                      </div>
                      {similarProduct.inStock && (
                        <div className="mt-2 text-xs text-green-600 font-medium z-20">
                          ✓ In Stock
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Navigation Arrows */}
            <button className="similar-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 z-10">
              <FaArrowLeft className="text-gray-600" />
            </button>
            <button className="similar-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 z-10">
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Technical Specifications?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get detailed technical documentation and custom quotes for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/Y F ENTERPRISES SERVICES.pdf' className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Download Brochure 
            </a>
            <a href='/contact' className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Request Quote
            </a>
          </div>
        </div>
      </div>



    </div>
  );
};

export default ProductDetails;