import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../redux/store'

const PopularWidget: React.FC = () => {

   const { rightNews } = useAppSelector(state => state.rightNewsReducer)
   const singlePost = rightNews.slice(0, 6)

   return (
      <aside className="single_sidebar_widget popular_post_widget">
         <h3 className="widget_title">Recent Post</h3>
         {
            singlePost.map(obj =>
               <div key={obj.title} className="media post_item">
                  <img src={obj.image_url} alt="post" />
                  <div className="media-body">
                     <Link to={`/details/${obj.id}`}>
                        <h3>{obj.title}</h3>
                     </Link>
                     <p>{obj.pubDate}</p>
                  </div>
               </div>)
         }

      </aside>
   )
}

export default PopularWidget