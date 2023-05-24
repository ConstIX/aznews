import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/img/logo/logo.png'
import header_card from '../../../assets/img/hero/header_card.jpg'

const HeaderMid: React.FC = () => {
   return (
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
   )
}

export default HeaderMid