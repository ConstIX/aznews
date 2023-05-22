import React from 'react'
import { list } from '../../../data'

import single1 from '../../../assets/img/blog/single_blog_1.png'

import NewsWidget from '../../pages/Blog/Widgets/NewsWidget'
import PopularWidget from '../../pages/Blog/Widgets/PopularWidget'
import PostWidget from '../../pages/Blog/Widgets/PostWidget'
import SearchWidget from '../../pages/Blog/Widgets/SearchWidget'
import SingleWidget from '../../pages/Blog/Widgets/SingleWidget'
import TagWidget from '../../pages/Blog/Widgets/TagWidget'
import BlogForm from './BlogForm'
import CommentList from './CommentList'

const SingleBlog = () => {
   return (
      <div className="blog_area single-post-area section-padding">
         <div className="container">
            <div className="row">

               <div className="col-lg-8 posts-list">

                  <div className="single-post">
                     <div className="feature-img">
                        <img className="img-fluid" src={single1} alt="" />
                     </div>
                     <div className="blog_details">
                        <h2>Second divided from form fish beast made every of seas
                           all gathered us saying he our
                        </h2>
                        <ul className="blog-info-link mt-3 mb-4">
                           <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                           <li><a href="#"><i className="fa fa-comments"></i> 3 Comments</a></li>
                        </ul>
                        <p className="excert">
                           MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                           should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                           fraction of the camp price. However, who has the willpower
                        </p>
                        <p>
                           MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                           should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                           fraction of the camp price. However, who has the willpower to actually sit through a
                           self-imposed MCSE training. who has the willpower to actually
                        </p>
                        <div className="quote-wrapper">
                           <div className="quotes">
                              MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                              should have to spend money on boot camp when you can get the MCSE study materials yourself at
                              a fraction of the camp price. However, who has the willpower to actually sit through a
                              self-imposed MCSE training.
                           </div>
                        </div>
                        <p>
                           MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                           should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                           fraction of the camp price. However, who has the willpower
                        </p>
                        <p>
                           MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                           should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                           fraction of the camp price. However, who has the willpower to actually sit through a
                           self-imposed MCSE training. who has the willpower to actually
                        </p>
                     </div>
                  </div>

                  <div className="comments-area">
                     <h4>3 Comments</h4>
                     {list.map(obj => <CommentList key={obj.text} {...obj} />)}
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