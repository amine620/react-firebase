import React, { useContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { context } from '../../context/Provider'
import { auth } from '../../firebase/config'
import Logout from '../Auth/Logout'
import Blog from './Blog'

export default function Blogs() {
   const {blogs}=useContext(context)

   const [user,setuser]=useState({})
   useEffect(() => {
       setuser(auth)
       console.log(user);
   }, []);


   if(localStorage.getItem('isAuth')==null)
   {
     window.location='/login'
     return ''
   }
    return (
        <div className="homePage">
         <Logout/>
        
        {
          blogs.map(blog=>(
            <Blog key={blog.id} data={blog}  />
          ))
        }
          

        </div>
    )
}
