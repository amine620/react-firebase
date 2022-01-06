import React from 'react'

export default function Blog(props) {
    return (
        <div className="post">
                <div className="postHeader">
                    <div className="title">
                        <h1> {props.data.title}</h1>
                    </div>
                    <div className="deletePost">
                        <button
                        >
                            {" "}
                            &#128465;
                        </button>
                    </div>
                </div>
                <div className="postTextContainer"> {props.data.content}</div>

            </div>
    )
}
