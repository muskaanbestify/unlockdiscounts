import React from 'react';
import './blogNew.css'
function ImageContainer({src, description, top, left}) {
    
    const imageStyle = {
        position: 'absolute',
        top: top,
        left: left,
    }

    return (
            <img className = 'image_container'
            alt = {description}
            src = {src}  
            style = {imageStyle} />
    );
}


export default ImageContainer;