import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../../styles/Heroslider.css'

const HeroSlider = () => {
    const settings = {
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite:true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll:1
    }
  return (
<Slider {...settings} className='hero-slider'>
<div className='slider-item slider-item-01 mt-0'>
   <Container>
    <div className='slider-content'>
        <h6 className='text-light mb-3'>
            Call BodaBoda Rider to pick you
        </h6>
        <h1 className='text-light mb-4' >
             Reserve Now and Save Time</h1>
             <button className='btn reserve-btn mt-4'>
                <Link to='/riders'> Reserve Now </Link>
             </button>
    </div>
    </Container> 
</div>
<div className='slider-item slider-item-01 mt-0'>
   <Container>
    <div className='slider-content'>
        <h6 className='text-light mb-3'>
            Call BodaBoda Rider to pick you
        </h6>
        <h1 className='text-light mb-4' >
             Reserve Now and Save Time</h1>
             <button className='btn reserve-btn mt-4'>
                <Link to='/riders'> Reserve Now </Link>
             </button>
    </div>
    </Container> 
</div>
</Slider>
  )
}

export default HeroSlider