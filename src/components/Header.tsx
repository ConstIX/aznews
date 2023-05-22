import React from 'react'

import header_icon1 from '../assets/img/icon/header_icon1.png'
import header_icon2 from '../assets/img/icon/header_icon2.png'
import logo from '../assets/img/logo/logo.png'
import header_card from '../assets/img/hero/header_card.jpg'

import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <>
         <header>

            <div className="header-area">
               <div className="main-header ">

                  <div className="header-top black-bg d-none d-md-block">
                     <div className="container">
                        <div className="col-xl-12">
                           <div className="row d-flex justify-content-between align-items-center">
                              <div className="header-info-left">
                                 <ul>
                                    <li><img src={header_icon1} alt="" />34ºc, Sunny </li>
                                    <li><img src={header_icon2} alt="" />Tuesday, 18th June, 2019</li>
                                 </ul>
                              </div>
                              <div className="header-info-right">
                                 <ul className="header-social">
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="header-mid d-none d-md-block">
                     <div className="container">
                        <div className="row d-flex align-items-center">

                           <div className="col-xl-3 col-lg-3 col-md-3">
                              <div className="logo">
                                 <Link to='/'><img src={logo} alt="" /></Link>
                              </div>
                           </div>
                           <div className="col-xl-9 col-lg-9 col-md-9">
                              <div className="header-banner f-right ">
                                 <img src={header_card} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="header-bottom header-sticky">
                     <div className="container">
                        <div className="row align-items-center">
                           <div className="col-xl-10 col-lg-10 col-md-12 header-flex">

                              <div className="sticky-logo">
                                 <Link to='/'><img src={logo} alt="" /></Link>
                              </div>

                              <div className="main-menu d-none d-md-block">
                                 <nav>
                                    <ul id="navigation">
                                       <li><Link to="/">Home</Link></li>
                                       <li><Link to="/category">Category</Link></li>
                                       <li><Link to="/about">About</Link></li>
                                       <li><Link to="/latest">Latest News</Link></li>
                                       <li><Link to="/contact">Contact</Link></li>
                                       <li><Link to="/blog">Blog</Link></li>
                                    </ul>
                                 </nav>
                              </div>
                           </div>
                           <div className="col-xl-2 col-lg-2 col-md-4">
                              <div className="header-right-btn f-right d-none d-lg-block">
                                 <i className="fas fa-search special-tag"></i>
                                 <div className="search-box">
                                    <form action="#">
                                       <input type="text" placeholder="Search" />
                                    </form>
                                 </div>
                              </div>
                           </div>

                           <div className="col-12">
                              <div className="mobile_menu d-block d-md-none"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </header>
      </>
   )
}

export default Header