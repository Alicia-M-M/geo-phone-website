import React from 'react';
import { Link } from 'react-router-dom';
import TwoColumnModal from './TwoColumnModal';
import { CustomButton } from './Button';
import ScrollAnimation from 'react-animate-on-scroll';

function TwoColumns(props) {
    // order
    const delay = props.id === 0 ? 500 : 0;
    const order = (props.id === 1) ? 'order-lg-last' : 'order-lg-first';
    //button style
    const buttonStyle = (props.link1Name === 'PRE-ORDER') ? "btn--gold--solid" : "btn--black--solid";

    const buttonStyleTwo = (props.link2Name === 'PRE-ORDER') ? "btn--gold--solid" : "btn--black--solid";

    const textColor = (props.link1Name === 'PRE-ORDER') ? "btn--black--text a" : "btn--white--text a";
    const textColorTwo = (props.link2Name === 'PRE-ORDER') ? "btn--black--text a" : "btn--white--text a";

    return (
        <div className="row">
            <div className={`col-lg-6 px-0 order-last  ${order}`}>
                {/* <img width="100%" className="img-fluid" src={props.img} />
                 */}
                <div className="maxHeightPhoneGraphics" style={{ backgroundImage: `url(${props.img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '730px', width: '100%', backgroundrepeat: 'no-repeat' }}></div>
            </div>
            <div className={` col-lg-6 text-center px-5 my-auto`}>
                <div className="row mt-5">
                    <div className="col-12 col-sm-10 mx-auto">
                        <ScrollAnimation animateIn="fadeInDown">
                            <div className="headerTwo mb-4"><span>{props.title}</span></div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={500} animateIn="fadeInDown">
                            <p className="my-3 col-12 maxWidthParagraph mx-auto">
                                {props.description}
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-10 py-2 mx-auto">
                        <div className="row maxWidthTwoColumn mx-auto">
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6 pb-3">
                                <ScrollAnimation delay={800} animateIn="fadeIn">
                                    <CustomButton
                                        type="button"
                                        buttonStyle={buttonStyle}
                                        buttonSize="btn--small"
                                        textColour={textColor}
                                    ><Link to={props.link1}>{props.link1Name}</Link></CustomButton>
                                </ScrollAnimation>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <ScrollAnimation delay={800} animateIn="fadeIn">
                                    {props.link2Name === 'TECH SPECS' ?

                                        <TwoColumnModal
                                            tableTitles={props.tableTitles}
                                            tableDimentions={props.tableDimentions}
                                            tableMaterial={props.tableMaterial}
                                            tableEco={props.tableEco}
                                        /> :
                                        <CustomButton
                                            type="button"
                                            buttonStyleTwo={buttonStyleTwo}
                                            buttonSize="btn--small"
                                            textColourTwo={textColorTwo}
                                        >
                                            <Link to={props.link2}>{props.link2Name}</Link>
                                        </CustomButton>

                                    }
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumns;