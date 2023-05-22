import React from 'react'

type commentListProps = { avatar: any, text: string, user: string, date: string }

const CommentList: React.FC<commentListProps> = ({ avatar, text, user, date }) => {
   return (
      <div className="comment-list">
         <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
               <div className="thumb">
                  <img src={avatar} alt="" />
               </div>
               <div className="desc">
                  <p className="comment">{text}</p>
                  <div className="d-flex justify-content-between">
                     <div className="d-flex align-items-center">
                        <h5>
                           <a href="#">{user}</a>
                        </h5>
                        <p className="date">{date}</p>
                     </div>
                     <div className="reply-btn">
                        <a href="#" className="btn-reply text-uppercase">reply</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CommentList