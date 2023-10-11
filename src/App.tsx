import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import eventsData from "./data.json";

type SetEventIndex = (index: number) => void;

document.body.style.backgroundColor = "#343638";

function MainContent({
    eventIndex,
    setEventIndex,
}: {
    eventIndex: number;
    setEventIndex: SetEventIndex;
}) {
    return (
        <Container className="mt-5">
            <Row>
                <Col className="col-12">
                    <h1 className="text-center">Your Title</h1>
                    <h2 className="text-center">Subtitle</h2>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="col-12" id="image-container">
                    <Image
                        src={eventsData[eventIndex].path}
                        id="graphic"
                        className="rounded img-fluid"
                        alt="Image Description"
                    />
                </Col>
            </Row>
            <Row id="details">
                <Col className="col-12">
                    <p className="text-center">
                        {eventsData[eventIndex].details}
                    </p>
                </Col>
            </Row>
            <Container className="text-center">
                <Row className="">
                    <Col>
                        <Button
                            href="#"
                            className="btn-primary btn-block shadow-none rounded-pill"
                            id="b2"
                        >
                            I&apos;ve seen enough.
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            href="#"
                            className="btn-primary btn-block shadow-none rounded-pill"
                            onClick={incIndex(eventIndex, setEventIndex)}
                            id="b1"
                        >
                            Show me more
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-3 justify-content-center" >
                    <input type="checkbox" id="nsfw-toggle" />
                    <label className="shadow-none" htmlFor="nsfw-toggle" id="nsfw-label">
                        <svg
                            id="warning"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z"
                                stroke="#0f0f0f"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <svg
                            id="lock"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                                stroke="#0f0f0f"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </label>                    
                    <p>
                        NSFL
                    </p>
                </Row>
            </Container>
        </Container>
    );
}

function incIndex(eventIndex: number, setEventIndex: SetEventIndex) {
    return () => {
        if (eventIndex + 1 >= eventsData.length) return setEventIndex(0);
        setEventIndex(eventIndex + 1);
    };
}

const Homepage = () => {
    const [eventIndex, setEventIndex] = useState(0);
    return (
        <>
            <MainContent
                eventIndex={eventIndex}
                setEventIndex={setEventIndex}
            ></MainContent>
        </>
    );
};

export default Homepage;
