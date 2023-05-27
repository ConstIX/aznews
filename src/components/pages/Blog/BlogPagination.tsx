import React from 'react'
import { setPage } from '../../redux/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

const BlogPagination: React.FC = () => {

   const dispatch = useAppDispatch()
   const { page } = useAppSelector(state => state.filterReducer)

   return (
      <nav className="blog-pagination justify-content-center d-flex">
         <ul className="pagination">

            <li onClick={() => dispatch(setPage(page - 1))} className={`page-link ${page === 1 ? 'invisible' : ''}`} aria-label="Previous"><i className="ti-angle-left"></i></li>
            {[...Array(2)].map((_, index) => <li onClick={() => dispatch(setPage(index + 1))} key={index} className={`page-link ${page === index + 1 ? 'active' : ''}`}>{index + 1}</li>)}
            <li onClick={() => dispatch(setPage(page + 1))} className={`page-link ${page === 2 ? 'invisible' : ''}`} aria-label="Next"><i className="ti-angle-right"></i></li>

         </ul>
      </nav>
   )
}

export default BlogPagination