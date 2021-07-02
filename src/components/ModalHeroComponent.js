import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomButton } from './Button';

function ModalHero(props) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <CustomButton
                onClick={toggle}
                type="button"
                buttonStyle="btn--black--solid"
                buttonSize="btn--large"
                textColour="btn--white--text a"
            ><a>{props.name}</a></CustomButton>
            <Modal isOpen={modal} toggle={toggle} className="mx-auto" centered>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody style={{backgroundImage: `url(${props.video})`, backgroundPosition: 'center', backgroundSize: 'cover', height:'500px'}}>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center">
                    <CustomButton
                        onClick={toggle}
                        type="button"
                        buttonStyle="btn--goldWhite--solid"
                        buttonSize="btn--small"
                        textColour="btn--black--text a"
                    ><a>CLOSE</a></CustomButton>
                </ModalFooter>
            </Modal>

        </>
    )
};

export default ModalHero;