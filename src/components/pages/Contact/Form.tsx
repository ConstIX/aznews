import React from 'react'

const Form: React.FC = () => {
   return (
      <form className="form-contact contact_form mb-80" action="" method="post"
         id="contactForm">
         <div className="row">
            <div className="col-12">
               <div className="form-group">
                  <textarea className="form-control w-100 error" name="message" id="message" cols="30"
                     rows="9" placeholder="Enter Message"></textarea>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <input className="form-control error" name="name" id="name" type="text" placeholder="Enter your name" />
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <input className="form-control error" name="email" id="email" type="email" placeholder="Email" />
               </div>
            </div>
            <div className="col-12">
               <div className="form-group">
                  <input className="form-control error" name="subject" id="subject" type="text" placeholder="Enter Subject" />
               </div>
            </div>
         </div>
         <div className="form-group mt-3">
            <button type="submit" className="button button-contactForm boxed-btn">Send</button>
         </div>
      </form>
   )
}

export default Form