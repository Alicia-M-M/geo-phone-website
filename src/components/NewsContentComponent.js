import React from 'react';
import { Loading } from './LoadingComponent';
import { CustomButton } from './Button';
import ScrollAnimation from 'react-animate-on-scroll';

function NewsContent(props) {
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
    const graphic1 = props.newsGraphic.filter(graphic => graphic.id === 0).map(graphic => {
        return (
            <div key={graphic.id}>
                <RenderSustainability graphic={graphic} />
            </div>
        )
    });
    const graphic2 = props.newsGraphic.filter(graphic => graphic.id === 1).map(graphic => {
        return (
            <div key={graphic.id}>
                <RenderInnovation graphic={graphic} />
            </div>
        )
    });

    return (
        <div className="container-fluid">
            {graphic1}
            {graphic2}
        </div>
    )
}

function RenderSustainability({ graphic }) {
    return (
        <div className="row" id="Sustainability_id">
            <div className="col-10 text-center text-xl-left my-xl-5 mx-auto pt-5 pb-xl-5 maxWidthNews">
                <div className="row" >
                    <div className="col-xl-4 pb-5 pb-xl-0 order-last order-xl-first">
                        <div className="maxheightContainer" style={{ backgroundImage: `url(${graphic.img1})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '585px', width: '100%', backgroundrepeat: 'no-repeat', }}></div>
                    </div>
                    <div className="col-xl-8 col-12 my-auto pt-5 pt-xl-0">
                        <div className="row">
                            <div className="col-xl-10 col-12 mx-auto"><ScrollAnimation animateIn="fadeInDown">
                                <div className="headerTwo mb-4"><span>{graphic.title}</span></div></ScrollAnimation>
                                <ScrollAnimation delay={500} animateIn="fadeInRight">
                                    <p className="pt-4 pb-xl-4">
                                        {graphic.description}
                                    </p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-10 col-12 pb-1 mx-auto">
                                <div className="row">
                                    <div className="col-12 mx-auto pb-xl-0 pb-4 text-center text-xl-left">
                                        <ScrollAnimation delay={800} animateIn="fadeIn">
                                            <CustomButton
                                                type="button"
                                                buttonStyle="btn--black--solid"
                                                buttonSize="btn--small"
                                                textColour="btn--white--text a"
                                            ><a href={graphic.link1}>{graphic.link1Name}</a></CustomButton>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RenderInnovation({ graphic }) {
    return (
        <div className="row pb-5">
            <div className="col-10 mx-auto pt-0 py-xl-5 my-xl-5 maxWidthNews">
                <div className="row">
                    <div className="col-xl-4 pb-4 pb-xl-0 pl-xl-5 pr-xl-2">
                        <div className="maxheightContainer" style={{ backgroundImage: `url(${graphic.img1})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '760px', width: '100%', backgroundrepeat: 'no-repeat', }}></div>
                    </div>
                    <div className="col-xl-4">
                        <div className="maxheightContainer mb-4" style={{ backgroundImage: `url(${graphic.img2})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '368px', width: '100%', backgroundrepeat: 'no-repeat', }}></div>
                        <div className="maxheightContainer mt-4" style={{ backgroundImage: `url(${graphic.img3})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '368px', width: '100%', backgroundrepeat: 'no-repeat', }}></div>
                    </div>
                    <div className="col-xl-4 text-center text-xl-right my-auto order-first order-xl-first pt-5 pt-xl-0">
                        <div className="row">
                            <div className="col-12 mx-auto"><ScrollAnimation animateIn="fadeInDown">
                                <div className="headerTwo mb-4"><span>{graphic.title}</span></div></ScrollAnimation>
                                <ScrollAnimation delay={500} animateIn="fadeInLeft">
                                    <p className="pt-4 pb-xl-4">
                                        {graphic.description}
                                    </p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 pb-1 mx-auto">
                                <div className="row">
                                    <div className="col-12 mx-auto pb-xl-0 pb-4"><ScrollAnimation delay={800} animateIn="fadeIn">
                                        <CustomButton
                                            type="button"
                                            buttonStyle="btn--gold--solid"
                                            buttonSize="btn--small"
                                            textColour="btn--black--text a"
                                        ><a href={graphic.link1}>{graphic.link1Name}</a></CustomButton>
                                    </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsContent;