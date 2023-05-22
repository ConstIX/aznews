import React from 'react'
import { post } from '../../../../data'

const PostWidget = () => {
   return (
      <aside className="single_sidebar_widget post_category_widget">
         <h4 className="widget_title">Category</h4>
         <ul className="list cat-list">
            {
               post.map(obj =>
                  <li key={obj.title}>
                     <a href={obj.link} className="d-flex">
                        <p>{obj.title}</p>
                        <p>{obj.num}</p>
                     </a>
                  </li>)
            }

         </ul>
      </aside>
   )
}

export default PostWidget