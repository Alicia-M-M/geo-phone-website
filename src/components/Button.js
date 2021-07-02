import React from 'react';

const STYLES = [
    "btn--gold--solid",
    "btn--black--solid",
    "btn--white--solid",
    "btn--goldWhite--solid",
    "btn--whiteBlack--solid",
    "btn--whiteGold--solid"
];

const TEXT = [
    "btn--black--text a",
    "btn--white--text a",
];

const SIZES = [
    "btn--large",
    "btn--small",
    "btn--small-footer"
];

export const CustomButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonStyleTwo,
    buttonSize,
    textColour,
    textColourTwo
}) => {

    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkStyleTwo = STYLES.includes(buttonStyleTwo) ? buttonStyleTwo : STYLES[0];
    const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkText = TEXT.includes(textColour) ? textColour : TEXT[0];
    const checkTextTwo = TEXT.includes(textColourTwo) ? textColourTwo : TEXT[0];

    return (
        <button className={`button ${checkStyle} ${checkStyleTwo} ${checkSize} ${checkText} ${checkTextTwo}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}