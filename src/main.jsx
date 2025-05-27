import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Home02 from './pages/Home02.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Room from './pages/Room.jsx'
import SingleRoom from './pages/SingleRoom.jsx'
import Blog from './pages/Blog.jsx'
import SingleBlog from './pages/SingleBlog'
import Page404 from './pages/Page404.jsx'
import Contact from './pages/Contact'



createRoot(document.getElementById('root')).render(
   
     <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Example routes — replace with your actual components */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home1" element={<HomePage />} />
        <Route path="/home2" element={<Home02 />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/pages/room" element={<Room />} />
        <Route path="/pages/single-room" element={<SingleRoom />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/pages/single-blog" element={<SingleBlog />} />
        <Route path="/pages/404" element={<Page404 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  
)
