import React from 'react'

import about_hero from '../../../assets/img/post/about_heor.jpg'

import FollowUs from '../Category/FollowUs'
import Trending from './Trending'

const About = () => {
   return (
      <div className="about-area">
         <div className="container">

            <Trending />

            <div className="row">
               <div className="col-lg-8">
                  <div className="about-right mb-90">
                     <div className="about-img">
                        <img src={about_hero} alt="" />
                     </div>
                     <div className="section-tittle mb-30 pt-30">
                        <h3>About Us</h3>
                     </div>
                     <div className="about-prea">
                        <p className="about-pera1 mb-25">Moms are like…buttons? Moms are like glue. Moms are like pizza
                           crusts. Moms are the ones who make sure things happen—from birth to school lunch.</p>
                        <p className="about-pera1 mb-25">Moms are like…buttons? Moms are like glue. Moms are like pizza
                           crusts. Moms are the ones who make sure things happen—from birth to school lunch.</p>
                        <p className="about-pera1 mb-25">
                           My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re
                           elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite
                           compliment is being told that I look like my mom. Seeing myself in her image, like this
                           daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come
                           from.
                           the refractor telescope uses a convex lens to focus the light on the eyepiece.
                           The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus
                           the image that you eventually see.
                           Collimation is a term for how well tuned the telescope is to give you a good clear image of
                           what you are looking at. You want your telescope to have good collimation so you are not
                           getting a false image of the celestial body.
                           Aperture is a fancy word for how big the lens of your telescope is. But it’s an important
                           word because the aperture of the lens is the key to how powerful your telescope is.
                           Magnification has nothing to do with it, its all in the aperture.
                           Focuser is the housing that keeps the eyepiece of the telescope, or what you will look
                           through, in place. The focuser has to be stable and in good repair for you to have an image
                           you can rely on.
                           Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is
                           the actual tripod and the wedge is the device that lets you attach the telescope to the
                           mount.
                           Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who
                           make sure things happen—from birth to school lunch.</p>
                     </div>
                  </div>
               </div>

               <FollowUs />
            </div>

         </div>
      </div>
   )
}

export default About