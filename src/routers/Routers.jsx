import React from 'react';
import { Routes ,Route ,Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Blogs from '../Pages/Blogs';
import Blogdetails from '../Pages/Blogdetails';
import Riderslisting from '../Pages/Riderslisting';
import Ridersdetails from '../Pages/Ridersdetails';
import Notfound from '../Pages/Notfound';


const Routers = () => {
  return (
<Routes>
<Route index  element={<Home/>}/>
      <Route path="/home" element={<Home />} />
    <Route path='/about' element={<About/>}/> 
     <Route path='/blogs' element={<Blogs/>}/>
     <Route path='/blogdetails' element={<Blogdetails/>}/>
     <Route path='/riders' element={<Riderslisting/>}/>
     <Route path='/ridersdetails' element={<Ridersdetails/>}/>
     <Route  path='/contact' element={<Contact/>}/>
     <Route path='/notfound' element={<Notfound/>}/>
</Routes>
  )
}

export default Routers