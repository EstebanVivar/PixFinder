import React from 'react';
import Image from './Image';

const ContainerImages = ({ Results }) => {
    return (
        <div className="col-12 p-5 row">
            {Results.map(image => (
                <Image
                    key={image.id}
                    Image={image} />
            ))}
        </div>
    );
}

export default ContainerImages;