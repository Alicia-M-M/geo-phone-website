import React, { useState } from 'react';
import ActiveThumb from './ActiveThumbnailComponent';
import ThumbnailGallery from './ThumbnailGalleryComponent';
import PreOrderModal from './PreOrderModalComponent';
import InputPhones from './InputPhonesComponent';
import { Loading } from './LoadingComponent';

function PreOrderLayout(props) {

    const thumbnails = props.carouselGraphic;
    const phones = props.phoneModel;
    const resetPreOrderForm = props.resetPreOrderForm;
    console.log(props.graphics);
    console.log(phones)

    const [activeIndex, setActiveIndex] = useState(0);

    const [activeSelection, setActiveSelection] = useState(0);

    const renderPhoneInfo = () => {
        if (phones.length) {
            return (
                <>
                    <InputPhones
                        phones={phones}
                        onClick={handleClick2}
                    />
                </>
            )
        }
        return null;
    }

    const renderThumbnails = () => {
        if (thumbnails.length) {
            return (
                <>
                    <ThumbnailGallery
                        thumbnails={thumbnails}
                        // active={thumbnails[activeIndex]}
                        onClick={handleClick}
                    />
                </>
            )
        }
        return null;
    }

    const renderActiveThumb = () => {
        if (thumbnails.length) {
            return (
                <>
                    <ActiveThumb activeThumbnail={thumbnails[activeIndex]} />
                </>
            )
        }
        return null;
    }


    const renderTextComponent = () => {
        const specTitle = thumbnails[activeIndex].specTitle.map(thumbs => <div className="specTitle">{thumbs}
        </div>);
        const specDescription = thumbnails[activeIndex].specDescription.map(thumbs => <div className="specDescription">{thumbs}
        </div>);
        if (thumbnails.length && phones.length) {
            return (
                <>
                    <h2 className="pt-5 mb-0">{thumbnails[activeIndex].title}</h2>
                    <h3 className="pb-4">{phones[activeSelection].title}</h3>
                    <div className="row mx-auto mb-5">
                        <div className="col-12 mx-auto">
                            <div className="row specMaxWidth mx-auto">
                                <div className="col-6 text-left specTitle pr-1 pl-0">
                                    {specTitle}
                                </div>
                                <div className="col-6 text-left specDescription pl-3 pr-0">
                                    {specDescription}
                                </div>
                            </div>
                        </div>
                    </div>
                    <PreOrderModal
                        thumbnails={thumbnails[activeIndex]}
                        phones={phones[activeSelection]}
                        resetPreOrderForm={resetPreOrderForm}
                    />
                </>
            )
        }
        return null;
    }

    const handleClick2 = (e) => {
        const activeSelection = e.target.getAttribute('data-index');
        setActiveSelection(activeSelection)
        console.log('I got clicked')
        console.log(activeSelection)
    }

    const handleClick = (e) => {
        const activeIndex = e.target.getAttribute('data-index');
        setActiveIndex(activeIndex)
        console.log(activeIndex)
    }

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-10 mx-auto maxWidthPreOrder">
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                {renderActiveThumb()}
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-12 text-center text-lg-left mb-4 preOrderHeader">
                                        <h1>PRE-ORDER THE NEW GEO CASE BELOW:</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="col-12 text-center text-lg-left mx-auto ml-lg-0 mb-3 px-0">
                                            <h2>CHOOSE YOUR SIZE:</h2>
                                        </div>
                                        <div className="col-12 py-0 text-center text-lg-left px-0 ">
                                            {renderPhoneInfo()}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="col-12 text-center text-lg-left mx-auto ml-lg-0 mb-3 px-0">
                                            <h2>CHOOSE YOUR STYLE:</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                {renderThumbnails()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid preOrderTextComponent mx-auto">
                <div className="row mx-auto">
                    <div className="col-6 mx-auto text-center">
                        <svg className="text-center" width="118" height="36" viewBox="0 0 118 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59 36L0.976306 -3.30052e-06L117.024 6.84466e-06L59 36Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 pb-5 mx-auto text-center">
                        {renderTextComponent()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreOrderLayout;