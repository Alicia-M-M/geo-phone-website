import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { CustomButton } from './Button';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class PreOrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            img: props.img,
            phoneTitle: props.title,
            phoneChoice: props.phoneModel,
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
            }
        };
    }

    handleSubmit = (values) => {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
        this.props.resetPreOrderForm();
    }

    render() {
        return (
            <Form className="preOrderFormStyle" model="preOrderForm" onSubmit={values => this.handleSubmit(values)} >
                <Row className="form-group">
                    <div className="col-6 mx-auto align-items-center">
                        <img className="d-block mx-auto" width="50%" src={this.state.img} />
                    </div>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="phoneTitle" md={2}>TITLE</Label>
                    <Col md={10}>
                        <Control.text model=".phoneTitle" id="phoneTitle" name="phoneTitle" 
                            placeholder="Phone Title"
                            className="form-control"
                            defaultValue={this.state.phoneTitle}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label for="phoneChoice" md={2}>PHONE MODEL</Label>
                    <Col md={10}>
                        <Control.text model=".phoneChoice" id="phoneChoice" name="phoneChoice"
                            placeholder="Phone Choice"
                            className="form-control"
                            defaultValue={this.state.phoneChoice}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="firstName" md={2}>FIRST NAME</Label>
                    <Col md={10}>
                        <Control.text model=".firstName" id="firstName" name="firstName"
                            placeholder="FIRST NAME"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".firstName"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="lastName" md={2}>LAST NAME</Label>
                    <Col md={10}>
                        <Control.text model=".lastName" id="lastName" name="lastName"
                            placeholder="LAST NAME"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".lastName"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="phoneNum" md={2}>PHONE NUMBER</Label>
                    <Col md={10}>
                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                            placeholder="PHONE NUMBER"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(10),
                                maxLength: maxLength(15),
                                isNumber
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".phoneNum"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 10 numbers',
                                maxLength: 'Must be 15 numbers or less',
                                isNumber: 'Must be a number'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group pb-4">
                    <Label htmlFor="email" md={2}>EMAIL</Label>
                    <Col md={10}>
                        <Control.text model=".email" id="email" name="email"
                            placeholder="EMAIL"
                            className="form-control"
                            validators={{
                                required,
                                validEmail
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid email address'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group preOrderModalStyling text-center py-4 mb-0">
                    <Col>
                        <CustomButton
                            type="submit"
                            buttonStyle="btn--goldWhite--solid"
                            buttonSize="btn--small"
                            textColour="btn--black--text a"
                        ><a>PRE-ORDER</a></CustomButton>
                    </Col>
                </Row>
            </Form>
        )
    }
}


