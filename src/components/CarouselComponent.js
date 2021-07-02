import { useState } from "react";
import Slider from "react-slick";
import { Loading } from './LoadingComponent';

const CaretLeft = <svg width="21" height="32" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-8.96083e-07 18.5L23.25 0.746478L23.25 36.2535L-8.96083e-07 18.5Z" fill="#FFB800" />
</svg>;
const CaretRight = <svg width="21" height="32" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 18.5L0.749996 36.2535L0.749998 0.746478L24 18.5Z" fill="#FFB800" />
</svg>;

function Carousel(props) {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrowRight next" onClick={onClick}>
                {CaretRight}
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrowLeft prev" onClick={onClick}>
                {CaretLeft}
            </div>
        );
    };


    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    };

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
        <div className="container-fluid py-md-1 carouselComponent" id='Carousel_id'>
            <div className="row">
                <div className="col-6 mx-auto maxWidthCarousel px-5">
                    <Slider {...settings} className="col-12 col-xs-10 col-sm-6 col-lg-10 mx-auto">
                        {props.carouselGraphic.map((graphic, idx) => (
                            <div className={`${idx === imageIndex ? "slideA activeSlide" : "slideA"}`}>
                                <img width="100%" src={graphic.imgHero} alt={graphic.imgHero} />
                                <div className="col-12 text-center mx-auto pt-4">
                                    <div className="headerThree">
                                        <span style={{whiteSpace: 'pre-line'}}>{graphic.title}</span>
                                    </div>
                                    <div className="row">
                                    {(idx === imageIndex) &&
                                        <div className="col-10 pt-3 mx-auto">
                                            <h5>
                                                {graphic.descriptionCarousel}
                                            </h5>
                                        </div>
                                    }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Carousel;
