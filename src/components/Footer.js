import {Col, Container, Row} from "react-bootstrap"
import github from "../assets/img/github.svg";
import linkedIn from "../assets/img/linkedin.svg";


const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className="align-item-center">
                    <Col xs={6} sm={6}>
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/vincenthphung/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={linkedIn}/>
                            </a>
                            <a
                                href="https://github.com/vincenthphung"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={github}/>
                            </a>
                        </div>
                        <br/>
                        <p>Copyright 2023 Vincent</p>
                    </Col>
                    <Col xs={6} sm={6} className="align-self-end">
                        <a href="#home">
                            <h1>&lt;/Vincent&gt;</h1>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
