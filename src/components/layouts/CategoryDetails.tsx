import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import icon_ins from '../../assets/img/news/icon-ins.png'
import icon_fb from '../../assets/img/news/icon-fb.png'
import icon_tw from '../../assets/img/news/icon-tw.png'
import icon_yo from '../../assets/img/news/icon-yo.png'

import Trending from '../pages/About/Trending'
import FollowUs from '../pages/Category/FollowUs'

type CategoryState = {
   img_url: any,
   title: string,
   content: string
}

const Details: React.FC = () => {

   const [categoryNews, setCategoryNews] = React.useState<CategoryState[]>([])
   const { id } = useParams()

   React.useEffect(() => {
      async function fetchCategoryNews() {
         try {
            const res = await axios.get(`https://6478e0e5362560649a2e9596.mockapi.io/catnews/` + id)
            const data = res.data
            setCategoryNews(data)
         } catch (eror) {
            alert('EROR!!!')
         }
      }
      fetchCategoryNews()
   }, [])

   return (
      <div className="about-area">
         <div className="container">
            <Trending />

            <div className="row">
               <div className="col-lg-8">
                  <div className="about-right mb-30">
                     <div className="about-img">
                        <img src={categoryNews.image_url} alt="" />
                     </div>
                     <div className="section-tittle mb-30 pt-30">
                        <h3>{categoryNews.title}</h3>
                     </div>
                     <div className="about-prea">
                        <p className="about-pera1 mb-25">{categoryNews.content}</p>
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

               </div>
               <FollowUs />
            </div>
         </div>
      </div>
   )
}

export default Details