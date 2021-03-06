import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleScroll = () => {
        if (window.scrollY >= 60) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
        // console.log(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () =>
            window.removeEventListener('scroll', handleScroll);
    }, []);

    const svgColor = scrollNav ? 'white' : 'black';

    const logoInline = <svg className="mbLogo" width="62" height="24" viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7708 9.38539H18.7655V14.6198H18.7708V18.7655H5.23446V5.23446H16.6142H23.8796L18.6451 0H0V19.713L4.29226 24H24.0052V9.38539H18.7708Z" fill={svgColor} />
        <path d="M14.7612 9.38539H9.22311V14.6199H14.7612V9.38539Z" fill={svgColor} />
        <path d="M32.9974 16.7201C32.4508 16.7201 31.9785 16.5244 31.5871 16.1329C31.1957 15.7414 31 15.2756 31 14.7221V8.99803C31 8.45127 31.1957 7.97876 31.5871 7.58726C31.9785 7.19575 32.4508 7 32.9974 7H38.7061C39.2527 7 39.7251 7.19575 40.1232 7.58726C40.5213 7.97876 40.717 8.45127 40.717 8.99803V9.91604H38.5982V9.55154V9.10603H38.1528H33.5372H33.0919V9.55154V14.1686V14.6141H33.5372H38.1528H38.5982V14.1686V13.1561H36.4928V11.0501H40.717V14.7221C40.717 15.2689 40.5213 15.7414 40.1232 16.1329C39.7251 16.5244 39.2527 16.7201 38.7061 16.7201H32.9974Z" fill={svgColor} />
        <path d="M42.2286 16.7201V7H51.2033V9.10603H44.3474V10.8071H49.8672V12.9131H44.3474V14.6141H51.2033V16.7201H42.2286Z" fill={svgColor} />
        <path d="M54.2804 16.7201C53.7338 16.7201 53.2614 16.5244 52.8701 16.1329C52.4787 15.7414 52.283 15.2689 52.283 14.7221V8.99803C52.283 8.45127 52.4787 7.97876 52.8701 7.58726C53.2614 7.19575 53.7338 7 54.2804 7H60.0026C60.5425 7 61.0081 7.19575 61.4062 7.58726C61.8043 7.97876 62 8.45127 62 8.99803V14.7221C62 15.2689 61.8043 15.7414 61.4062 16.1329C61.0081 16.5244 60.5425 16.7201 60.0026 16.7201H54.2804ZM54.8202 14.6141H59.4358H59.8812V14.1686V9.55154V9.10603H59.4358H54.8202H54.3748V9.55154V14.1686V14.6141H54.8202V14.6141Z" fill={svgColor} />
    </svg>

    return (
        <Navbar fixed="top" expand="md" className={`${scrollNav ? ' scrollOrange hoverColorB custom-togglerA' : ' navbar hoverColorA custom-togglerB'}`}>
            <NavHashLink className="nav-link styling px-0" smooth to="/mainpage/#top">
                {logoInline}</NavHashLink>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="navRight hoverStyle">
                    <NavItem>
                        <NavLink className="nav-link" to="/news">NEWS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink className="nav-link" smooth to="/mainpage/#techSpec_id">
                            TECH SPECS
                                    </NavHashLink>
                    </NavItem>
                </Nav>
                <Nav navbar className="navLeft hoverStyle">
                    <NavItem>
                        <NavHashLink className="nav-link" smooth to="/mainpage/#Carousel_id">
                            MODEL
                                    </NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/preorder">PRE-ORDER</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;