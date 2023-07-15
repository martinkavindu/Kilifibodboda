
import React from 'react'
import { Container, Row, Col ,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';
const quickLinks =[
  {
    path:'/about',
    display: 'About'
  },
  {
    path:'/#    ',
    display: 'Privacy Policy'
  },
  {
    path:'/riders',
    display: 'Riders Listing'
  },
  {
    path :'/contact',
    display:'Contact'
  },
  {
    path:'/blogs',
    display:'Blogs'
  }
]
const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
  <footer className='footer'>
    <Container>
      <Row>
        <Col lg-4 md-4 sm-12>
        <div className='logo footer-logo'>
    <h1>
        <Link to='/' className='d-flex align-items-center
        gap-3'>
        <i class="ri-motorbike-fill"></i>
        <span> Kilifi Town<br/> Bodaboda Riders</span>
        </Link>
    </h1>
</div>
<p className='footer-logo-content'>
We want people on our team who reflect our values of outstanding service and utmost reliability, 
which is why we’re always searching for new like-minded Bodaboda Riders to join our growing fleet
</p>
        </Col>
        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
         
         <h5 className='footer-link-title '>
          Quick Links</h5>
<ListGroup>
  {
    quickLinks.map ((item,index) =>(
      <ListGroupItem key={index} className= ' quick-links p-0 mt-3 ' >
<Link to ={item.path}>
{item.display}
</Link>
      </ListGroupItem>
    ))
  }
</ListGroup>
          </div>

        </Col>
        <Col lg='3'md='4'sm='6'>
          <div className='mb-4'>
          <h5 className='footer-link-title mb-4'>
          Head office</h5>
          <p className='office-info'>
            Kilifi Town , Kenya
          </p>
          <p className='office-info'>
          Phone: +254741934896
          </p>
          <p className='office-info'>
         Email: Kilifibodaboda@gmail.com
          </p>
          <p className='office-info'>
           Office Time: 8.am - 7pm
          </p>
          </div>
        </Col>
        <Col lg='3' md='4'>
          <div className='mb-4'>
          <h5 className='footer-link-title'>
          Newsletter</h5>
          <p className='section-description'>
            Subscribe our newsletter</p>
             <div className='newsletter'>
              <input type='email' placeholder='Enter email address'/>
              <span><i class="ri-send-plane-fill"></i></span>
              </div>        
                </div>
        </Col>
        <Col lg='12'>
          <div className='footer-bottom'>
            <p className='section-description d-flex align-items-center justify-content-center
            gap-1 pt-4'>
            <i class="ri-copyright-fill"></i>Copyright {year}, Developed by martin kavindu.
All rights reserved </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer