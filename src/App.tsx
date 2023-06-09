import React from "react"
import { Route, Routes } from "react-router-dom"
import './scss/style.scss'

import Header from "./components/Header"
import Home from "./components/pages/Home"
import Category from "./components/pages/Category"
import About from "./components/pages/About"
import LatestNews from "./components/pages/LatestNews"
import Details from "./components/layouts/Details"
import Contact from "./components/pages/Contact"
import Blog from "./components/pages/Blog"
import Footer from "./components/Footer"
import SingleBlog from "./components/layouts/SingleBlog"
import CategoryDetails from "./components/layouts/CategoryDetails"

import { useAppDispatch } from "./components/redux/store"
import { fetchVideo } from "./components/redux/slices/videoSlice"
import { fetchRightNews } from "./components/redux/slices/rightNewsSlice"

function App() {

   const dispatch = useAppDispatch()
   const getVideo = async () => {
      dispatch(fetchVideo())
   }
   const getNews = async () => {
      dispatch(fetchRightNews())
   }

   React.useEffect(() => {
      getNews()
      getVideo()
   }, [])

   return (
      <>
         <Header />

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Category />} />
            <Route path='/about' element={<About />} />
            <Route path='/latest' element={<LatestNews />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/details/:homeId' element={<Details />} />
            <Route path='/single/:pubDate' element={<SingleBlog />} />
            <Route path='/category-details/:id' element={<CategoryDetails />} />
         </Routes>

         <Footer />
      </>
   )
}

export default App
