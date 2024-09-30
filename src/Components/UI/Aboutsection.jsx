import React from 'react'
import { Container ,Row ,Col } from 'reactstrap'
import '../../styles/aboutsection.css'
import image5 from '../../Assets/img/image2.jpg';
const Aboutsection = () => {
  return (
  <section className='about-section'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
             <div className='about-section-content'>
              <h4 className='section-subtitle'>
                About Us
                </h4>  
                <h2 className='section-title'>
                    Welcome to our Kilifi BodaBoda platform
                </h2>
                <p className='section-description'>
                Kilifi Bodaboda platform, we are a fast-paced, 
                entrepreneurial association with deep roots in boda boda services in town. 
                Rider Mobility provides products for mobile app solutions, effortless payment, 
                paratransit, business travel, and advertising that reaches captive audiences of thousands
                </p>
                 <div className='about-section-item d-flex align-items-center'>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  We are creating a comprehensive mobility platform for getting bodaboda rider to save Time

                    </p>  
                 </div>
                 
                 <div className='about-section-item d-flex align-items-center'>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  We are creating a comprehensive mobility platform for getting bodaboda rider to save Time
                    </p>  
                 </div>
                </div>   
                 </Col>
            <Col lg='6' md='6'> 
            <div className='about-img'>
              <img src={image5} alt='' className='w-100' style={{borderRadius:'5px'}}/> 
            </div>

            </Col>

        </Row>
    </Container>
  </section>
  )
}

export default Aboutsection