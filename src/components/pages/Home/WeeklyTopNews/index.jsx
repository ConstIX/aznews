import React from 'react'
import { newsTop } from '../../../../data'
import WeeklyTopSingle from './WeeklyTopSingle'

const WeeklyTopNews = () => {
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
                        {newsTop.map(obj => <WeeklyTopSingle key={obj.title} {...obj} />)}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WeeklyTopNews