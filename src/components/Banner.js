import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/portfolio.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Banner = () => {
    // indicate index to which word is currently displayed on the screen
    const [loopNum, setLoopNum] = useState(0);
    // is the type being typed out or deleted? default is false because we start by typing the word
    const [isComplete, setIsComplete] = useState(false);
    const wordList = [
        "Software Engineer",
        "Troubleshooter",
        "Problem Solver",
        "Dog Parent",
        "Explorer",
    ];
    // the component needs to know the word that is being displayed (starts with letters)
    const [text, setText] = useState("");
    // determines how fast one letter comes after the first one is typed and also the word is going to be deleted faster since when someone deletes it deletes faster
    const [delta, setDelta] = useState(200);
    const [index, setIndex] = useState(0);

    // run this function to take care of typing or deleting
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta); // delta will be our interval when tick is getting fired off?
        return () => {
            clearInterval(ticker);
        }; // once we set the interval and component unmount - we need to clear the interval that contains the ticker
    }, [text]); // <-- we want it to run every time the text gets updated

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
                            {({isVisible}) => (
                                <div
                                    className={
                                        isVisible ? "animate__animated animate__bounce" : ""
                                    }
                                >
                                    <span className="tagline">&lt;Hello World /&gt;</span>
                                    <h1>I'm Vincent</h1>
                                    <h2 className="wrap">{text}</h2>
                                    <p>
                                       

                                        I am a full stack software engineer. My passion for problem-solving and
                                        creativity flourished when I transitioned into the tech industry. Prior to
                                        becoming a software engineer, I was in dental school. However, after some
                                        self-reflection, I realized my true calling was in technology, and enrolled in
                                        Hack Reactor's accelerated coding bootcamp. I graduated in December 2022, and
                                        have been expanding my skills ever since. I am fascinated by the ever-evolving
                                        programming landscape and am constantly seeking to create useful and innovative
                                        software for users. I am eager to continue growing as a professional and
                                        creating impactful projects in the future.


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
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;



