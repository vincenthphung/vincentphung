import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/direct-rep.gif"
import projImg2 from "../assets/img/carcar1.gif"
import projImg3 from "../assets/img/conferencego1.gif"
import "animate.css";

const Projects = () => {
    const projects = [
        {
            title: "Direct Rep",
            description: "Design & Development",
            imgUrl: projImg1,
            gitUrl: "https://github.com/vincenthphung/direct-rep",
            technologies: "FastAPI, PostgreSQL, React"

        },
        {
            title: "Auto Ease",
            description: "Design & Development",
            imgUrl: projImg2,
            gitUrl: "https://github.com/vincenthphung/auto-ease",
            technologies: "FastAPI, PostgreSQL, React"
        },
        {
            title: "Conference Pro",
            description: "Design & Development",
            imgUrl: projImg3,
            gitUrl: "https://github.com/vincenthphung/conference-pro",
            technologies: "FastAPI, PostgreSQL, React"
        },
        {
            title: "Wardrobify",
            description: "Design & Development",
            imgUrl: projImg3,
            gitUrl: "https://github.com/vincenthphung/wardrobify",
            technologies: "FastAPI, PostgreSQL, React"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            gitUrl: "https://github.com/vincenthphung/wardrobify",
            technologies: "FastAPI, PostgreSQL, React"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            gitUrl: "https://github.com/vincenthphung/wardrobify",
            technologies: "FastAPI, PostgreSQL, React"
        },
    ];

    return (
        <section className="project" id="projects">
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
        </section>
    );
};

export default Projects;
