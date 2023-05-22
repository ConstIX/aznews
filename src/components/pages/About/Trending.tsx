import React from 'react'

const Trending: React.FC = () => {
   return (
      <div className="row">
         <div className="col-lg-12">
            <div className="trending-tittle">
               <strong>Trending now</strong>

               <div className="trending-animated">
                  <ul id="js-news" className="js-hidden">
                     <li className="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                     <li className="news-item">Spondon IT sit amet, consectetur.......</li>
                     <li className="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  </ul>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Trending