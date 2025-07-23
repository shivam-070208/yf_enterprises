import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import productImages from '../../assets/productImage';


const products = [
   {
    id: 1,
    name: 'Flameproof Fire Alarm/Manual Call Point',
    category: 'Safety Devices',
        
          
    rating: 5,
    image: productImages[0],
    description: 'Flameproof fire alarm/manual call point for hazardous areas.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2',
      gasGroup: 'IIA, IIB, IIC',
      weatherproof: 'IP 66',
      finish: 'Red Color',
      gasket: 'Neoprene',
      cableEntry: '2 Nos, 3/4"ET Entry',
    },
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Flameproof Limit Switch (Roller/Lever Type)',
    category: 'Control Devices',
        
          
    rating: 4,
    image: productImages[1],
    description: 'Flameproof limit switch for industrial applications.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2',
      gasGroup: 'IIC',
      weatherproof: 'IP 65',
      finish: 'Light Grey to Shade 631',
      gasket: 'Neoprene',
      cableEntry: '1 Nos, 3/4"ET Entry',
      limitSwitch: '1NO+1NC, 10A 500V',
    },
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: 'Flameproof Push Button Station (R/F/S)',
    category: 'Control Devices',
        
          
    rating: 5,
    image: productImages[2],
    description: 'Flameproof push button station for various control functions.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2',
      gasGroup: 'IIA,IIB,IIC',
      weatherproof: 'IP 66',
      finish: 'Light Grey to Shade 631',
      gasket: 'Neoprene',
      cableEntry: '2 Nos. 3/4"ET Entry',
      forwardPB: 'Green Colour-NO CONTRACT',
      reversePB: 'Yellow Colour- NO CONTRACT',
    },
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: 'Flameproof Hooter with Flasher',
    category: 'Safety Devices',
        
          
    rating: 4,
    image: productImages[3],
    description: 'Flameproof hooter with flasher for audible and visual alarms.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2',
      gasGroup: 'IIA, IIB, IIC',
      weatherproof: 'IP 66',
      finish: 'Light Grey to Shade 631',
      gasket: 'Neoprene',
      cableEntry: '2 Nos, 3/4"ET Entry',
      noiseLevel: '120db',
    },
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: 'Flameproof Stop Push Button Station',
    category: 'Control Devices',
        
          
    rating: 5,
    image: productImages[4],
    description: 'Flameproof stop push button station for emergency cut-off.',
    specifications: {
      typeOfProtection: 'Ex-d',
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2',
      gasGroup: 'IIA, IIB, IIC',
      weatherproof: 'IP 66',
      finish: 'Light Grey to Shade 631',
      gasket: 'Neoprene',
      cableEntry: '2 Nos, 3/4"ET Entry',
    },
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'Flameproof Start/Stop Push Button Station',
    category: 'Control Devices',
        
          
    rating: 5,
    image: productImages[5],
    description: 'Flameproof start/stop push button station for motor control.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2, IIA, IIB, IIC as per IS/IEC 60079-1:2007',
      weatherproof: 'IP 66 as per IS/IEC 60529:2001',
      finish: 'Light Grey to Shade 631 of IS:5 (Epoxy Powder Coated)',
      gasket: 'Neoprene',
      cableEntry: '2 Nos. 3/4"ET Entry',
      startPB: 'Green Colour, Momentary Type',
    },
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: 'Flameproof Push Button Station with Indication Lamp',
    category: 'Control Devices',
        
          
    rating: 4,
    image: productImages[6],
    description: 'Flameproof push button station with integrated indication lamp.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2',
      gasGroup: 'IIA,IIB,IIC',
      weatherproof: 'IP 66',
      finish: 'Light Grey to Shade 631',
      gasket: 'Neoprene',
      cableEntry: '2 Nos. 3/4"ET Entry',
      forwardPB: 'Green Colour-NO CONTRACT',
      reversePB: 'Yellow Colour- NO CONTRACT',
    },
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: 'Flameproof Switch Socket Combine',
    category: 'Electrical Components',
        
          
    rating: 5,
    image: productImages[7],
    description: 'Flameproof switch socket combine for power connectivity.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2',
      gasGroup: 'IIA,IIB,IIC',
      weatherproof: 'IP 66',
      finish: 'Light Grey to Shade 631',
      gasket: 'Neoprene',
      cableEntry: '2 Nos. 3/4"ET Entry',
      switch: '16A/25AMP/32AMP Switch',
      rating: '230VOLT/415 VOLT',
      pin: '3 PIN (2P+E), 4 PIN (3P+E), 5 PIN (4P+E)',
    },
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: 'Flameproof ON/OFF Rotary Switch',
    category: 'Control Devices',
        
          
    rating: 4,
    image: productImages[8],
    description: 'Flameproof ON/OFF rotary switch for various control applications.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2,IIA, IIB,IIC as per IS/IEC 60079-1:2007',
      weatherproof: 'IP 66 as per IS/IEC 60529:2001',
      finish: 'Light Grey to Shade 631 of IS:5 (Epoxy Powder Coated)',
      gasket: 'Neoprene',
      cableEntry: '2 Nos, 3/4" ET Entry',
      switch: '16A/32AMP/25AMP DP ON/OFF Rotary Switch',
    },
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: 'Flameproof Temperature Indicator',
    category: 'Instrumentation',
        
          
    rating: 5,
    image: productImages[9],
    description: 'Flameproof temperature indicator for monitoring in hazardous areas.',
    specifications: {
      material: 'Cast Aluminium Alloy LM6',
      flameproofZone: 'Zone 1 & 2,IIA,IIB,IIC as per IS/IEC 60079-1:2007',
      weatherproof: 'IP 66 as per IS/IEC 60529:2001',
      finish: 'Light Grey to Shade 631 of 15:5 (Epoxy Powder Coated)',
      gasket: 'Neoprene',
      cableEntry: '2 Nos. 3/4"ET Entry',
      range: '0 To 200 DEGREE, 0 TO 400 DEGREE',
    },
    inStock: true,
    featured: true
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
              <div className="rounded-xl group relative py-24 flex flex-col items-center text-center transition">
                {/* 🟠 Product Image on Top */}
                <div className='w-40 h-45 group-hover:opacity-100 origin-center scale-0 group-hover:scale-100 opacity-0 transition-all duration-400 absolute  -translate-y-1/2 rounded-full bg-orange-500' />
                <img
                  src={product.image}
                  alt={product.name}
                  className="productimg shadow-lg  w-40 h-40  absolute -translate-y-1/2 rounded-full object-cover z-50"
                />
                {/* 🔶 Animated Card */}
                <div className="bg-white h-fit p-6 flex flex-col items-center rounded pt-28 pb-6 flex-1 w-full relative z-10">
                  <div className='absolute origin-center rounded-lg opacity-0 group-hover:opacity-100  w-full scale-x-0 group-hover:scale-x-100 duration-400 transition-all h-full bg-black top-0 -z-1' />
                  <h4 className="text-lg font-semibold mb-2 z-20 group-hover:text-white">{product.name}</h4>
                  <div className="text-xs text-orange-600 font-medium mb-2 z-20">{product.category}</div>
                  <div className="mb-2 z-20">
                    <span className="text-black font-bold group-hover:text-white">{product.price || ''}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3 z-20">
                    {Array.from({ length: product.rating }).map((_, j) => (
                      <FaStar key={j} />
                    ))}
                  </div>
                  <p className="text-gray-600 group-hover:text-white text-sm mb-4 leading-relaxed z-20">
                    {product.description}
                  </p>
                  <div className="text-xs text-gray-500 group-hover:text-white mb-4 z-20 w-full">
                    {product.specifications && (
                      <div className="flex justify-between mb-1">
                        <span>Material:</span>
                        <span>{product.specifications.material}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 z-20 w-full justify-center">
                    <Link
                      to="/contact#contact"
                      className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer transition px-4 py-2 text-white font-semibold rounded-full flex items-center gap-2 text-sm relative z-20"
                    >
                      INQUIRY <FaArrowRight size={10} />
                    </Link>
                    <Link
                      to={`/products/details?id=${product.id}`}
                      className="bg-gray-200 hover:cursor-pointer hover:bg-gray-300 transition px-4 py-2 text-gray-700 font-semibold rounded-full text-sm"
                    >
                      Details
                    </Link>
                  </div>
                  {product.inStock && (
                    <div className="mt-2 text-xs text-green-600 font-medium z-20">
                      ✓ In Stock
                    </div>
                  )}
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
