import React from 'react'
import { Container,Row , Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
const Header = () => {
  return (
    <header className='header'>
<div className='header-top'>
    <Container>
        <Row>
            <Col lg-6 md-6 sm-6> 
           <div className='header-top-left'>
            <span>Need help?</span>
            <span className='header-top-help'>
            <i class="ri-phone-fill"></i> +254 741934896
            </span>
            </div> 
            </Col>
            <Col lg-6 md-6 sm-6>
<div className='header-top-right d-flex align-items-center
justify-content-end gap-3'>
    <Link to='/' className='d-flex align-items-center gap-1'><i class="ri-login-circle-line"></i>Login</Link>
    <Link to='/' className='d-flex align-items-center gap-1' ><i class="ri-user-line"></i>Register</Link>
</div>
            </Col>
        </Row>
    </Container>
</div>
<div className='header-middle'>
    <Container>
        <Row>
            <Col lg-4 md-3 sm-4>
<div className='logo'>
    <h1>
        <Link to='/' className='d-flex align-items-center
        gap-3'>
        <i class="ri-motorbike-fill"></i>
        <span> Kilifi Town<br/> Bodaboda Riders</span>
        </Link>
    </h1>
</div>
            </Col>
            <Col lg-3 md-3 sm-4>
                <div className='header-location d-flex align-items-center gap-2'>
                    <span> <i class="ri-earth-fill"></i></span>
                    <div className='header-location-content'>
                        <h4> Kilifi Town</h4>
                        <h6> Kilifi County, Kenya</h6>
                    </div>
                </div>
            </Col>
            <Col lg-3 md-3 sm-4>
                <div className='header-location d-flex align-items-center gap-2 '>
                    <span> <i class="ri-time-line"></i></span>
                    <div className='header-location-content'>
                        <h4>Monday to Sunday</h4>
                        <h6> 5.00am to 10.00pm</h6>
                    </div>
                </div>
            </Col>
            <Col lg-2 md-3 sm-0 className='text-end'>
                <button className='header-btn btn '>
                    <Link to='/'>
                    <i class="ri-phone-line"> Request a call </i>
                    </Link>
                </button>
            </Col>
        </Row>
    </Container>
</div>
<div className='main-navbar'>
    <Container>
        <div className='navigation-wrapper d-flex align-items-center justify-content-between'>
            <span className='mobile-menu'>
            <i class="ri-menu-line"></i>
            </span>
        </div>
    </Container>
</div>
    </header>
  )
}

export default Header