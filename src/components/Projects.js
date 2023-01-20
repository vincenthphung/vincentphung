import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/direct-rep.gif"
import projImg2 from "../assets/img/carcar1.gif"
import projImg3 from "../assets/img/conferencego1.gif"
import "animate.css";
import Footer from "./Footer";
import Contact from "./Contact";

const Projects = () => {
    const projects = [{
        title: "Direct Rep",
        description: "A tool that utilizes AI to craft individualized communications to elected officials for US residents on specific topics and positions",
        imgUrl: projImg1,
        gitUrl: "https://github.com/vincenthphung/direct-rep",
        technologies: "React, Redux, Python, FastAPI, Docker, PostgreSQL"

    }, {
        title: "Auto Ease",
        description: "Car Service Management and Sales System, designed to streamline the process of scheduling appointments and managing sales for an automotive business.",
        imgUrl: projImg2,
        gitUrl: "https://github.com/vincenthphung/auto-ease",
        technologies: "Python Django PostgreSQL React Docker"
    }, {
        title: "Conference Pro",
        description: "Conference Reservations and Organization Application that features the implementation of polling, message queues, and pub/sub via RabbitMQ to improve communication between microservices and enhance scalability.",
        imgUrl: projImg3,
        gitUrl: "https://github.com/vincenthphung/conference-pro",
        technologies: "Django PostgreSQL React Docker RabbitMQ"
    }, {
        title: "Wardrobify",
        description: "Allows you to create a digital inventory of your wardrobe by easily taking photos of your clothes and categorizing them by type, color, and style.",
        imgUrl: projImg3,
        gitUrl: "https://github.com/vincenthphung/wardrobify",
        technologies: "FastAPI PostgreSQL React"
    }, {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
        gitUrl: "https://github.com/vincenthphung/wardrobify",
        technologies: "Django, MySQL, CRUD, React, Bootstrap"
    }, {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
        gitUrl: "https://github.com/vincenthphung/wardrobify",
        technologies: "FastAPI, PostgreSQL, React"
    },];

    return (<section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">
                            <hr className="divider"></hr>
                            <h2>&lt;Projects /&gt;</h2>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
                    {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                    })}
                </Row>
            </Container>
            <Contact/>
            <Footer/>
        </section>);
};

export default Projects;
