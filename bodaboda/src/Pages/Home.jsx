import React from 'react'
import  HeroSlider from "../Components/UI/HeroSlider"
import Helmet from '../Components/Helmet/Helmet'
const Home = () => {
  return (
    <Helmet title="Home">
     <section className='p-0 hero-slider-section'>
      <HeroSlider/>
      </section> 
    </Helmet>
  )
}

export default Home