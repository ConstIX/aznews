import React from 'react'

import { setCategorry } from '../../redux/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

const categories = ["All", "Lifestyle", "Travel", "Fashion", "Sports", "Technology"]

const Categories: React.FC = () => {

   const dispatch = useAppDispatch()
   const { categoryId } = useAppSelector(state => state.filterReducer)

   return (
      <div className="properties__button">

         <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">

               {/* <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                  href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a>
               <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                  role="tab" aria-controls="nav-profile" aria-selected="false">Lifestyle</a>
               <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
                  role="tab" aria-controls="nav-contact" aria-selected="false">Travel</a>
               <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last"
                  role="tab" aria-controls="nav-contact" aria-selected="false">Fashion</a>
               <a className="nav-item nav-link" id="nav-Sports" data-toggle="tab" href="#nav-nav-Sport"
                  role="tab" aria-controls="nav-contact" aria-selected="false">Sports</a>
               <a className="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno"
                  role="tab" aria-controls="nav-contact" aria-selected="false">Technology</a> */}

               {categories.map((item, index) => <li onClick={() => dispatch(setCategorry(index))} key={item} className={`nav-item nav-link ${categoryId === index ? 'active' : ''}`}>{item}</li>)}

            </div>
         </nav>

      </div>
   )
}

export default Categories