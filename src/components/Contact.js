import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useForm, ValidationError} from '@formspree/react';
import Alert from 'react-bootstrap/Alert';

function Contact() {
    const formInitialDetails = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const [state, handleSubmit] = useForm('meqwovpe');
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };
    return (
        <>
            <section className='contact' id='connect'>
                <Container>
                    <hr className="contact-divider"></hr>
                    <Row className='align-items-center'>
                        <h2> &lt;Contact Me /&gt; </h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input
                                        id="name"
                                        type='text'
                                        name='name'
                                        value={formDetails.name}
                                        placeholder='Name'
                                        onChange={(e) => onFormUpdate('name', e.target.value)}
                                    />
                                </Col>

                                <Col sm={6} className='px-1'>
                                    <input id='email' type='email' name='email'
                                           value={formDetails.email}
                                           placeholder='Email'
                                           onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                                    <ValidationError
                                        prefix='Email'
                                        field='email'
                                        errors={state.errors}
                                    />
                                </Col>
                                <Col md={12} className='px-1'>
                                <textarea
                                    id="message"
                                    type='text'
                                    name="message"
                                    value={formDetails.message}
                                    placeholder='Message'
                                    onChange={(e) => onFormUpdate('message', e.target.value)}>
                                </textarea>
                                    <ValidationError
                                        prefix='Message'
                                        field='message'
                                        errors={state.errors}
                                    />
                                    <Col sm={12} className="px-1">
                                        <button type='submit' disabled={state.submitting}>
                                            <span>{buttonText}</span>
                                        </button>
                                    </Col>
                                    {/*{*/}
                                    {/*    status.message &&*/}
                                    {/*    <Alert variant={status.message === false ? "danger" : "success"}*/}
                                    {/*           className="p-6 m-3 text-center">*/}
                                    {/*        {status.message}*/}
                                    {/*    </Alert>*/}
                                    {/*}*/}

                                </Col>
                            </Row>
                        </form>

                    </Row>
                </Container>
            </section>
        </>
    )
        ;
}

export default Contact;
