import React from 'react'
import '../../styles/becomerider.css';
import  riderimg from '../../Assets/img/image6.jpeg'
import{Container,Row,Col} from 'reactstrap'
const BecomeRider = () => {
  return (
    <section className='become-rider'>
      <Container>
        <Row>
          <Col lg='6' md='6'sm='12'>
<img src={riderimg} alt='' className='w-100'  style={{borderRadius:'5px'}}/>
          
          </Col>
          <Col lg='6' md='6'sm='12'>
<h2 className='section-title become-rider-title'>
  Do you want to Earn from Our platform? So Don't Be Late
</h2>
<button className='btn become-rider-btn mt-4'>
  Become a Bodaboda Rider
</button>
</Col>

        </Row>
      </Container>
    </section>
  )
}

export default BecomeRider