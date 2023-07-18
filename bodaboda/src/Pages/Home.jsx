import React from 'react'
import  HeroSlider from "../Components/UI/HeroSlider"
import Helmet from '../Components/Helmet/Helmet'
import { Container , Row ,Col } from 'reactstrap'
import Findriderform from '../Components/UI/Findriderform'
import Aboutsection from '../Components/UI/Aboutsection'
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
    </Helmet>
  )
}

export default Home