import {useEffect, useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import github from '../assets/img/github.svg';
import linkedIn from '../assets/img/linkedin.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <Container>
                <Navbar.Brand href="#/">Vincent</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#connect"
                            className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('connect')}
                        >
                            Contact Me
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/vincenthphung/" target="_blank" rel="noreferrer">
                                <img src={linkedIn} alt="LinkedIn"/>
                            </a>
                            <a href="https://github.com/vincenthphung" target="_blank" rel="noreferrer">
                                <img src={github} alt="GitHub"/>
                            </a>
                        </div>
                        <a href="#connect">
                            <button>
                                <span>Let's connect!</span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
