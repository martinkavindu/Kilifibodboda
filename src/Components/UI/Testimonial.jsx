import React from 'react'
import '../../styles/Testomonial.css'
import Slider from 'react-slick'
import profile1 from '../../Assets/img/profile5.jpg'
import profile2 from '../../Assets/img/profile3.jpg'
import profile3 from '../../Assets/img/profile4.jpg'
import profile4 from '../../Assets/img/profile5.jpg'
const Testimonial = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
slidesToShow:1,
slidesToScroll:1,
},
            },
        ],

    }
  return (
    <Slider {...settings}>
      <div className='testimonial py-4 px-3'>
       <p className='section-description'>
       “The application is superior
        to the other competitors in the market, and most importantly presents more
           landscape transparency, fee visibility, and ease of access to vehicles.
        I have jumped the  rider! :
        </p> 
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={profile1} alt=''className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className='mb-0 mt-3'>Martin jose</h6>
                <p className='section-description'>Customer
                
        </p>
            </div>
        </div>
        </div>  
        <div className='testimonial py-4 px-3'>
       <p className='section-description'>
       “The application is superior
        to the other competitors in the market, and most importantly presents more
           landscape transparency, fee visibility, and ease of access to vehicles.
        I have jumped the  rider! :
        </p> 
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={profile2} alt=''className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className='mb-0 mt-3'>Martin jose</h6>
                <p className='section-description'>Customer
                
        </p>
            </div>
        </div>
        </div>  
        <div className='testimonial py-4 px-3'>
       <p className='section-description'>
       “The application is superior
        to the other competitors in the market, and most importantly presents more
           landscape transparency, fee visibility, and ease of access to vehicles.
        I have jumped the  rider! :
        </p> 
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={profile3} alt=''className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className='mb-0 mt-3'>Martin jose</h6>
                <p className='section-description'>Customer
                
        </p>
            </div>
        </div>
        </div>  
        <div className='testimonial py-4 px-3'>
       <p className='section-description'>
       “The application is superior
        to the other competitors in the market, and most importantly presents more
           landscape transparency, fee visibility, and ease of access to vehicles.
        I have jumped the  rider! :
        </p> 
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={profile4} alt=''className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className='mb-0 mt-3'>Martin jose</h6>
                <p className='section-description'>Customer
                
        </p>
            </div>
        </div>
        </div>  
    </Slider>
  )
}

export default Testimonial