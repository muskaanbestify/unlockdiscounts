import React from 'react';
import DescriptionContainer from './DescriptionContainer';
import data from './Data';

function DescriptionRender() {
    return (
        <div>
        {data.descriptions.map((desc, id) => (
            <DescriptionContainer 
                key={id}
                headerText={desc.headerText}
                descriptionText={desc.descriptionText}
                top={desc.top}
                left={desc.left}
            />
        ))}

        </div>
    );
}

export default DescriptionRender;