import React from 'react'
import { useState } from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Map from '../components/Map'
import Menu from '../components/Menu'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const Home = () => {
  const[open,setOpen] = useState(false)


  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className='w-full h-full overflow-y-scroll'>
        <Header/>
        <Menu open={open} handleOpen={handleOpen}/>
        <section id='hero'>
        <Hero/>
        </section>
        <section id='about'>
        <Intro/>
        </section>
        <section id='services'>
        <Features/>
        </section>
        <section id='testimonials'>
        <Testimonials/>
        </section>
        <Services/>
        <section id='contact'>
        <Form/>
        </section>
        <section id='map'>
        <Map/>
        </section>
        <Footer/>
    </div>
  )
}

export default Home