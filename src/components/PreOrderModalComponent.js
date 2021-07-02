import React, { useState } from 'react';
import PreOrderForm from "./PreOrderFormComponent"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomButton } from './Button';

const PreOrderModal = ({ thumbnails, phones, resetPreOrderForm }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="row">
            <div className="col-12 text-center mt-5">
                <CustomButton
                    onClick={toggle}
                    type="button"
                    buttonStyle="btn--gold--solid"
                    buttonSize="btn--small"
                    textColour="btn--black--text a"
                ><a>PRE-ORDER</a></CustomButton>
                <Modal isOpen={modal} toggle={toggle} centered size="md" >
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <ModalBody className="modalPreOrder">
                        <PreOrderForm
                            img={thumbnails.imgThumbnail}
                            title={thumbnails.title}
                            phoneModel={phones.title}
                            resetPreOrderForm={resetPreOrderForm}
                        />
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default PreOrderModal;