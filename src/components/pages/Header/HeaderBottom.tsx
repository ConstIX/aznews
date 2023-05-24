import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/img/logo/logo.png'

const headerNav = [
   { link: '/', name: 'Home' },
   { link: '/category', name: 'Category' },
   { link: '/about', name: 'About' },
   { link: '/latest', name: 'Latest News' },
   { link: '/contact', name: 'Contact' },
   { link: '/blog', name: 'Blog' }
]

const HeaderBottom: React.FC = () => {

   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      navigate("/blog")
   }

   return (
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
                           {headerNav.map(obj => <li key={obj.name}><Link to={obj.link}>{obj.name}</Link></li>)}
                        </ul>
                     </nav>
                  </div>
               </div>

               <div className="col-xl-2 col-lg-2 col-md-4">
                  <div className="header-right-btn f-right d-none d-lg-block">
                     <i className="fas fa-search special-tag"></i>
                     <div className="search-box">
                        <form onSubmit={handleSubmit}>
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
   )
}

export default HeaderBottom