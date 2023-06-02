import React from 'react'
import { useLocation } from 'react-router-dom'
import { fetchCategory } from '../../redux/slices/categorySlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

// import whatNews1 from '../../../assets/img/news/whatNews1.jpg'
// import whatNews2 from '../../../assets/img/news/whatNews2.jpg'
// import whatNews3 from '../../../assets/img/news/whatNews3.jpg'
// import whatNews4 from '../../../assets/img/news/whatNews4.jpg'

import Categories from './Categories'
import CategoryBlock from './CategoryBlock'
import CategoryPagination from './CategoryPagination'
import FollowUs from './FollowUs'

const Category: React.FC = () => {

   const { pathname } = useLocation()
   const dispatch = useAppDispatch()
   const { category, status } = useAppSelector(state => state.categoryReducer)

   React.useEffect(() => {
      const getCategory = async () => {
         dispatch(fetchCategory())
      }
      getCategory()
   }, [])

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

                              {/* <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                 <div className="whats-news-caption">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews1} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews2} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews3} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews4} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                 <div className="whats-news-caption">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews1} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews2} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews3} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews4} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                 <div className="whats-news-caption">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews1} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews2} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews3} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews4} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                 <div className="whats-news-caption">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews1} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews2} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews3} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews4} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                                 <div className="whats-news-caption">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews1} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews2} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews3} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews4} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                 <div className="whats-news-caption">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews1} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews2} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews3} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6">
                                          <div className="single-what-news mb-100">
                                             <div className="what-img">
                                                <img src={whatNews4} alt="" />
                                             </div>
                                             <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div> */}

                              <div className="tab-pane fade show active">
                                 <div className="row">
                                    <CategoryBlock />
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