import React, { createContext, useEffect, useState } from 'react'
import {addDoc, collection,getDocs} from 'firebase/firestore'
import { db } from '../firebase/config'



export const context=createContext()
export default function Provider(props) {

    const [blogs,setblogs]=useState([])

  
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

    const create=(post)=>{
        const postCollectionRef=collection(db,'blogs')
        addDoc(postCollectionRef,post)
    }
    return (
        <div>
            <context.Provider value={{
                blogs,
                create
            }}>
                {
                    props.children
                }
            </context.Provider>
        </div>
    )
}
