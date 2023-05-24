import React from "react"
import { Route, Routes } from "react-router-dom"
import './scss/style.scss'

import Header from "./components/pages/Header"
import Home from "./components/pages/Home"
import Category from "./components/pages/Category"
import About from "./components/pages/About"
import LatestNews from "./components/pages/LatestNews"
import Details from "./components/layouts/Details"
import Contact from "./components/pages/Contact"
import Blog from "./components/pages/Blog"
import Footer from "./components/Footer"
import SingleBlog from "./components/layouts/SingleBlog"

function App() {

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
            <Route path='/details' element={<Details />} />
            <Route path='/single' element={<SingleBlog />} />
         </Routes>

         <Footer />
      </>
   )
}

export default App
