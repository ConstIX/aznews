import React from 'react'
import { list } from '../../../data'

import NewsWidget from '../../pages/Blog/Widgets/NewsWidget'
import PopularWidget from '../../pages/Blog/Widgets/PopularWidget'
import PostWidget from '../../pages/Blog/Widgets/PostWidget'
import BlogForm from './BlogForm'
import CommentList from './CommentList'
import { useParams } from 'react-router-dom'
import axios from 'axios'

type SingleBlogState = {
   image_url: string,
   title: string,
   content: string
}

const SingleBlog: React.FC = () => {

   const [singleNews, setSingleNews] = React.useState<SingleBlogState[]>([])
   const { pubDate } = useParams()

   React.useEffect(() => {
      async function fetchSingleNews() {
         try {
            const res = await axios.get(`https://646d04c77b42c06c3b2c6d6e.mockapi.io/items/` + pubDate)
            const data = res.data
            setSingleNews(data)
         } catch (eror) {
            alert('EROR!!!')
         }
      }
      fetchSingleNews()
   }, [])

   return (
      <div className="blog_area single-post-area section-padding">
         <div className="container">
            <div className="row">

               <div className="col-lg-8 posts-list">

                  <div className="single-post">
                     <div className="feature-img">
                        <img className="img-fluid" src={singleNews.image_url} alt="" />
                     </div>
                     <div className="blog_details">
                        <h2>
                           {singleNews.title}
                        </h2>
                        <p className="excert">
                           {singleNews.content}
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
                     <PostWidget />
                     <PopularWidget />
                     <NewsWidget />
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default SingleBlog