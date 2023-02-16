import React from "react";
import './testimonials.css'
import img1 from '../../Assets/img-grace.jpg'
// import img2 from '../../Assets/img-timnik.jpg'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
 
import 'swiper/css';
import 'swiper/css/pagination';




export const Testimonials = () => {
  return(
  <section id="testimonials">
    <h5>Client Review</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container" 
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}>

        <SwiperSlide className="testimonials">
            <img src={img1} alt="" />
            <h5 className="client__name">Saidat clay</h5>
            <small className="client__review">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error soluta voluptatibus quis dicta?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
            <img src={img1} alt="" />
            <h5 className="client__name">Saidat clay</h5>
            <small className="client__review">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error soluta voluptatibus quis dicta?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
            <img src={img1} alt="" />
            <h5 className="client__name">Saidat clay</h5>
            <small className="client__review">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error soluta voluptatibus quis dicta?
            </small>
        </SwiperSlide>
       
    </Swiper>
  </section>
  )
};
