import { Col, Row } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, gitUrl, technologies }) => {
    return (
        <Row className="project-card mb-4">
            <Col md={6} className="proj-imgbx p-0">
                <img src={imgUrl} alt={title} className="w-100 h-100"/>
            </Col>
            <Col md={6} className="proj-txtx d-flex flex-column justify-content-center">
                <h4 className="text-uppercase">{title}</h4>
                <p>{description}</p>
                <div><small>{technologies}</small></div>
                <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
                    View Code
                </a>
            </Col>
        </Row>
    );
};

export default ProjectCard;