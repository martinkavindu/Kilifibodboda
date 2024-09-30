import React from 'react'
import '../../styles/blogslist.css'
import {Col} from 'reactstrap'
import blogData from '../../Assets/img/data/Blogdata'
import { Link } from 'react-router-dom'
const Blogslist = () => {
  return (
<>
 {
    blogData.map(item=>(
        <BlogItem item={item} key={item.i}/> 
    ))
 }
</>
  )
};
const BlogItem = ({item})=>{
    const {imgUrl, title,author,date,description ,time} =item
    return(
    <Col lg='4' md ='6'sm='6' className='mb-5' >
        <div className='blog-item'>
            <img src={imgUrl}alt='' className='w-100'/>
            <div className='blog-info p-3'>
            <Link to={`/blogdetails/${title}`} className="blog-title">
            {title}
          </Link>
           <p className='section-description mt-3'>
            {
                description.length > 120 ? description.substr(0,100):
                description
            }
           </p>
           <Link to='/blogs/${title' className='learn-more'>Read More</Link>
           <div className='blog-time pt-3 mt-3 d-flex align-items-center justify-content-between '>
            <span className='blog-author'>
            <i class="ri-user-line"></i>{author}
            </span>
            <div className='d-flex align-items-center gap-3'>
                <span className='d-flex align-items-center gap-1 section-description '>
                <i class="ri-calendar-line"></i>{date}
                </span>
                <span className='d-flex align-items-center gap-1 section-description '>
                <i class="ri-time-line"></i>{time}
                </span>
                
            </div>

           </div>
            </div>
        </div>
    </Col>
    )
}

export default Blogslist