import React from 'react'
import SingleBlogHero from '../components/SingleBlogHero'
import SingleBlogContent from '../components/SingleBlogContent'
import CommentSection from '../components/CommentSection'
import Footer from '../components/Footer'

function SingleBlog() {
  return (
   <>
    <SingleBlogHero />
    <SingleBlogContent />
    <CommentSection />
    <Footer />
   </>
  )
}

export default SingleBlog