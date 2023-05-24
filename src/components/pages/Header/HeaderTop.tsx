import React from 'react'

import header_icon1 from '../../../assets/img/icon/header_icon1.png'
import header_icon2 from '../../../assets/img/icon/header_icon2.png'

const HeaderTop: React.FC = () => {
   return (
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
   )
}

export default HeaderTop