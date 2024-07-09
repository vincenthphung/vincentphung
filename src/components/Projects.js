import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/direct-rep.gif";
import projImg2 from "../assets/img/carcar1.gif";
import projImg3 from "../assets/img/conferencego1.gif";
import projImg5 from "../assets/img/paws.gif";
import projImg6 from "../assets/img/jamming.gif";
import projImg7 from "../assets/img/littlelemon.gif";
import projImg8 from "../assets/img/raveous.gif";
import projImg9 from "../assets/img/wardrobify1.gif";
import "animate.css";

const Projects = () => {
    const projects = [
        {
            title: "Direct Rep",
            description: "A reputation management tool that allows users to monitor and manage their online reviews.",
            imgUrl: projImg1,
            gitUrl: "https://github.com/vincenthphung/direct-rep",
            technologies: "FastAPI, PostgreSQL, React"
        },
        {
            title: "Auto Ease",
            description: "An automotive service booking platform to streamline service appointments.",
            imgUrl: projImg2,
            gitUrl: "https://github.com/vincenthphung/auto-ease",
            technologies: "FastAPI, PostgreSQL, React"
        },
        {
            title: "Conference Go",
            description: "A platform for organizing and attending virtual conferences.",
            imgUrl: projImg3,
            gitUrl: "https://github.com/vincenthphung/conference-pro",
            technologies: "FastAPI, PostgreSQL, React"
        },
        {
            title: "Wardrobify",
            description: "A wardrobe management app to catalog and organize your outfits.",
            imgUrl: projImg9,
            gitUrl: "https://github.com/vincenthphung/wardrobify",
            technologies: "FastAPI, PostgreSQL, React"
        },
        {
            title: "Paws for a Cause",
            description: "A website to raise awareness about dog adoption and the challenges of overpopulation in shelters.",
            imgUrl: projImg5,
            gitUrl: "https://github.com/vincenthphung/paws-for-a-cause",
            technologies: "HTML, CSS, JavaScript"
        },
        {
            title: "Little Lemon Restaurant App",
            description: "A restaurant reservation app for booking tables and viewing the menu.",
            imgUrl: projImg7,
            gitUrl: "https://github.com/vincenthphung/little-lemon",
            technologies: "React, Node.js, Express, MongoDB"
        },
        {
            title: "Ravenous",
            description: "A Yelp-inspired restaurant search platform to find and review restaurants.",
            imgUrl: projImg8,
            gitUrl: "https://github.com/vincenthphung/ravenous",
            technologies: "React, Yelp API"
        },
        {
            title: "Jamming",
            description: "A playlist creation app that interacts with the Spotify API.",
            imgUrl: projImg6,
            gitUrl: "https://github.com/vincenthphung/jamming",
            technologies: "React, Spotify API"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">
                            <hr className="divider"></hr>
                            <h2 className="text-center mb-5">&lt;Projects /&gt;</h2>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2} className="d-flex justify-content-center">
                    {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
