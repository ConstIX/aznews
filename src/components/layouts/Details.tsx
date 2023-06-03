import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import icon_ins from '../../assets/img/news/icon-ins.png'
import icon_fb from '../../assets/img/news/icon-fb.png'
import icon_tw from '../../assets/img/news/icon-tw.png'
import icon_yo from '../../assets/img/news/icon-yo.png'

import Trending from '../pages/About/Trending'
import FollowUs from '../pages/Category/FollowUs'

type TrendingState = {
   img_url: any,
   title: string,
   content: string
}

const Details: React.FC = () => {

   const [trendingNews, setTrendingNews] = React.useState<TrendingState[]>([])
   const { homeId } = useParams()

   React.useEffect(() => {
      async function fetchTrendingNews() {
         try {
            const res = await axios.get(`https://646d04c77b42c06c3b2c6d6e.mockapi.io/home/` + homeId)
            const data = res.data
            setTrendingNews(data)
            window.scrollTo(0, 0)
         } catch (eror) {
            alert('EROR!!!')
         }
      }
      fetchTrendingNews()
   }, [])

   return (
      <div className="about-area">
         <div className="container">
            <Trending />

            <div className="row">
               <div className="col-lg-8">
                  <div className="about-right mb-30">
                     <div className="about-img">
                        <img src={trendingNews.image_url} alt="" />
                     </div>
                     <div className="section-tittle mb-30 pt-30">
                        <h3>{trendingNews.title}</h3>
                     </div>
                     <div className="about-prea">
                        <p className="about-pera1 mb-25">{trendingNews.content}</p>
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