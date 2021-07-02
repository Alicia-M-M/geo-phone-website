import React from 'react';
import { Link } from 'react-router-dom';
import ModalHero from './ModalHeroComponent';
import { HashLink } from 'react-router-hash-link';
import { CustomButton } from './Button';
import ScrollAnimation from 'react-animate-on-scroll';


function Template(props) {

    const layout = (props.id === 0 ?
        <TwoButtons
            link1={props.link1}
            link1Name={props.link1Name}
            link2={props.link2}
            link2Name={props.link2Name}
            buttonSize={props.buttonSize}
            buttonColor={props.buttonColor}
            video={props.video}
        /> :

        <OneButton
            link1={props.link1}
            link1Name={props.link1Name}
            buttonSize={props.buttonSize}
            buttonColor={props.buttonColor}
        />);
    const heightSize = props.size === 'large' ? '90vh' : '300px';
    const delay = props.id === 0 ? 500 : 0;
    const replace = props.title.split('~');
    const first = replace[0];
    const second = replace[1];
    return (
        <>
            <div className="row">
                <div className="col-12 overlay-container mx-auto">
                    <div className="row">
                        <div className="col-12 px-0">
                            <div className="maxHeightPhoneGraphics" style={{ backgroundImage: `url(${props.img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: `${heightSize}`, width: '100%', backgroundRepeat: 'no-repeat', position: 'relative' }}></div>
                            <div className="col-12 text-center mx-auto text-on-image maxWidthHeroText px-4">
                                {props.size === 'large' &&
                                    <>
                                        {/* <ScrollAnimation delay={delay} animateIn="fadeIn">

                                            <div className="header"><span>{props.title}</span></div>

                                        </ScrollAnimation> */}
                                        <ScrollAnimation delay={delay} animateIn="fadeInRight">
                                            <div className="header"><span>{first}</span></div>
                                        </ScrollAnimation>
                                        <ScrollAnimation delay={delay} animateIn="fadeInLeft">
                                            <div className="headerReverse"><span>{second}</span></div>
                                        </ScrollAnimation>
                                        <div className="row mx-auto">
                                            {layout}
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function OneButton(props) {
    const buttonSize =
        (props.buttonSize === 'large') ? 'btn--large' : 'btn--small';
    const buttonStyle =
        (props.buttonColor) === 'gold' ? 'btn--gold--solid'
            : (props.buttonColor) === 'black' ? 'btn--black--solid'
                : (props.buttonColor) === 'whiteGold' ? 'btn--whiteGold--solid'
                    : (props.buttonColor) === 'goldWhite' ? 'btn--goldWhite--solid'
                        : 'btn--white--solid';
    const textColour = (props.buttonColor) === 'white' || 'gold' ? 'btn--black--text a'
        : 'btn--white--text a';

    return (
        <div className="py-5 text-center mx-auto">
            <ScrollAnimation delay={500} animateIn="fadeIn">
                <CustomButton
                    type="button"
                    buttonStyle={buttonStyle}
                    buttonSize={buttonSize}
                    textColour={textColour}
                >
                    <HashLink smooth to={props.link1}>{props.link1Name}</HashLink></CustomButton>
            </ScrollAnimation>
        </div>
    )
};


function TwoButtons(props) {
    const buttonSize =
        (props.buttonSize === 'large') ? 'btn--large' : 'btn--small';
    const buttonStyle =
        (props.buttonColor) === 'gold' ? 'btn--gold--solid'
            : (props.buttonColor) === 'black' ? 'btn--black--solid'
                : 'btn--white--solid';
    const textColour = (props.buttonColor) === 'white' ? 'btn--black--text a'
        : 'btn--white--text a';

    return (
        <div className="col-12 mx-auto px-0">
            <div className="row maxWidthHero mx-auto">
                <div className="text-center col-12 col-lg-6  pt-5 pb-3">
                    <ScrollAnimation delay={1000} animateIn="fadeIn">
                        <CustomButton
                            type="button"
                            buttonStyle={buttonStyle}
                            buttonSize={buttonSize}
                            textColour={textColour}
                        >
                            <Link to={props.link1}>{props.link1Name}</Link></CustomButton>
                    </ScrollAnimation>
                </div>
                <div className="text-center col-12 col-lg-6 pt-lg-5 pb-3">
                    <ScrollAnimation delay={1000} animateIn="fadeIn">
                        <ModalHero
                            name={props.link2Name}
                            video={props.video}
                            buttonSize={props.buttonSize}
                        />
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
};

export default Template;
