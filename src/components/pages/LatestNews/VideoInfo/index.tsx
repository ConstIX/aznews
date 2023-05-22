import React from 'react'
import { videoInfo } from '../../../../data'
import SingleVideo from './SingleVideo'

const VideoInfo: React.FC = () => {
   return (
      <div className="video-info">
         <div className="row">
            <div className="col-lg-6">
               <div className="video-caption">
                  <div className="top-caption">
                     <span className="color1">Politics</span>
                  </div>
                  <div className="bottom-caption">
                     <h2>Welcome To The Best Model Winner Contest At Look of the year</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit
                        lorem ipsum dolor sit.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="testmonial-nav text-center">
                  {videoInfo.map(obj => <SingleVideo key={obj.link} {...obj} />)}
               </div>
            </div>
         </div>
      </div>
   )
}

export default VideoInfo