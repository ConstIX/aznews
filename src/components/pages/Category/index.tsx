import React from 'react'
import { useLocation } from 'react-router-dom'
import { fetchCategory } from '../../redux/slices/categorySlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import Categories from './Categories'
import CategoryBlock from './CategoryBlock'
import CategoryPagination from './CategoryPagination'
import CategorySkeleton from './CategorySkeleton'
import FollowUs from './FollowUs'

const Category: React.FC = () => {

   const { pathname } = useLocation()
   const dispatch = useAppDispatch()

   const { category, status } = useAppSelector(state => state.categoryReducer)
   const { categoryId, categoryPage } = useAppSelector(state => state.filterReducer)

   React.useEffect(() => {
      const getCategory = async () => {
         const category = (categoryId > 0 ? `category=${categoryId} ` : '')
         dispatch(fetchCategory({ category, categoryPage: String(categoryPage) }))
      }
      getCategory()
   }, [categoryId, categoryPage])

   return (
      <>
         <div className="whats-news-area pt-50 pb-20">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="row d-flex justify-content-between">
                        <div className="col-lg-3 col-md-3">
                           <div className="section-tittle mb-30">
                              <h3>Whats New</h3>
                           </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                           <Categories />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12">

                           <div className="tab-content" id="nav-tabContent">
                              <div className="tab-pane fade show active">
                                 <div className="row">
                                    {status === 'loading' ? [...new Array(4)].map((_, index) => <CategorySkeleton key={index} />) : category.map(obj => <CategoryBlock {...obj} key={obj.title} />)}
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

                  <FollowUs />

               </div>
            </div>
         </div>

         {pathname === '/category' && <CategoryPagination />}
      </>
   )
}

export default Category