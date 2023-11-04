import React from "react";

function Photos(props){
    const post = props.post
         return <figure className="figure">
            <img className="photo" src={post.imageLink} alt="" />
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button">Remove</button>
            </div>
            
         </figure>
}

export default Photos