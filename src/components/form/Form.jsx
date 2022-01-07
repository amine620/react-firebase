import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../context/Provider'
import Logout from '../Auth/Logout'

export default function Form() {

      const {create}=useContext(context)

      const [post,setpost]=useState({})


      const handleChange=(e)=>{
            setpost({
              ...post,
              [e.target.name]:e.target.value
            })
      }



    
      if(localStorage.getItem('isAuth')==null)
      {
        window.location='/login'
        return ''
      }
    return (
      
        <div className="createPostPage">
         <Logout/>
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
          name='title'
          onChange={handleChange}
            placeholder="Title..."
           
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
          name='content'
          onChange={handleChange}
            placeholder="Post..."
           
          />
        </div>
        <button onClick={()=>create(post)} > Submit Post</button>
      </div>
    </div>
    )
}
