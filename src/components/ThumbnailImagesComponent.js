import React, { useState, useRef, useEffect } from 'react';

function BorderStyles({ img, color, onClick, onClick2, index, title }) {
    const [hideBorder, sethideBorder] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log("You clicked outside of me!");
                sethideBorder(false)
            } else {
                console.log("You clicked inside of me!");
                sethideBorder(true)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref} onClick={onClick2} className={`col-4 text-center pb-3 thumbNailPhones`}>
            <img
                className={`img-fluid ${color ? "borderRed" : "borderClear"} ${hideBorder ? 'activeBoxShadow' : 'inActiveBoxShadow'}`}
                src={img}
                onClick={onClick}
                data-index={index}
            >
            </img>
            <h6 style={{ whiteSpace: 'pre-line' }}>{title}</h6>
        </div>
    );
};

function ThumbNailImages({ thumbnails, onClick }) {
    const [selected, setBorder] = useState();
    return (
        <div className="row">
            {thumbnails.map((thumbnail, index) => (
                <BorderStyles
                    img={thumbnail.imgThumbnail}
                    title={thumbnail.title}
                    // key={thumbnail}
                    // count={thumbnail}
                    onClick={onClick}
                    index={index}
                    onClick2={() => setBorder(thumbnail, console.log('look im clicked!'))}
                    color={thumbnail === selected}
                />
            ))}
        </div>
    );
};


export default ThumbNailImages;
