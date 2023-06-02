import React from 'react'
import { useAppSelector } from '../../../redux/store'
import VideoInfoSkeleton from './VideoInfoSkeleton'

const VideoInfo: React.FC = () => {

   const { video, status } = useAppSelector(state => state.videoReducer)
   const videoBottom = video.slice(5, 8)

   return (
      <div className="video-info">
         <div className="row">
            <div className="col-lg-6">
               <div className="video-caption">
                  <div className="bottom-caption">
                     <h2>Welcome To The Best Model Winner Contest At Look of the year</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque id architecto vero temporibus iusto aliquid fugit necessitatibus asperiores similique molestias nobis repellendus doloribus ipsum nisi voluptate, et provident, sequi possimus inventore accusantium culpa eaque! Deserunt veniam, labore corrupti mollitia neque, tempore possimus accusantium sed inventore iste quidem quam cum. Est, eos quam! Earum officiis cupiditate error maxime iusto debitis perferendis eligendi, rerum quos tempore? Nisi animi corporis ratione vitae culpa dolore eveniet ad dignissimos quisquam odit voluptatibus illum neque placeat nihil quis, ea recusandae dolores deserunt tempora esse laboriosam magni officia reiciendis saepe! Nulla recusandae culpa aperiam! Dicta eligendi vero modi aspernatur eum! Dolorum adipisci quas vero laudantium architecto laboriosam distinctio ex provident ipsum sed incidunt corporis repellendus assumenda voluptatum libero at voluptatibus dolorem, veniam, pariatur maiores! Itaque, expedita? Vitae amet unde, magni animi nihil nulla vel fuga odio praesentium eaque expedita ab dolorum asperiores explicabo? Architecto labore quam velit vitae aliquam ea minima sint, fugiat numquam quod sit modi similique asperiores. Consectetur inventore qui fuga esse iusto? Repudiandae amet laborum accusantium aut aliquam molestiae porro libero laudantium iste eos explicabo reprehenderit ullam dolorum mollitia suscipit, similique fugiat dicta impedit rerum asperiores sed distinctio sapiente minima fuga. Exercitationem, obcaecati?</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="testmonial-nav text-center">
                  {status === 'loading' ? [...new Array(3)].map((_, index) => <VideoInfoSkeleton key={index} />) :
                     videoBottom.map(obj =>
                        <div key={obj.video_url} className="single-video">
                           <iframe src={obj.video_url} frameBorder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen></iframe>
                           <div className="video-intro">
                              <h4>{obj.title}</h4>
                           </div>
                        </div>
                     )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default VideoInfo