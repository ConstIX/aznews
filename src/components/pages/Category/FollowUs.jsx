import React from 'react'

import icon_fb from '../../../assets/img/news/icon-fb.png'
import icon_tw from '../../../assets/img/news/icon-tw.png'
import icon_ins from '../../../assets/img/news/icon-ins.png'
import icon_yo from '../../../assets/img/news/icon-yo.png'
import news_card from '../../../assets/img/news/news_card.jpg'

const FollowUs = () => {
   return (
      <div className="col-lg-4">

         <div className="section-tittle mb-40">
            <h3>Follow Us</h3>
         </div>

         <div className="single-follow mb-45">
            <div className="single-box">
               <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                     <a href="#"><img src={icon_fb} alt="" /></a>
                  </div>
                  <div className="follow-count">
                     <span>8,045</span>
                     <p>Fans</p>
                  </div>
               </div>
               <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                     <a href="#"><img src={icon_tw} alt="" /></a>
                  </div>
                  <div className="follow-count">
                     <span>8,045</span>
                     <p>Fans</p>
                  </div>
               </div>
               <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                     <a href="#"><img src={icon_ins} alt="" /></a>
                  </div>
                  <div className="follow-count">
                     <span>8,045</span>
                     <p>Fans</p>
                  </div>
               </div>
               <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                     <a href="#"><img src={icon_yo} alt="" /></a>
                  </div>
                  <div className="follow-count">
                     <span>8,045</span>
                     <p>Fans</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="news-poster d-none d-lg-block">
            <img src={news_card} alt="" />
         </div>
      </div>
   )
}

export default FollowUs