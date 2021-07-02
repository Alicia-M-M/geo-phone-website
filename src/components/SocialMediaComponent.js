import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


const iconSize = "2x";
const Instagram = <FontAwesomeIcon icon={faInstagram} size={iconSize} />
const Twitter = <FontAwesomeIcon icon={faTwitter} size={iconSize} />
const Youtube = <FontAwesomeIcon icon={faYoutube} size={iconSize} />
const Facebook = <FontAwesomeIcon icon={faFacebook} size={iconSize} />
const Twitch = <FontAwesomeIcon icon={faTwitch} size={iconSize} />
const Discord = <FontAwesomeIcon icon={faDiscord} size={iconSize} />

function Social() {
    return (
        <div className="container-fluid social py-5">
            <div className="row">
                <div className="col-12 text-center mx-auto pb-3 maxWidthHeroText">
                    <div className="text-center mx-auto headerFour"><span>FOLLOW US ON SOCIAL MEDIA</span></div>
                </div>
            </div>
            <div className="row text-center maxWidthSocial mx-auto">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <a href="http://instagram.com/" className="iconSizeStyle col-2 text-center iconSize">
                            {Instagram}
                        </a>
                        <a className="col-2 text-center">
                            {Twitter}
                        </a>
                        <a className="col-2 text-center">
                            {Youtube}
                        </a>
                        <a className="col-2 text-center">
                            {Facebook}
                        </a>
                        <a className="col-2 text-center">
                            {Twitch}
                        </a>
                        <a className="col-2 text-center">
                            {Discord}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Social;