
import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { flameproofProducts } from '../assets/products';

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
        className="bg-cover bg-center py-20 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200')"
        }}
      >
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center text-white text-sm mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:underline">Products</a>
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
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                    Enquire Now
                  </button>
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
          <p className="text-gray-700 leading-relaxed text-lg">
            {product.description} This high-quality flameproof equipment is designed to meet the strictest safety standards for hazardous environments. 
            Built with premium materials and advanced engineering, it ensures reliable operation in Zone 1 & 2 classified areas with protection against various gas groups.
          </p>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Similar Products</h2>
          
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((similarProduct) => (
                <div key={similarProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {similarProduct.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{similarProduct.category}</p>
                    <a
                      href={`/products/details?id=${similarProduct.id}`}
                      className="w-full block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg text-sm text-center transition duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300">
              <FaArrowLeft className="text-gray-600" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300">
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
            <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Download Datasheet
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Company Info Footer */}
      <div className="bg-slate-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/products" className="hover:text-white">Our Products</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Flameproof Lighting</a></li>
                <li><a href="#" className="hover:text-white">Control Systems</a></li>
                <li><a href="#" className="hover:text-white">Safety Devices</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +91-9837-6323</p>
                <p>📧 info@bharatflameproof.com</p>
                <p>📍 Industrial Area, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;