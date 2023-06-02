import React from 'react'

import Category from '../Category'
import VideoInfo from '../LatestNews/VideoInfo'
import Video from '../LatestNews/Video'
import TrendingArea from './TrendingArea'
import WeeklyNews from './WeeklyNews'
import WeeklyTopNews from './WeeklyTopNews'
import RecentArticles from './RecentArticles'

import { useAppDispatch } from '../../redux/store'
import { fetchRightNews } from '../../redux/slices/rightNewsSlice'
import { fetchVideo } from '../../redux/slices/videoSlice'

const Home: React.FC = () => {

   const dispatch = useAppDispatch()
   const getNews = async () => {
      dispatch(fetchRightNews())
   }
   const getVideo = async () => {
      dispatch(fetchVideo())
   }

   React.useEffect(() => {
      getNews()
      getVideo()
   }, [])

   return (
      <main>

         <TrendingArea />

         <WeeklyNews />

         <Category />

         <WeeklyTopNews />

         <div className="youtube-area video-padding">
            <div className="container">
               <Video />
               <VideoInfo />
            </div>
         </div>

         <RecentArticles />

      </main>
   )
}

export default Home