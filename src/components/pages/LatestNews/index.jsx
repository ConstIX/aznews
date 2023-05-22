import React from 'react'

import Trending from '../About/Trending'
import Video from './Video'
import VideoInfo from './VideoInfo'

const LatestNews = () => {
   return (
      <div className="youtube-area">
         <div className="container">
            <Trending />
            <Video />
            <VideoInfo />
         </div>
      </div>
   )
}

export default LatestNews