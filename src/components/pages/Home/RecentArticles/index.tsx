import React from 'react'
import { useAppSelector } from '../../../redux/store'

import RecentSkeleton from './RecentSkeleton'
import SingleRecent from './SingleRecent'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Mousewheel } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const RecentArticles: React.FC = () => {

   const { rightNews, status } = useAppSelector(state => state.rightNewsReducer)
   const newsRecent = rightNews.slice(15, 20)

   return (
      <>
         <div className="recent-articles">
            <div className="container">
               <div className="recent-wrapper">

                  <div className="row">
                     <div className="col-lg-12">
                        <div className="section-tittle mb-30">
                           <h3>Recent Articles</h3>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <div className="recent-active dot-style d-flex dot-style">
                           {status === 'loading' ? [...new Array(4)].map((_, index) => <RecentSkeleton key={index} />) :
                              <Swiper
                                 modules={[Navigation, Mousewheel, Scrollbar]}
                                 spaceBetween={0}
                                 slidesPerView={4}
                                 navigation
                                 scrollbar={{ draggable: true }}
                                 mousewheel={{ invert: true }}
                                 className="recent-swiper"
                              >
                                 {newsRecent.map(obj => <SwiperSlide key={obj.title}><SingleRecent {...obj} /></SwiperSlide>)}
                              </Swiper>
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default RecentArticles
