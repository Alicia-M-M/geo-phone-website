import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

function InputPhones({ phones, onClick }) {
    console.log(phones);

    return (
        <div>
            <Form>
                <FormGroup>
                    {phones.map((phone, index) => {
                        return (
                            <div key={phone.id} className="pb-3 inputButtonStyling col-8 text-left mx-auto mx-lg-0 pl-lg-0">
                                <CustomInput
                                    onClick={onClick}
                                    data-index={index}
                                    type="radio"
                                    id={index}
                                    name="customRadio"
                                    label={phone.title} />
                            </div>
                        )
                    })
                    }
                </FormGroup>
            </Form>
        </div>
    )
}
// console.log(data-index);
export default InputPhones;