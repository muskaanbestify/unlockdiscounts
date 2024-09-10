import React from 'react';
import './blogNew.css'

function DescriptionContainer({headerText, descriptionText, top, left}) {
    
    const container_style = {
            positon: 'absolute',
            top: top,
            left: left,
    }

    return (
        <div className='description_container' style = {container_style}>
                <div className='desc_header'>
                    {headerText}
                    <div className='desc_text'>
                    {descriptionText}
                    </div>
                    <button className='desc_button'>
                        Read More
                    </button>
                </div>
        </div>  
    );
}

export default DescriptionContainer;