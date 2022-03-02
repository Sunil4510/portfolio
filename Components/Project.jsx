import React from 'react'
import Image from 'next/image'
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const Project = () => {
  return (
    <div className="project flex items-center justify-evenly sm:flex-col">
        <div className="project__left">
            <Image src='/projects.svg' height={400} width={400}/>
        </div>
        <div className="project__right">
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    
      </Swiper>
        </div>
        
    </div>
  )
}

export default Project

/*
  <Carousel 
    width="50%"
    className="mt-10"
    >
        <div>
            <Image src="/fire2.jpg" height={300} width={300} className="rounded-lg"/>
            <strong className="text-3xl sm:pl-10 text-orange-400">What I've been up to :</strong>  
            <ul className="m-3 ml-8 list-disc sm:pl-10 text-sky-800 font-bold text-xl">
                <li><p className="text-indigo-800">Building this</p></li>
                <li><p className="text-indigo-800">Building this</p></li>
                <li><p className="text-indigo-800">Building this</p></li>
                <li><p className="text-indigo-800">Building this</p></li>
            </ul> 
            <div className="flex justify-evenly m-10">
                <h1>Live Code</h1>
                <h1>Github</h1>
            </div>
        </div>
        <div>
            <Image src="/fire2.jpg" height={300} width={300} className="rounded-lg"/>
        </div>
        <div>
            <Image src="/fire2.jpg" height={300} width={300} className="rounded-lg"/>
        </div>
    </Carousel>
    */