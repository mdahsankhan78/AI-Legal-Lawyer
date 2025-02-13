import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/AboutUs/About'
import Features from '../components/Features/Features'
import Categories from '../components/Categories/Categories'
import ContactUs from '../components/ContactUs/ContactUs'

const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features/>
      <Categories/>
      <ContactUs/>
    </div>
  )
}

export default Index