import React, { useState } from 'react';
import { flameproofProducts, productCategories, getProductsByCategory, searchProducts } from '../assets/products';
import { FaStar, FaSearch, FaFilter, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(flameproofProducts);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const products = getProductsByCategory(category);
    setFilteredProducts(products);
    setSearchTerm('');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredProducts(getProductsByCategory(selectedCategory));
    } else {
      const products = searchProducts(term);
      setFilteredProducts(products);
    }
  };

  return (
    <div className="page-wrapper">
      {/* Page Title */}
      <section className="bg-cover bg-center py-30" style={{ backgroundImage: "url('https://html.themexriver.com/industo/images/background/9.jpg')" }}>
        <div className="container mx-auto px-4">
          <ul className="flex gap-2 text-white text-sm">
            <li><Link to="/" className="underline">Home</Link></li>
            <li>/ Products</li>
          </ul>
          <h2 className="text-4xl font-bold text-white mt-2">Our Products</h2>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-600 inline-block font-bold uppercase relative beforetext md:before:content-['Products'] mb-4">YF Enterprises</div>
            <h2 className="text-3xl md:text-4xl font-bold">Flameproof & Industrial <br className="hidden md:block" /> Products Catalog</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {productCategories.map(category => (
                <option key={category.name} value={category.name}>
                  {category.icon} {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {productCategories.map(category => (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition hover:cursor-pointer ${
                  selectedCategory === category.name
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl relative py-24 flex flex-col items-center text-center transition hover:shadow-lg">
                <img src={product.image} alt={product.name} className="w-40 h-40 shadow-md absolute -translate-y-1/2 rounded-full object-cover" />
                <div className='bg-white p-6 flex flex-col items-center rounded pt-20 pb-6 rounded-2xl flex-1 w-full'>
                  <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                  <div className="text-xs text-orange-600 font-medium mb-2">{product.category}</div>
                  <div className="mb-2">
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                    )}
                    <span className="text-black font-bold">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3">
                    {Array.from({ length: product.rating }).map((_, j) => (
                      <FaStar key={j} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  {/* Product Specifications */}
                  <div className="text-xs text-gray-500 mb-4">
                    <div className="flex justify-between mb-1">
                      <span>Material:</span>
                      <span>{product.specifications.material}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Protection:</span>
                      <span>{product.specifications.protection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certification:</span>
                      <span>{product.specifications.certification}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer transition px-4 py-2 text-white font-semibold rounded-full flex items-center gap-2 text-sm">
                      INQUIRY <FaArrowRight size={10} />
                    </button>
                    <button className="bg-gray-200 hover:cursor-pointer hover:bg-gray-300 transition px-4 py-2 text-gray-700 font-semibold rounded-full text-sm">
                      Details
                    </button>
                  </div>
                  
                  {product.inStock && (
                    <div className="mt-2 text-xs text-green-600 font-medium">✓ In Stock</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Products Found */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All Products');
                  setSearchTerm('');
                  setFilteredProducts(flameproofProducts);
                }}
                className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 hover:cursor-pointer text-white font-semibold rounded-full"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-gray-600 mb-6">We provide customized flameproof and industrial solutions for your specific requirements.</p>
            <Button text={"Get Quote"} href={'/contact#contact'} primarycolor={"bg-orange-500"} secondarycolor={"bg-orange-600"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
