import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from './Footer';

const Contact = () => {
  const initialFormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [buttonLabel, setButtonLabel] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLabel("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(formDetails)
      });

      setButtonLabel("Send");
      const result = await response.json();

      setFormDetails(initialFormDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again."
        });
      }
    } catch (error) {
      setButtonLabel("Send");
      setStatus({
        success: false,
        message: "Something went wrong, please try again."
      });
    }
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6}>
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone Number"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col xs={12}>
                    <textarea
                      rows="8"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      className="message-input"
                    />
                  </Col>
                  <Col xs={12} className="text-center">
                    <Col>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{
                          width: "100%" // Set the width to 100% to make it wider
                        }}
                      >
                        {buttonLabel}
                      </button>
                    </Col>
                  </Col>
                </Row>
              </form>
              {status.message && (
                <Row className="mt-3">
                  <Col>
                    <p className={status.success ? "success" : "danger"}>
                      {status.message}
                    </p>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
