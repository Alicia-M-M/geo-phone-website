import React from 'react';
import Template from './TemplateHeroComponent';
import ScrollAnimation from 'react-animate-on-scroll';
import { Loading } from './LoadingComponent';

function News(props) {
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
    console.log(props.graphics);
    const graphicsFiltered = props.graphics.filter(graph => graph.id === 3);
    console.log(graphicsFiltered);
    const graphic = graphicsFiltered.map(graphic => {
        return (
            <div key={graphic.id}>
                <Template
                    id={graphic.id}
                    img={graphic.img}
                    title={graphic.title}
                />
            </div>
        )
    });

    return (
        <div className="container-fluid">
            {graphic}
            <div className="row">
                <div className="col-12 text-center news py-5">
                    <div className="row">
                        <div className="col-10 col-xl-8 text-center pb-3 mx-auto my-5">
                            <ScrollAnimation animateIn="fadeInLeft"> <div className="text-center mx-auto headerFive"><span>NEWS AND UPDATES</span></div></ScrollAnimation>
                            <ScrollAnimation delay={500} animateIn="fadeInDown">
                                <p className="my-2 col-md-8 col-12 mx-auto pt-1 paragraphHeader">
                                    GEO strives to bring you the latest information on our award winning technology and innovations.
                                    Partnering with sustainability concious suppliers and manufacturers you can be assured
the case you buy is as much stylish as great for the environment.</p>
                            </ScrollAnimation>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

};

export default News;