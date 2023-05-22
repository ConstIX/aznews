import React from 'react'

const BlogPagination: React.FC = () => {
   return (
      <nav className="blog-pagination justify-content-center d-flex">
         <ul className="pagination">

            <li className="page-link" aria-label="Previous"><i className="ti-angle-left"></i></li>
            {[...Array(3)].map((_, index) => <li key={index} className="page-link">{index + 1}</li>)}
            <li className="page-link" aria-label="Next"><i className="ti-angle-right"></i></li>

         </ul>
      </nav>
   )
}

export default BlogPagination