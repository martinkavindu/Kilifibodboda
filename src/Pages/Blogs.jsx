import React from 'react'
import Blogslist from '../Components/UI/Blogslist'
import Helmet from '../Components/Helmet/Helmet'
import {Container, Row ,Col} from 'reactstrap'
import CommonSection from '../Components/UI/CommonSection'
const Blogs = () => {
  return (
   <Helmet title='Blogs'>
<CommonSection title= 'Blogs'/>
    <section>
      <Container>
        <Row>
          <Blogslist/>
          <Blogslist/>
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Blogs