import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center mb-5">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="mb-4">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    className="form-control"
                  />
                </Col>
                <Col sm={6} className="mb-4">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    className="form-control"
                  />
                </Col>
                <Col sm={6} className="mb-4">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    className="form-control"
                  />
                </Col>
                <Col sm={6} className="mb-4">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    className="form-control"
                  />
                </Col>
                <Col xs={12} className="mb-4">
                  <textarea
                    rows="8"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className="form-control"
                  />
                </Col>
                <Col xs={12} className="text-center">
                  <button type="submit" className="btn btn-primary w-100">{buttonLabel}</button>
                </Col>
              </Row>
            </form>
            {status.message && (
              <Row className="mt-3">
                <Col>
                  <p className={status.success ? "text-success" : "text-danger"}>{status.message}</p>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
