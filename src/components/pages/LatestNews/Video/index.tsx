import React from 'react'
import { useAppSelector } from '../../../redux/store'
import VideoSkeleton from './VideoSkeleton'

const Video: React.FC = () => {

   const { video, status } = useAppSelector(state => state.videoReducer)

   const videoTop = video.slice(0, 5)

   return (
      <div className="row">
         <div className="col-12">
            <div className="video-items-active">
               {status === 'loading' ? [...new Array(5)].map((_, index) => <VideoSkeleton key={index} />) :
                  videoTop.map(obj =>
                     <div key={obj.title} className="video-items text-center">
                        <iframe src={obj.video_url} frameBorder="0"
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