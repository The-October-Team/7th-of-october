import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import eventsData from "./data.json";

type SetEventIndex = (index: number) => void;

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
                <Col className="col-12">
                    <Image
                        src={eventsData[eventIndex].path}
                        className="img-fluid"
                        alt="Image Description"
                    />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="col-12">
                    <p className="text-center">
                        {eventsData[eventIndex].details}
                    </p>
                </Col>
            </Row>
            <Container className="text-center">
                <Row className="mt-3">
                    <Col>
                        <Button
                            href="#"
                            className="btn-primary btn-block"
                            onClick={incIndex(eventIndex, setEventIndex)}
                            id="b1"
                        >
                            Button 1
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            href="#"
                            className="btn-primary btn-block"
                            id="b2"
                        >
                            Button 2
                        </Button>
                    </Col>
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
