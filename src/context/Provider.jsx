import React, { createContext, useEffect, useState } from 'react'
import {addDoc, collection,getDocs,deleteDoc,doc} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useNavigate } from 'react-router-dom'



export const context=createContext()
export default function Provider(props) {

    const [blogs,setblogs]=useState([])
    const navigate=useNavigate()

  
    const postsCollectionRef = collection(db, "blogs")
    
    useEffect(() => {
        // get data from firebase  
       async function getData(){

                const data = await getDocs(postsCollectionRef);

                // loop and add data to blogList variable
                const blogList=data.docs.map(doc=>({...doc.data(),id:doc.id}))

                //add data to state
                setblogs(blogList)
        }
     getData()

    }, []);



    const create=(blog)=>{
        const postCollectionRef=collection(db,'blogs')
        addDoc(postCollectionRef,blog)
        .then(()=>{
            setblogs([...blogs,blog])
            navigate('/')
        })  
    }


    const remove=(id)=>{
        const blogDoc=doc(db,'blogs',id)
        deleteDoc(blogDoc)
        .then(()=>{
            const result=blogs.filter(blog=>blog.id!=id)
            setblogs(result)
        })
    }

    return (
        <div>
            <context.Provider value={{
                blogs,
                create,
                remove
            }}>
                {
                    props.children
                }
            </context.Provider>
        </div>
    )
}
