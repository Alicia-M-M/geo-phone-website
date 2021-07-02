import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { CustomButton } from './Button';

function UpToDate() {
    return (
        <div className="container-fluid UpToDate py-5">
            <div className="row">
                <div className="col-10 col-md-6 text-center mx-auto pb-3 maxWidthHeroText">
                    <div className="text-center mx-auto headerFour"><span>KEEP UP TO DATE ON <br /> OUR LATEST RELEASES</span></div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-8 mx-auto">
                    <CustomButton
                        type="button"
                        buttonStyle="btn--whiteBlack--solid"
                        buttonSize="btn--small"
                        textColour="btn--white--text a"
                    ><HashLink smooth to='/news#top'>NEWS</HashLink></CustomButton>
                </div>
            </div>
        </div>
    )
};

export default UpToDate;