import React from 'react'

type SingleVideoProps = { link: string, title: string }

const SingleVideo: React.FC<SingleVideoProps> = ({ link, title }) => {
   return (
      <div className="single-video">
         <iframe src={link} frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
         <div className="video-intro">
            <h4>{title}</h4>
         </div>
      </div>
   )
}

export default SingleVideo