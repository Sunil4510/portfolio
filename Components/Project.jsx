import React from 'react'
import Image from 'next/image'
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, EffectCoverflow,EffectCube ,EffectFlip, Navigation, Pagination } from 'swiper';
import "swiper/css/effect-cards";
import Myprojects from './Myprojects'
// import SwiperCore, {
//   EffectCoverflow,
//   Pagination,
//   Navigation
// } from "swiper/core";
// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
// Import Swiper styles
import 'swiper/css';
import Cards from './Cards';
const Project = () => {
  return (
    <>
    <div className="project flex justify-evenly lg:flex-row md:flex-col-reverse sm:flex-col-reverse">
        <div className="project__left flex flex-col items-center mt-20">
            <h1 className="text-3xl w-2/3 font-Amiri">Portfolios are everything, promises are nothing. Do the work.</h1>
            <h3  className="text-xl mt-2 ml-40">~Chase Jarvis</h3>
            <Image src='/projects.svg' height={400} width={400} alt="project"/>
        </div>
        <div className="project__right  flex items-center flex-col mt-20 sm:mx-10 sm:mt-4 rounded-xl">    
        <h1 className="project__right__h1 mb-20 sm:mb-14 text-5xl sm:text-3xl">My Projects</h1>
            <Swiper 
            effect={"cards"}
            centeredSlides={true}
            slidesPerView={1}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper h-auto object-cover w-80 sm:w-60"
          >
          {Myprojects.map((curproject)=>{
            return(
                <SwiperSlide key={curproject.id}>
                <Cards key={curproject.id} {...curproject}/>
            </SwiperSlide>
            )
          })}
 
          </Swiper>
    </div>    
  </div>
  </>
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
   