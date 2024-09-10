import React from 'react';
import data from './Data';
import ImageContainer from './ImageContainer';

function ImageRender() {
    
  return (
        <div>
            {data.images.map((img, id) => (
        <ImageContainer 
          key={id}
          src={img.src}
          alt={img.alt}
          top={img.top}
          left={img.left}
        />
      ))}
        </div>
    );
}

export default ImageRender;