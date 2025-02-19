import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/AboutUs/About'
import Features from '../components/Features/Features'
import Categories from '../components/Categories/Categories'
import ContactUs from '../components/ContactUs/ContactUs'
import Carousel from '../components/Blogs/Carousel'
import Footer from '../components/Reusable/Footer'
import Navbar from '../components/Reusable/Navbar'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features/>
      <Categories/>
      <ContactUs/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default Index