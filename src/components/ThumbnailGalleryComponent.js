import React from 'react';
import ThumbNailImages from './ThumbnailImagesComponent';

function ThumbnailGallery({ thumbnails, onClick }) {
    console.log(thumbnails)

    return (
        <>
            <ThumbNailImages
                thumbnails={thumbnails}
                onClick={onClick}
            // index={index}
            />
        </>
    )
}

export default ThumbnailGallery;