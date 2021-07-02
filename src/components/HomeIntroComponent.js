import React from 'react';
import TwoColumns from './TwoColumnTemplate';
import { Loading } from './LoadingComponent';

function HomeIntro(props) {
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
    const graphicsFiltered = props.twoColumnGraphic.filter(graph => graph.id === 0);
    console.log(graphicsFiltered);
    const graphic = graphicsFiltered.map(graphic => {
        return (
            <div key={graphic.id}>
                <TwoColumns
                    id={graphic.id}
                    img={graphic.img}
                    title={graphic.title}
                    description={graphic.description}
                    link1={graphic.link1}
                    link1Name={graphic.link1Name}
                    link2={graphic.link2}
                    link2Name={graphic.link2Name}
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

export default HomeIntro;