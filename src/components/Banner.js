import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/portfolio.png"; // Updated image path
import TrackVisibility from "react-on-screen";
import 'animate.css';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const wordList = ["Software Engineer", "Outgoing Introvert", "Passionate Aries", "Dog Lover", "Traveler"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(200);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % wordList.length;
        let fullText = wordList[i];
        let updatedText = isComplete ? "" : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (!isComplete && updatedText === fullText) {
            setIsComplete(true);
            setDelta(1000);
            setIndex((prevIndex) => prevIndex + 1);
        } else if (isComplete && updatedText === "") {
            setIsComplete(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <span className="tagline">&lt;Hello World /&gt;</span>
                                    <h1>I'm Vincent</h1>
                                    <h2 className="wrap">{text}</h2>
                                    <p>
                                        I'm a <b>full stack software engineer</b> whose fire and passion
                                        for problem-solving and creativity was reignited once making
                                        the leap into the tech industry. Prior to software
                                        engineering, I was a year in dental school. After some
                                        self-reflection, I decided to apply to Hack Reactor's
                                        accelerated coding bootcamp, which I completed in December 2022.
                                        I love the ever-changing programming landscape and continuous
                                        learning to create useful software for users.
                                    </p>
                                    <p>
                                        I am now <i><b>open to work</b></i> and look forward to the opportunity to grow as
                                        a software engineer.
                                    </p>
                                    <button onClick={() => console.log("connect")}>
                                        Let's Connect{" "}
                                        <ArrowRightCircle size={25}></ArrowRightCircle>
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" className="header-img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;