import React from 'react'

const CategoryPagination: React.FC = () => {
   return (
      <div className="pagination-area pb-45 text-center">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="single-wrap d-flex justify-content-center">
                     <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                           <li className="page-link"><span className="flaticon-arrow roted"></span></li>
                           {[...Array(3)].map((_, index) => <li key={index} className="page-link">{index + 1}</li>)}
                           <li className="page-link"><span className="flaticon-arrow "></span></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CategoryPagination