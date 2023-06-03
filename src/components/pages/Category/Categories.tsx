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

               {categories.map((item, index) => <li onClick={() => dispatch(setCategorry(index))} key={item} className={`nav-item nav-link ${categoryId === index ? 'active' : ''}`}>{item}</li>)}

            </div>
         </nav>

      </div>
   )
}

export default Categories