import React from 'react'
import Blogslist from '../Components/UI/Blogslist'
import Testimonial from '../Components/UI/Testimonial'
import BecomeRider from '../Components/UI/BecomeRider'
import  HeroSlider from "../Components/UI/HeroSlider"
import Helmet from '../Components/Helmet/Helmet'
import { Container , Row ,Col } from 'reactstrap'
import Findriderform from '../Components/UI/Findriderform'
import Aboutsection from '../Components/UI/Aboutsection'
import Serviceslist from '../Components/UI/Serviceslist'
const Home = () => {
  return (
    <Helmet title="Home">
     <section className='p-0 hero-slider-section'>
      <HeroSlider/>
      <div className='hero-form'>
        <Container>
          <Row className='form-row'>
           <Col lg = '4' md ='4'>
            <div className='find-riders-left'>
              <h2> Find Nearby bodaboda rider here</h2>
            </div>
            </Col> 
            <Col lg ='8' md='8'sm='12'>
              <Findriderform/>
            </Col>
          </Row>
        </Container>
      </div>
      </section> 
      <Aboutsection/>
       <section>
        <Row>
          <Col lg='12'className='mb-5 text-center' >
<h5 className='section-subtitle'>See Our</h5>
      
      <h2 className='section-title'> Awesome Services</h2>
          </Col>
          <Serviceslist/>
        </Row>
       </section>
      <BecomeRider/> 
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
  <h6 className='section-subtitle'> Our clients says</h6>
          <h2 className='section-title'>
           Testmonials 
          </h2>
            </Col>
            <Testimonial/> 
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
  <h6 className='section-subtitle'> Explore Our Blogs</h6>
          <h2 className='section-title'>
           Latest Blogs
          </h2>
            </Col>
            <Blogslist/> 
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default Home