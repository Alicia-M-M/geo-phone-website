import React, { useState } from 'react';
import { CustomButton } from './Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TwoColumnTable from './TwoColumnTableComponent';

const TwoColumnModal = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <CustomButton
                onClick={toggle}
                type="button"
                buttonStyle="btn--black--solid"
                buttonSize="btn--small"
                textColour="btn--white--text a"
            ><a>TECH SPECS</a></CustomButton>
            <Modal isOpen={modal} toggle={toggle} centered size="xl">
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody className="container-fluid mx-auto">
                    <TwoColumnTable
                        tableTitles={props.tableTitles}
                        tableDimentions={props.tableDimentions}
                        tableMaterial={props.tableMaterial}
                        tableEco={props.tableEco}
                    />
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center pb-3">
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
    );
}

export default TwoColumnModal;