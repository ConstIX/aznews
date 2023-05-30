import React from 'react'
import { useAppSelector } from '../../../redux/store'
import WeeklySingle from './WeeklySingle'
import WeeklySkeleton from './WeeklySkeleton'

const WeeklyNews: React.FC = () => {

   const { rightNews, status } = useAppSelector(state => state.rightNewsReducer)
   const newsWeekly = rightNews.slice(9, 13)

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
                        {status === 'loading' ? [...new Array(4)].map((_, index) => <WeeklySkeleton key={index} />) : newsWeekly.map(obj => <WeeklySingle key={obj.title} {...obj} />)}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WeeklyNews