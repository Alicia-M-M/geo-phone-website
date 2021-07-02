import React from 'react';

function ActiveThumb({ activeThumbnail }) {
    console.log({activeThumbnail});
    return (
        <div className="row">
            <div className="col-12 mx-auto mb-4 pt-3">
                <img className="img-fluid mx-auto d-block" src={activeThumbnail.imgHero} />
                
            </div>
        </div>
    )
}

export default ActiveThumb;