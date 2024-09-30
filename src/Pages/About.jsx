import React from 'react'
import '../styles/about.css'
import image5 from '../Assets/img/image7.jpeg';
import { Container, Row ,Col } from 'reactstrap';
import BecomeRider from '../Components/UI/BecomeRider';
import Aboutsection from '../Components/UI/Aboutsection';
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../Components/UI/CommonSection';
const About = () => {
  return (
  <Helmet title='About Us'>
<CommonSection title='About Us'/>
<Aboutsection/>
<section className='about-page-section'>
  <Container>
    <Row>
    <Col lg='6'md='6' sm='12'>
  <div className='about-page-img'>
    <img src= {image5} alt='' className='w-100 rounded-3'/>

  </div>
      </Col>  
      <Col lg='6'md='6' sm='12'>
  <div className='about-page-content'>
   <h2 className='section-title'>We are commited to
    provide safe Ride solutions
</h2> 
<p className='section-description'>
Are you looking to try out Bodaboda but don’t have a smartphone? Perhaps you don’t have enough space on your phone for the app or need to book from a PC. In any case, that’s not a problem: you don’t need to have
 the app in order to request a ride with us.
</p>
<p className='section-description'>
Are you looking to try out Bodaboda but don’t have a smartphone? Perhaps you don’t have enough space on your phone for the app or need to book from a PC. In any case, that’s not a problem: you don’t need to have
 the app in order to request a ride with us.
</p>
<div className='d-flex align-items-center gap-3 mt-4'>
  <span className='fs-4'><i class="ri-phone-line"></i></span>
<div>
 <h6 className='section-subtitle'>
  Need Any Help?
  </h6> 
  <h4>+254741934896</h4>
</div>
</div>
  </div>
  </Col> 
    </Row>
  </Container>
</section>
 <BecomeRider/>
 <section>
  <Container>
    <Row>
      <Col lg='12' className='mb-5 text-center'>
      <h6 className='section-subtitle'>
HOW?
      </h6>
      <h2 className='section-title'>
        How it works
         </h2>
      </Col>
    </Row>
  </Container>
 </section>
  </Helmet>
  )
}

export default About