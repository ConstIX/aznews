import React from 'react'
import { tag } from '../../../../data'

const TagWidget: React.FC = () => {
   return (
      <aside className="single_sidebar_widget tag_cloud_widget">
         <h4 className="widget_title">Tag Clouds</h4>
         <ul className="list">
            {
               tag.map(obj =>
                  <li key={obj.title}>
                     <a href={obj.link}>{obj.title}</a>
                  </li>)
            }
         </ul>
      </aside>
   )
}

export default TagWidget