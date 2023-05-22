import React from 'react'
import { Link } from 'react-router-dom'

import logo2_footer from '../assets/img/logo/logo2_footer.png'
import form_icon from '../assets/img/logo/form-iocn.png'
import instra1 from '../assets/img/post/instra1.jpg'
import instra2 from '../assets/img/post/instra2.jpg'
import instra3 from '../assets/img/post/instra3.jpg'
import instra4 from '../assets/img/post/instra4.jpg'
import instra5 from '../assets/img/post/instra5.jpg'
import instra6 from '../assets/img/post/instra6.jpg'

const Footer: React.FC = () => {
   return (

      <footer>

         <div className="footer-area footer-padding fix">
            <div className="container">

               <div className="row d-flex justify-content-between">

                  <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                     <div className="single-footer-caption">
                        <div className="single-footer-caption">

                           <div className="footer-logo">
                              <Link to="/"><img src={logo2_footer} alt="" /></Link>
                           </div>
                           <div className="footer-tittle">
                              <div className="footer-pera">
                                 <p>Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus tempor
                                    da blandit gravida sodales Suscipit mauris pede for con sectetuer sodales adipisci for
                                    cursus fames lectus tempor da blandit gravida sodales Suscipit mauris pede for
                                    sectetuer.</p>
                              </div>
                           </div>

                           <div className="footer-social">
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                              <a href="#"><i className="fab fa-pinterest-p"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-4  col-sm-6">
                     <div className="single-footer-caption mt-60">
                        <div className="footer-tittle">
                           <h4>Newsletter</h4>
                           <p>Heaven fruitful doesn't over les idays appear creeping</p>

                           <div className="footer-form">
                              <div id="mc_embed_signup">
                                 <form target="_blank"
                                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                    method="get" className="subscribe_form relative mail_part">
                                    <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                       className="placeholder hide-on-focus" />
                                    <div className="form-icon">
                                       <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                          <img src={form_icon} alt="" />
                                       </button>
                                    </div>
                                    <div className="mt-10 info"></div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                     <div className="single-footer-caption mb-50 mt-60">
                        <div className="footer-tittle">
                           <h4>Instagram Feed</h4>
                        </div>
                        <div className="instagram-gellay">
                           <ul className="insta-feed">
                              <li><a href="#"><img src={instra1} alt="" /></a></li>
                              <li><a href="#"><img src={instra2} alt="" /></a></li>
                              <li><a href="#"><img src={instra3} alt="" /></a></li>
                              <li><a href="#"><img src={instra4} alt="" /></a></li>
                              <li><a href="#"><img src={instra5} alt="" /></a></li>
                              <li><a href="#"><img src={instra6} alt="" /></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>

               </div>

            </div>
         </div>

         <div className="footer-bottom-area">
            <div className="container">
               <div className="footer-border">
                  <div className="row d-flex align-items-center justify-content-between">
                     <div className="col-lg-6">
                        <div className="footer-copy-right">
                           <p>
                              All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a
                                 href="https://colorlib.com" target="_blank">Colorlib</a>
                           </p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="footer-menu f-right">
                           <ul>
                              <li><a href="#">Terms of use</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Contact</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </footer>

   )
}

export default Footer