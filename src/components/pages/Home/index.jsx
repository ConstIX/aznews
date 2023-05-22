import React from 'react'

import Category from '../Category'
import VideoInfo from '../LatestNews/VideoInfo'
import Video from '../LatestNews/Video'
import TrendingArea from './TrendingArea'
import WeeklyNews from './WeeklyNews'
import WeeklyTopNews from './WeeklyTopNews'
import RecentArticles from './RecentArticles'

const Home = () => {
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