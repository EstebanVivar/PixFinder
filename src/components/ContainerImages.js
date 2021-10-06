import React from 'react';
import Gallery from 'react-grid-gallery';
const ContainerImages = ({ Results }) => {
    let ImagesJSON = []

    function DATA() {
        Results.sort(() => Math.random() - Math.random())
            .find(() => true);
        Results.map(image => (
            ImagesJSON.push({
                src: image.largeImageURL,
                thumbnail: image.previewURL,
                thumbnailWidth: image.previewWidth,
                thumbnailHeight: image.previewHeight,
                thumbnailCaption:
                    <div style={{ textAlign: "center" }}>
                        <a target="_blank" rel="noreferrer" href={image.largeImageURL} download className="badge badge-dark mb-1" style={{
                            color: "white", fontFamily: 'Varela Round', textAlign: "center"
                        }}
                        >
                            Download
                        </a>
                    </div>
            })))
    }
    DATA();
    return (
        <div className="container">
            <Gallery enableImageSelection={false} images={ImagesJSON} backdropClosesModal={true} />
        </div>

    );
}

export default ContainerImages;