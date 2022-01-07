import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { context } from '../../context/Provider'

export default function Blog(props) {
    const {remove}=useContext(context)
    return (
        <div className="post">
                <div className="postHeader">
                    <div className="title">
                        <h1> {props.data.title}</h1>
                    </div>
                    <div className="deletePost">
                        <button
                        onClick={()=>remove(props.data.id)}
                        >
                            {" "}
                            &#128465;
                        </button>
                    </div>
                    <div >
                        <Link className='details' to={`/details/${props.data.id}`}>&#10064;</Link>
                    </div>
                </div>
                <div className="postTextContainer"> {props.data.content}</div>
            </div>
    )
}
