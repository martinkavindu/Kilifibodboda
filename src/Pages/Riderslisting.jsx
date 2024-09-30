import React from 'react'
import CommonSection from '../Components/UI/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import {Container,Row , Col} from 'reactstrap'
const Riderslisting = () => {
  return (
    <Helmet title='Riders'>
<CommonSection title='Riders '/>
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <div className='d-flex align-items-center gap-5 mb-5'>
<span className='d-flex align-items-center gap-2'><i class="ri-sort-asc"></i> Sort By</span>
 <select name=''id=''>
  <option >Select</option>
  <option value='low'>Low to High</option>
  <option value='high'>High to Low</option>
 </select>
        </div>
      </Col>
    </Row>
  </Container>
</section>
    </Helmet>
  )
}

export default Riderslisting