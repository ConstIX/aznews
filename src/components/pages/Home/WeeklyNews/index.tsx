import React from 'react'
import { useAppSelector } from '../../../redux/store'

import WeeklySingle from './WeeklySingle'
import WeeklySkeleton from './WeeklySkeleton'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Mousewheel } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const WeeklyNews: React.FC = () => {

   const { rightNews, status } = useAppSelector(state => state.rightNewsReducer)
   const newsWeekly = rightNews.slice(9, 14)

   return (
      <div className="weekly-news-area pt-50">
         <div className="container">
            <div className="weekly-wrapper">

               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-tittle mb-30">
                        <h3>Weekly Top News</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="weekly-news-active dot-style d-flex dot-style">
                        {status === 'loading' ? [...new Array(4)].map((_, index) => <WeeklySkeleton key={index} />) :
                           <Swiper
                              modules={[Navigation, Mousewheel, Scrollbar]}
                              spaceBetween={0}
                              slidesPerView={4}
                              navigation
                              scrollbar={{ draggable: true }}
                              mousewheel={{ invert: true }}
                              className="weekly-swiper"
                           >
                              {newsWeekly.map(obj => <SwiperSlide key={obj.title}><WeeklySingle {...obj} /></SwiperSlide>)}
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

export default WeeklyNews