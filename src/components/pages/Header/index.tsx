import React from 'react'

import HeaderBottom from './HeaderBottom'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'

const Header: React.FC = () => {
   return (
      <>
         <header>

            <div className="header-area">
               <div className="main-header ">

                  <HeaderTop />

                  <HeaderMid />

                  <HeaderBottom />

               </div>
            </div>

         </header>
      </>
   )
}

export default Header