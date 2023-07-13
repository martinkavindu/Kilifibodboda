import React from 'react';
import { Routes ,Route ,Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/Home';
import Blogs from '../Pages/Blogs';
import Blogdetails from '../Pages/Blogdetails';
import Riderslisting from '../Pages/Riderslisting';
import Ridersdetails from '../Pages/Ridersdetails';
import Notfound from '../Pages/Notfound';


const Routers = () => {
  return (
<Routes>
    <Route path='/' element = {<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/> 
     <Route path='/blogs' element={<Blogs/>}/>
     <Route path='/blogdetails' element={<Blogdetails/>}/>
     <Route path='/riderslisting' element={<Riderslisting/>}/>
     <Route path='/ridersdetails' element={<Ridersdetails/>}/>
     <Route path='/notfound' element={<Notfound/>}/>
</Routes>
  )
}

export default Routers