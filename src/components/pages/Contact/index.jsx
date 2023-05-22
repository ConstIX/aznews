import React from 'react'
import Form from './Form'

const Contact = () => {

   return (
      <div className="contact-section">
         <div className="container">

            <div className="row">
               <div className="col-12">
                  <h2 className="contact-title">Get in Touch</h2>
               </div>
               <div className="col-lg-8">
                  <Form />
               </div>
               <div className="col-lg-3 offset-lg-1">
                  <div className="media contact-info">
                     <span className="contact-info__icon"><i className='ti-home'></i></span>
                     <div className="media-body">
                        <h3>Buttonwood, California.</h3>
                        <p>Rosemead, CA 91770</p>
                     </div>
                  </div>
                  <div className="media contact-info">
                     <span className="contact-info__icon"><i className='ti-tablet'></i></span>
                     <div className="media-body">
                        <h3>+1 253 565 2365</h3>
                        <p>Mon to Fri 9am to 6pm</p>
                     </div>
                  </div>
                  <div className="media contact-info">
                     <span className="contact-info__icon"><i className='ti-email'></i></span>
                     <div className="media-body">
                        <h3>support@colorlib.com</h3>
                        <p>Send us your query anytime!</p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Contact