import React, { useContext, useEffect } from 'react'
import { context } from '../../context/Provider'
import Blog from './Blog'

export default function Blogs() {
   const {blogs}=useContext(context)
    return (
        <div className="homePage">

        
        {
          blogs.map(blog=>(
            <Blog key={blog.id} data={blog}  />
          ))
        }
          

        </div>
    )
}
