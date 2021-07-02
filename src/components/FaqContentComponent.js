import React, { useState } from 'react';
import { Collapse, CardBody, Card, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Loading } from './LoadingComponent';

const accordianIcon = "1x"
const AngleDown = <FontAwesomeIcon icon={faAngleDown} size={accordianIcon} />
const AngleRight = <FontAwesomeIcon icon={faAngleRight} size={accordianIcon} />

function FaqContent(props) {
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
    const graphic = props.faqGraphic.map(graphic => {
        return (
            <div key={graphic.id} className="mb-1">
                <RenderTable graphic={graphic} />
            </div>
        )
    });

    return (
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-12 col-md-8 mx-auto text-left maxWidthFaq ">
                    <div className="pl-4 py-2 accordianTitle"><h1>FAQ</h1></div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8
            mx-auto pt-4 maxWidthFaq">
                    {graphic}
                </div>
            </div>
        </div>
    );
}

function RenderTable({ graphic }) {

    const show = (graphic.id === 0) ? true : false;
    const [isOpen, setIsOpen] = useState(show);

    const toggle = () =>
        setIsOpen(!isOpen);

    return (
        <>
            <CardTitle onClick={toggle} className="row pl-4 py-2 mx-auto accordian"><div className="col-12 accordianHoverEffect">
                <div className='row'>
                    <h2 className="col-10 mb-0 pl-1">{graphic.title}</h2><a className="col-2 text-right pr-4 my-auto" >{!isOpen ? AngleRight : AngleDown}
                    </a>
                </div>
            </div></CardTitle>
            <Collapse isOpen={isOpen}>
                <Card className="acordianInnerCard">
                    <CardBody className="col-12 mx-auto py-3 accordianCardBody">
                        <p>
                            {graphic.description}
                        </p>
                    </CardBody>
                </Card>
            </Collapse>

        </>
    );
}

export default FaqContent;