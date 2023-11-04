import React from "react";
import Photos from "./Photos";

function Photowall(props) {
    return <div className="photoGrid">
        {props.posts.map((post, index) => <Photos key={index} post={post} />)}
    </div>
}



export default Photowall; 