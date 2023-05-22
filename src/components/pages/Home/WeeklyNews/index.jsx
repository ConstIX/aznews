import React from 'react'
import { news } from '../../../../data'
import WeeklySingle from './WeeklySingle'

const WeeklyNews = () => {
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
                        {news.map(obj => <WeeklySingle key={obj.title} {...obj} />)}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WeeklyNews