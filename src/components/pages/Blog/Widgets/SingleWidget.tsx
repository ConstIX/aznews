import React from 'react'
import { single } from '../../../../data'

const SingleWidget: React.FC = () => {
   return (
      <aside className="single_sidebar_widget instagram_feeds">
         <h4 className="widget_title">Instagram Feeds</h4>
         <ul className="instagram_row flex-wrap">
            {
               single.map((obj, index) =>
                  <li key={index}>
                     <a href={obj.link}>
                        <img className="img-fluid" src={obj.image} alt="" />
                     </a>
                  </li>)
            }
         </ul>
      </aside>
   )
}

export default SingleWidget