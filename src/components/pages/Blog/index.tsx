import React from 'react'

import BlogItem from './BlogItem'
import BlogPagination from './BlogPagination'
import SearchWidget from './Widgets/SearchWidget'
import PostWidget from './Widgets/PostWidget'
import PopularWidget from './Widgets/PopularWidget'
import TagWidget from './Widgets/TagWidget'
import SingleWidget from './Widgets/SingleWidget'
import NewsWidget from './Widgets/NewsWidget'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchBlog } from '../../redux/slices/blogSlice'

const Blog: React.FC = () => {

   const dispatch = useAppDispatch()
   const { blog, status } = useAppSelector(state => state.blogReducer)

   const getBlog = async () => {
      dispatch(fetchBlog())
   }
   React.useEffect(() => {
      getBlog()
   }, [])

   return (
      <div className="blog_area section-padding">
         <div className="container">
            <div className="row">

               <div className="col-lg-8 mb-5 mb-lg-0">
                  <div className="blog_left_sidebar">
                     {blog.map((obj: any) => <BlogItem key={obj.title} {...obj} />)}

                     <BlogPagination />
                  </div>
               </div>

               <div className="col-lg-4">
                  <div className="blog_right_sidebar">
                     <SearchWidget />
                     <PostWidget />
                     <PopularWidget />
                     <TagWidget />
                     <SingleWidget />
                     <NewsWidget />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Blog