import React from 'react'
import { recent } from '../../../../data'

import RecentPagination from './RecentPagination'
import SingleRecent from './SingleRecent'


const RecentArticles = () => {
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
                           {recent.map((obj, index) => <SingleRecent key={index} {...obj} />)}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <RecentPagination />
      </>
   )
}

export default RecentArticles