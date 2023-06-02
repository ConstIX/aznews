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

import { useAppDispatch } from "./components/redux/store"
import { fetchVideo } from "./components/redux/slices/videoSlice"
import { fetchRightNews } from "./components/redux/slices/rightNewsSlice"
import { fetchCategory } from "./components/redux/slices/categorySlice"

function App() {

   const dispatch = useAppDispatch()
   const getVideo = async () => {
      dispatch(fetchVideo())
   }
   const getNews = async () => {
      dispatch(fetchRightNews())
   }
   // const getCategory = async () => {
   //    dispatch(fetchCategory())
   // }

   React.useEffect(() => {
      getNews()
      getVideo()
      // getCategory()
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
         </Routes>

         <Footer />
      </>
   )
}

export default App
