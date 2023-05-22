import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({ image, date, title, text, user, comments }) => {
   return (
      <article className="blog_item">
         <div className="blog_item_img">
            <img className="card-img rounded-0" src={image} alt="" />
            <span className="blog_item_date">
               <h3>{date.num}</h3>
               <p>{date.month}</p>
            </span>
         </div>

         <div className="blog_details">
            <Link to="/single" className="d-inline-block">
               <h2>{title}</h2>
            </Link>
            <p>{text}</p>
            <ul className="blog-info-link">
               <li><a href="#"><i className="fa fa-user"></i> {user}</a></li>
               <li><a href="#"><i className="fa fa-comments"></i> {comments} Comments</a></li>
            </ul>
         </div>
      </article>
   )
}

export default BlogItem