import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import Hero from './Hero/Hero';

import 'swiper/css'
import 'swiper/css/navigation'

import Logo from '../images/logo192.png'; //tmp

export default function Home(props) {
  const { currentUser } = useAuth();

  // try {
  //   currentUser.getIdTokenResult()
  //     .then(function ({
  //       claims
  //     }) {
  //       console.log(claims)
  //     }
  //     )
  // } catch {

  // }

  console.log(currentUser)

  console.log(process.env.REACT_APP_BUCKET_ADDRESS)

  return (
    <>
      <Hero />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        <SwiperSlide><img src={Logo}/><br/>Card</SwiperSlide>
        ...
      </Swiper>

      <h2>Home page</h2>
      {currentUser ? 'Zalogowano jako ' + currentUser.email : 'Nie zalogowano'}
    </>
  );
}