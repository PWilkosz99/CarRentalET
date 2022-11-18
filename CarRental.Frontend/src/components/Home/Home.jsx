import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import Hero from '../Hero/Hero';
import styles from './Home.module.css';

import 'swiper/css'
import 'swiper/css/navigation'

import Logo from '../../images/logo192.png'; //tmp
import SwiperCard from './SwiperCard';

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
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={6}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            960: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><SwiperCard img="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" desc="Mercedess" /></SwiperSlide>
          <SwiperSlide><SwiperCard img="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" desc="Mercedess" /></SwiperSlide>
          <SwiperSlide><SwiperCard img="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" desc="Mercedess" /></SwiperSlide>
          <SwiperSlide><SwiperCard img="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" desc="Mercedess" /></SwiperSlide>
          <SwiperSlide><SwiperCard img="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" desc="Mercedess" /></SwiperSlide>
          <SwiperSlide><SwiperCard img="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" desc="Mercedess" /></SwiperSlide>
          <SwiperSlide><SwiperCard img="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" desc="Mercedess" /></SwiperSlide>
        </Swiper>
      </div>
      <h2>Home page</h2>
      {currentUser ? 'Zalogowano jako ' + currentUser.email : 'Nie zalogowano'}
    </>
  );
}