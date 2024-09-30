import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom' 
import Helmet from '../Components/Helmet/Helmet'
import blogData from '../Assets/img/data/Blogdata'
import { Container ,Row ,Col, Form ,FormGroup } from 'reactstrap'
const Blogdetails = () => {
  const {slug} = useParams()
  const blog = blogData.find(blog => blog.title = slug)
  useEffect( ()=>{
    window.scrollTo(0,0)
  },[blog]
  );
  return ( 
    <Helmet title={blog.title}>
   <Container> 
    <Row>
      <Col lg='8' md='8'>
<div className='blog-details'>
  <img src={blog.imgUrl} alt='' className='w-100'/>
  <h2 className='section-title mt-4'>{blog.title}</h2>
  <div className='blog-publisher d-flex align-items-center gap-4 mb-4'>
  <span className='blog-author'>
            <i class="ri-user-line"></i>{blog.author}
            </span>
            <span className='d-flex align-items-center gap-1 section-description '>
                <i class="ri-calendar-line"></i>{blog.date}
                </span>
                <span className='d-flex align-items-center gap-1 section-description '>
                <i class="ri-time-line"></i>{blog.time}
                </span>
  </div>
  <p className='section-description'>
    {blog.description}
  </p>
  <h6 className='ps-5 fw-normal'>
    <blockquote className='fs-4'> {blog.quote}</blockquote>
  </h6>
  <p className='section-description'>
    {blog.description}
  </p>
</div>
<div className='comment-list mt-5'>
  <h4 className='mb-5'> 3 Comments</h4>
  <div className='comment-content'>
    <h6> KIOKO charo</h6>
    <p className='section-description'>
      14 july ,2023
    </p>
    <p className='section-description'>
    Well done! Your loyal customer base is outstanding.
     Customers often ask for you by name and you have a lot of repeat customers as a result. Great job!
    </p>
  </div>
  <span className='replay d-flex align-items-center gap-1'>
  <i class="ri-reply-fill"></i>
Reply
  </span>
</div>
<div className='leave-comment-form mt-5'>
  <h4>Leave a Comment</h4>
 <p className='section-description'>
  You must sign in to make or comment a post
  </p> 
  <Form>
    <FormGroup className='d-flex gap-3'>
<input type='text'placeholder='Full name'/>
<input type='email' placeholder='Enter Email'/>
    </FormGroup>
    <FormGroup>
     <textarea rows='5' placeholder='Write Comment'className='w-100 py-2 px-3'>
      </textarea> 
    </FormGroup>
    <button className='btn comment-btn mt-3'>Post Comment</button>
  </Form>
</div>
      </ Col>
    </Row>
   </Container>
   </Helmet>
  )
}

export default Blogdetails