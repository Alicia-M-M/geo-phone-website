import React from 'react';
import Template from './TemplateHeroComponent';
import { Loading } from './LoadingComponent';

function Hero(props) {
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
    // const graphicsFiltered = props.graphics.filter(graph => graph.id === 0);
    // console.log(graphicsFiltered);
    const graphic = props.graphics.map(graphic => {
        return (
            <div key={graphic.id}>
                <Template
                    id={graphic.id}
                    size={graphic.size}
                    img={graphic.img}
                    title={graphic.title}
                    link1={graphic.link1}
                    link1Name={graphic.link1Name}
                    link2={graphic.link2}
                    link2Name={graphic.link2Name}
                    buttonSize={graphic.buttonSize}
                    buttonColor={graphic.buttonColor}
                    video={graphic.video}
                />
            </div>
        )

    });



    return (
        <div className="container-fluid">
            {graphic}
        </div>
    )

};

export default Hero;