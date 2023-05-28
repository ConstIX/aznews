import React from 'react'

import trending_top from '../../assets/img/trending/trending_top.jpg'
import icon_ins from '../../assets/img/news/icon-ins.png'
import icon_fb from '../../assets/img/news/icon-fb.png'
import icon_tw from '../../assets/img/news/icon-tw.png'
import icon_yo from '../../assets/img/news/icon-yo.png'

import Trending from '../pages/About/Trending'
import FollowUs from '../pages/Category/FollowUs'

const Details: React.FC = () => {
   return (
      <div className="about-area">
         <div className="container">
            <Trending />

            <div className="row">
               <div className="col-lg-8">
                  <div className="about-right mb-30">
                     <div className="about-img">
                        <img src={trending_top} alt="" />
                     </div>
                     <div className="section-tittle mb-30 pt-30">
                        <h3>Here come the moms in space</h3>
                     </div>
                     <div className="about-prea">
                        <p className="about-pera1 mb-25">
                           My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re
                           elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite
                           compliment is being told that I look like my mom. Seeing myself in her image, like this
                           daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come
                           from.
                           the refractor telescope uses a convex lens to focus the light on the eyepiece.
                           The reflector telescope has a concave lens which means it telescope sits on. The mount is the
                           actual tripod and the wedge is the device that lets you attach the telescope to the mount.
                           Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who
                           make sure things happen—from birth to school lunch.</p>
                     </div>
                     <div className="social-share pt-30">
                        <div className="section-tittle">
                           <h3 className="mr-20">Share:</h3>
                           <ul>
                              <li><a href="#"><img src={icon_ins} alt="" /></a></li>
                              <li><a href="#"><img src={icon_fb} alt="" /></a></li>
                              <li><a href="#"><img src={icon_tw} alt="" /></a></li>
                              <li><a href="#"><img src={icon_yo} alt="" /></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>

               </div>
               <FollowUs />
            </div>
         </div>
      </div>
   )
}

export default Details