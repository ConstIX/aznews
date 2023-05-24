import React from 'react'
import { Link } from 'react-router-dom'

type BlogItemProps = { pubDate: string, image_url: any, title: string, description: string }

const BlogItem: React.FC<BlogItemProps> = ({ pubDate, image_url, title, description }) => {
   return (
      <article className="blog_item">
         <div className="blog_item_img">
            <img className="card-img rounded-0" src={image_url} alt="" />
            <span className="blog_item_date">
               <p>{pubDate}</p>
            </span>
         </div>

         <div className="blog_details">
            <Link to={`/single`} className="d-inline-block">
               <h2>{title}</h2>
            </Link>
            <p>{description}</p>
         </div>
      </article>
   )
}

export default BlogItem