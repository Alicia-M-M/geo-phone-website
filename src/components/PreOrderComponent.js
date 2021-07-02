import React from 'react';
import Template from './TemplateHeroComponent';
import { Loading } from './LoadingComponent';

function PreOrder(props) {
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
    const graphicsFiltered = props.graphics.filter(graph => graph.id === 4);
    const graphic = graphicsFiltered.map(graphic => {
        return (
            <div>
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
        </div>
    )

};

export default PreOrder;