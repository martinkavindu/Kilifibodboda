import React from 'react'
import "../../styles/Findriderform.css"
import "../../styles/Findriderform.css"
import {Form , FormGroup} from 'reactstrap';

const Findriderform = () => {
  return (
   <Form className='form'>
    <div className='d-flex align-items-center justify-content-between flex-wrap'>
<FormGroup className='form-group'>
<input type='text' placeholder='Pick up Location' required/>
</FormGroup>
<FormGroup className='form-group'>
<input type='text' placeholder='To Location' required/>
</FormGroup>
<FormGroup className='form-group'>
<input type='date' placeholder=' Date'/>
</FormGroup>
<FormGroup className='form-group'>
<input className='journey-time' type='Time' placeholder='Journey Time'/>
</FormGroup>
<FormGroup className='select-group'>
    <select>
        <option value='Phone'>Near Landmark</option>
        <option value='Phone'>KIlifi primary</option>
        <option value='Phone'>pwani university</option>
        <option value='Phone'>almedina plaza</option>
    </select>
</FormGroup>
<FormGroup className='form-group'>
<button className='btn findrider-btn'>
   Search BodaBoda Rider 
</button>
</FormGroup>
    </div>
   </Form>
  )
}

export default Findriderform