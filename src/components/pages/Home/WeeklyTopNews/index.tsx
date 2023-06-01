import React from 'react'
import { useAppSelector } from '../../../redux/store'

import WeeklyTopSkeleton from '../WeeklyTopNews/WeeklyTopSkeleton'
import WeeklyTopSingle from './WeeklyTopSingle'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Mousewheel } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const WeeklyTopNews: React.FC = () => {

   const { rightNews, status } = useAppSelector(state => state.rightNewsReducer)
   const newsTopWeekly = rightNews.slice(14, 20)

   return (
      <div className="weekly2-news-area  weekly2-pading gray-bg">
         <div className="container">
            <div className="weekly2-wrapper">

               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-tittle mb-30">
                        <h3>Weekly Top News</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="weekly2-news-active dot-style d-flex dot-style">
                        {status === 'loading' ? [...new Array(5)].map((_, index) => <WeeklyTopSkeleton key={index} />) :
                           <Swiper
                              modules={[Navigation, Mousewheel, Scrollbar]}
                              spaceBetween={0}
                              slidesPerView={5}
                              navigation
                              scrollbar={{ draggable: true }}
                              mousewheel={{ invert: true }}
                              className="weekly2-swiper"
                           >
                              {newsTopWeekly.map(obj => <SwiperSlide key={obj.title}><WeeklyTopSingle {...obj} /></SwiperSlide>)}
                           </Swiper>
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WeeklyTopNews
