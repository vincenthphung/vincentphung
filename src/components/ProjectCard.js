import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, gitUrl, technologies }) => {
    return (
        <Col xs={12} sm={6} md={4} lg={4} xl={3}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div>{technologies}</div>
                    <a href={gitUrl} target="_blank" rel="noopener noreferrer">
                        View Code
                    </a>
                </div>
            </div>
        </Col>
    );
};

export default ProjectCard;
