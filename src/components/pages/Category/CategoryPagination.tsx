import React from 'react'
import { setCategorryPage } from '../../redux/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

const CategoryPagination: React.FC = () => {

   const dispatch = useAppDispatch()
   const { categoryPage } = useAppSelector(state => state.filterReducer)

   return (
      <div className="pagination-area pb-45 text-center">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="single-wrap d-flex justify-content-center">
                     <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">

                           <li onClick={() => dispatch(setCategorryPage(categoryPage - 1))} className={`page-link ${categoryPage === 1 ? 'invisible' : ''}`}><span className="flaticon-arrow roted"></span></li>
                           {[...Array(5)].map((_, index) => <li onClick={() => dispatch(setCategorryPage(index + 1))} key={index} className={`page-link ${categoryPage === index + 1 ? 'active' : ''}`}>{index + 1}</li>)}
                           <li onClick={() => dispatch(setCategorryPage(categoryPage + 1))} className={`page-link ${categoryPage === 5 ? 'invisible' : ''}`}><span className="flaticon-arrow "></span></li>

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