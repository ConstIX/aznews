import React from 'react'
import axios from 'axios'

import icon_ins from '../../assets/img/news/icon-ins.png'
import icon_fb from '../../assets/img/news/icon-fb.png'
import icon_tw from '../../assets/img/news/icon-tw.png'
import icon_yo from '../../assets/img/news/icon-yo.png'

import PopularWidget from '../pages/Blog/Widgets/PopularWidget'
import PostWidget from '../pages/Blog/Widgets/PostWidget'
import { useParams } from 'react-router-dom'

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
            const res = await axios.get(`https://646d04c77b42c06c3b2c6d6e.mockapi.io/blog/` + pubDate)
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

                  <div className="social-share pt-30">
                     <div className="section-tittle">
                        <h3 className="mr-20">Share:</h3>
                        <ul>
                           <li><a href="#"><img src={icon_ins} alt="" /></a></li>
                           <li><a href="#"><img src={icon_fb} alt="" /></a></li>
                           <li><a href="#"><img src={icon_tw} alt="" /></a></li>
                           <li><a href="#"><img src={icon_yo} alt="" /></a></li>
                        </ul>
                     </div>
                  </div>

               </div>

               <div className="col-lg-4">
                  <div className="blog_right_sidebar">
                     <PostWidget />
                     <PopularWidget />
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default SingleBlog