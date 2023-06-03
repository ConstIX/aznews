import React from 'react'
import { setBlogCategory } from '../../../redux/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/store'

const blogCategories = ['Resaurant food', 'Travel news', 'Modern technology', 'Product', 'Inspiration', 'Health Care']

const PostWidget: React.FC = () => {

   const dispatch = useAppDispatch()
   const { blogCategory } = useAppSelector(state => state.filterReducer)

   return (
      <aside className="single_sidebar_widget post_category_widget">
         <h4 className="widget_title">Category</h4>
         <ul className="list cat-list">
            {
               blogCategories.map((item, index) =>
                  <li key={item}>
                     <li className="d-flex">
                        <p onClick={() => dispatch(setBlogCategory(index + 1))} className={blogCategory === index + 1 ? 'active' : ''}>{item}</p>
                     </li>
                  </li>)
            }

         </ul>
      </aside>
   )
}

export default PostWidget