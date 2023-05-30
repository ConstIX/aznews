import React from 'react'

import Trending from '../../About/Trending'
import TrendingTop from './TrendingTop'
import TrendingBottom from './TrendingBottom'
import TrendingRight from './TrendingRight'

import { useAppSelector } from '../../../redux/store'

import SkeletonTop from './TrendingTop/SkeletonTop'
import SkeletonRight from './TrendingRight/SkeletonRight'
import SkeletonBottom from './TrendingBottom/SkeletonBottom'


const TrendingArea: React.FC = () => {

   const { rightNews, status } = useAppSelector(state => state.rightNewsReducer)

   const newsBottom = rightNews.slice(0, 3)
   const newsRigth = rightNews.slice(3, 8)
   const newsTop = rightNews.slice(8, 9)

   return (
      <div className="trending-area fix">
         <div className="container">
            <div className="trending-main">

               <Trending />

               <div className="row">
                  <div className="col-lg-8">

                     {status === 'loading' ? <SkeletonTop /> : <TrendingTop {...newsTop[0]} />}

                     <div className="trending-bottom">
                        <div className="row">
                           {status === 'loading' ? [...new Array(3)].map((_, index) => <SkeletonBottom key={index} />) : newsBottom.map(obj => <TrendingBottom key={obj.title} {...obj} />)}
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-4">
                     {status === 'loading' ? [...new Array(6)].map((_, index) => <SkeletonRight key={index} />) : newsRigth.map((obj: any) => <TrendingRight key={obj.title} {...obj} />)}
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default TrendingArea