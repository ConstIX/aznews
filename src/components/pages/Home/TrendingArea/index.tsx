import React from 'react'
import { Link } from 'react-router-dom'
import { trendBottom, trendRight } from '../../../../data'

import trending_top from '../../../../assets/img/trending/trending_top.jpg'

import Trending from '../../About/Trending'
import TrendingBottom from './TrendingBottom'
import TrendingRight from './TrendingRight'

const TrendingArea: React.FC = () => {
   return (
      <div className="trending-area fix">
         <div className="container">
            <div className="trending-main">

               <Trending />

               <div className="row">
                  <div className="col-lg-8">

                     <div className="trending-top mb-30">
                        <div className="trend-top-img">
                           <img src={trending_top} alt="" />
                           <div className="trend-top-cap">
                              <span>Appetizers</span>
                              <h2><Link to="/details">Welcome To The Best Model Winner<br /> Contest At Look of the
                                 year</Link></h2>
                           </div>
                        </div>
                     </div>

                     <div className="trending-bottom">
                        <div className="row">
                           {trendBottom.map(obj => <TrendingBottom key={obj.title} {...obj} />)}
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-4">
                     {trendRight.map(obj => <TrendingRight key={obj.title} {...obj} />)}
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default TrendingArea