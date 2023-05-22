import React from 'react'
import { video } from '../../../data'

const Video: React.FC = () => {
   return (
      <div className="row">
         <div className="col-12">
            <div className="video-items-active">
               {
                  video.map(item =>
                     <div key={item} className="video-items text-center">
                        <iframe src={item} frameBorder="0"
                           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>
                     </div>)
               }
            </div>
         </div>
      </div>
   )
}

export default Video