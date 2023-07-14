
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
    display: 'Car Listing'
  },
  {
    path :'/contact',
    display:'Contact'
  }
]
const Footer = () => {
  return (
  <footer className='footer'>
    <Container>
      <Row>
        <Col lg-4 md-4 sm-12>
        <div className='logo'>
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
        <Col lg-4 md-4 sm-6>
          <div className='mb-4'>
         
         <h5 className='footer-link-title'>
          Quick Links</h5>
<ListGroup>
  {
    quickLinks.map ((item,index) =>(
      <ListGroupItem key={index} className='p-0 mt-3' >
<Link to ={item.path}>
{item.display}
</Link>
      </ListGroupItem>
    ))
  }
</ListGroup>
          </div>

        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer