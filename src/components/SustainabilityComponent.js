import React from 'react';
import Template from './TemplateHeroComponent';
import { Loading } from './LoadingComponent';

function Sustainability(props) {
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
    const graphicsFiltered = props.graphics.filter(graph => graph.id === 2);
    console.log(graphicsFiltered);
    const graphic = graphicsFiltered.map(graphic => {
        return (
            <div key={graphic.id}>
                <Template
                    id={graphic.id}
                    size={graphic.size}
                    img={graphic.img}
                    title={graphic.title}
                    link1={graphic.link1}
                    link1Name={graphic.link1Name}
                    buttonSize={graphic.buttonSize}
                    buttonColor={graphic.buttonColor}
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

export default Sustainability;