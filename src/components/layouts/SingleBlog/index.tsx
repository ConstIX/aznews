import React from 'react'
import { list } from '../../../data'

import NewsWidget from '../../pages/Blog/Widgets/NewsWidget'
import PopularWidget from '../../pages/Blog/Widgets/PopularWidget'
import PostWidget from '../../pages/Blog/Widgets/PostWidget'
import SearchWidget from '../../pages/Blog/Widgets/SearchWidget'
import SingleWidget from '../../pages/Blog/Widgets/SingleWidget'
import TagWidget from '../../pages/Blog/Widgets/TagWidget'
import BlogForm from './BlogForm'
import CommentList from './CommentList'


const SingleBlog: React.FC = () => {

   return (
      <div className="blog_area single-post-area section-padding">
         <div className="container">
            <div className="row">

               <div className="col-lg-8 posts-list">

                  <div className="single-post">
                     <div className="feature-img">
                        <img className="img-fluid" src='' alt="" />
                     </div>
                     <div className="blog_details">
                        <h2>

                        </h2>
                        <p className="excert">

                        </p>
                     </div>
                  </div>

                  <div className="comments-area">
                     <h4>3 Comments</h4>
                     {list.map((obj) => <CommentList key={obj.text} {...obj} />)}
                  </div>

                  <BlogForm />

               </div>

               <div className="col-lg-4">
                  <div className="blog_right_sidebar">
                     <SearchWidget />
                     <PostWidget />
                     <PopularWidget />
                     <TagWidget />
                     <SingleWidget />
                     <NewsWidget />
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default SingleBlog