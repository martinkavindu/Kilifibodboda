
import React from 'react' 
import '../../styles/Commonsection.css'
import { Container } from 'reactstrap'
const CommonSection = ({title}) => {
  return (
  <section className='common-section'>
<Container className='text-center'>
    <h1 className='text-light'>{title}
    </h1>
</Container>
  </section>
  )
}

export default CommonSection