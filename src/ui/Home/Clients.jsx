import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { ChannelImage, ClientsImage } from '../../assets/logo';

function Clients() {
  return (
    <div>
            <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="text-orange-600 font-bold">Clients</div>
            <h2 className="text-3xl font-bold">Our Trusted Clients</h2>
          </div>
          <Swiper slidesPerView={2} modules={[Autoplay]} autoplay grabCursor={true}  spaceBetween={20} breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}>
            {ClientsImage.map((item,i) => (
              <SwiperSlide key={i}>
                <div className="p-4">
                  <img src={item} alt={`sponsor-${i}`} className="mx-auto h-16" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>  
        <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="text-orange-600 font-bold">Clients</div>
            <h2 className="text-3xl font-bold">Our Trusted Clients</h2>
          </div>
          <Swiper slidesPerView={2} modules={[Autoplay]} autoplay grabCursor={true}  spaceBetween={20} breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}>
            {ChannelImage.map((item,i) => (
              <SwiperSlide key={i}>
                <div className="p-4">
                  <img src={item} alt={`sponsor-${i}`} className="mx-auto h-16" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Clients
