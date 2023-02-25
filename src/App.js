import './App.css';
import { useState } from 'react';
import rotary from './assets/logo.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import carousel1 from './assets/carousel1.jpg'
import carousel2 from './assets/carousel2.jpg'
import carousel3 from './assets/carousel3.jpg'
import carousel4 from './assets/carousel4.jpg'

function App() {
  const [open, setOpen] = useState(false)
  function toggle() {
    setOpen(oldOpen => !oldOpen)
  }
  return (
    <div className='bg-azure h-full flex flex-col items-center justify-center pt-12 pb-8'>
      <div className='bg-white items-center justify-center h-full main p-6 pl-8'>
        <div className='flex justify-between mb-4'>
          <img src={rotary} className='h-24' />
          <div className='hidden md:flex flex-row space-x-12 pr-4 pt-6'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Programs</a>
            <a href='#'>Work With Us</a>
            <a href='#'>Donate Now</a>
          </div>
          <div className='md:hidden flex flex-row space-x-4 pr-8 items-center'>
            <a href="#" className="pb-2
             ">Menu</a>
            <button id="menu-btn" className={`block hamburger md:hidden focus:outline-none ${open ? 'open' : ''}`} onClick={toggle}>
              <span className='hamburger-top'></span>
              <span className='hamburger-middle'></span>
              <span className='hamburger-bottom'></span>
            </button>
            <div class="md:hidden">
              <div id="menu" class={`${open ? 'flex' : 'hidden'} md:hidden z-10 absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm-w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Programs</a>
                <a href="#">Work With Us</a>
                <a href="#">Community</a>
              </div>
            </div>
          </div>
        </div>
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src={carousel1} className='carousel' /></SwiperSlide>
            <SwiperSlide><img src={carousel2} className='carousel' /></SwiperSlide>
            <SwiperSlide><img src={carousel3} className='carousel' /></SwiperSlide>
            <SwiperSlide><img src={carousel4} className='carousel' /></SwiperSlide>
          </Swiper>
        </>

      </div>
    </div>
  );
}

export default App;
