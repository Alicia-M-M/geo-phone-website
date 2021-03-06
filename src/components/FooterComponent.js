import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from './Button';

function Footer() {
    const currentDate = new Date();
    const getYear = currentDate.getFullYear();
    return (
        <footer className="container-fluid pt-5">
            <div className="row py-5">
                <div className="col-10 col-sm-8 col-md-10 col-lg-8 col-xl-6 text-center mx-auto pt-md-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6 col-md-3 footerText">
                                    <div class="row">
                                        <div className="col-12 pb-3">
                                            <a href="https://www.instagram.com/">INSTAGRAM</a>
                                        </div>
                                        <div className="col-12 pb-3">
                                            <a href="https://twitter.com/">TWITTER</a>
                                        </div>
                                        <div className="col-12 pb-3">
                                            <a href="https://youtube.com/">YOUTUBE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 order-md-first  footerText">
                                    <div class="row">
                                        <div className="col-12 pb-3">
                                            <a href="https://example.com/">CONTACT</a>
                                        </div>
                                        <div className="col-12 pb-3">
                                            <a href="https://youtube.com/">NEWS</a>
                                        </div>
                                        <div className="col-12 pb-3">
                                            <Link to='/faq'>FAQ</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 footerText">
                                    <div class="row">
                                        <div className="col-12 pb-3">
                                            <a href="https://facebook.com/">FACEBOOK</a>
                                        </div>
                                        <div className="col-12 pb-3">
                                            <a href="https://discord.com/">DISCORD</a>
                                        </div>
                                        <div className="col-12 pb-3">
                                            <a href="https://twitter.com/">TWITTER</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div class="row">
                                        <div className="col-md-12 col-6">
                                        </div>
                                        <div className="col-md-12 col-6 px-0 pb-md-0 pb-5">
                                            <CustomButton
                                                type="button"
                                                buttonStyle="btn--goldWhite--solid"
                                                buttonSize="btn--small-footer"
                                                textColour="btn--black--text a"
                                            ><Link to="/preorder">PRE-ORDER</Link></CustomButton>
                                        </div>
                                        <div className="col-md-12 col-6">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto logoFooter pl-3">
                    <svg width="61" height="23" viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.7708 9.38539H18.7655V14.6198H18.7708V18.7655H5.23446V5.23446H16.6142H23.8796L18.6451 0H0V19.713L4.29226 24H24.0052V9.38539H18.7708Z" fill='white' />
                        <path d="M14.7612 9.38539H9.22311V14.6199H14.7612V9.38539Z" fill='white' />
                        <path d="M32.9974 16.7201C32.4508 16.7201 31.9785 16.5244 31.5871 16.1329C31.1957 15.7414 31 15.2756 31 14.7221V8.99803C31 8.45127 31.1957 7.97876 31.5871 7.58726C31.9785 7.19575 32.4508 7 32.9974 7H38.7061C39.2527 7 39.7251 7.19575 40.1232 7.58726C40.5213 7.97876 40.717 8.45127 40.717 8.99803V9.91604H38.5982V9.55154V9.10603H38.1528H33.5372H33.0919V9.55154V14.1686V14.6141H33.5372H38.1528H38.5982V14.1686V13.1561H36.4928V11.0501H40.717V14.7221C40.717 15.2689 40.5213 15.7414 40.1232 16.1329C39.7251 16.5244 39.2527 16.7201 38.7061 16.7201H32.9974Z" fill='white' />
                        <path d="M42.2286 16.7201V7H51.2033V9.10603H44.3474V10.8071H49.8672V12.9131H44.3474V14.6141H51.2033V16.7201H42.2286Z" fill='white' />
                        <path d="M54.2804 16.7201C53.7338 16.7201 53.2614 16.5244 52.8701 16.1329C52.4787 15.7414 52.283 15.2689 52.283 14.7221V8.99803C52.283 8.45127 52.4787 7.97876 52.8701 7.58726C53.2614 7.19575 53.7338 7 54.2804 7H60.0026C60.5425 7 61.0081 7.19575 61.4062 7.58726C61.8043 7.97876 62 8.45127 62 8.99803V14.7221C62 15.2689 61.8043 15.7414 61.4062 16.1329C61.0081 16.5244 60.5425 16.7201 60.0026 16.7201H54.2804ZM54.8202 14.6141H59.4358H59.8812V14.1686V9.55154V9.10603H59.4358H54.8202H54.3748V9.55154V14.1686V14.6141H54.8202V14.6141Z" fill='white' />
                    </svg>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-8 text-center mx-auto py-5">
                    <h6>ALICIA MORLEY COPYRIGHT &copy; {getYear} TERMS AND CONDITIONS APPLY ALL RIGHTS RESERVED</h6>
                </div>
            </div>
        </footer>
    )
};

export default Footer;