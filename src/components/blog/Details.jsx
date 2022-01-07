import React, { useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { useState } from 'react/cjs/react.development';
import Logout from '../Auth/Logout';

const Details = () => {

    const param=useParams()
    const [info,setinfo]=useState({})
    useEffect(async() => {
       
        const docRef = doc(db, "blogs", param.id);
        const docSnap = await getDoc(docRef);

        setinfo(docSnap.data()) 

    }, []);


    if(localStorage.getItem('isAuth')==null)
   {
     window.location='/login'
     return ''
   }
   
    return (
        <div className='container mt-5'>
            <Logout/>
            <ul className="list-group mt-5">
                <li className="list-group-item active">blog details</li>
                <li className="list-group-item">{info.title}</li>
                <li className="list-group-item">{info.content}</li>
            </ul>
        </div>
    );
}

export default Details;
