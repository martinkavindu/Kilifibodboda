import React from 'react'
import '../../styles/Serviceslist.css'
import { Col } from 'reactstrap'
import serviceData from '../../Assets/img/data/servicedata'

const Serviceslist = () => {
  return (
serviceData.map(item =>(
 <ServiceItem item={item} key={item.id}/>   
))
  )
}
const ServiceItem = ({item})=>(
    <Col lg ='4' md= '4' className='mb-3'>
    <div className='service-item mb-3'>
        <span className='mb-3 d-inline-block'>
<i class={item.icon}/>
<h6> {item.title}</h6>
<p className='section-description'>{item.desc}
</p>
        </span>
        </div>    
    </Col>
)

export default Serviceslist