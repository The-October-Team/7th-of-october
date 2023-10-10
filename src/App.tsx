import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Button, Col, Image, Card } from 'react-bootstrap';
 
function MainContent() {
    return (
      <div className="container mt-5">
      <Row>
        <Col className="col-12">
          <h1 className="text-center">Your Title</h1>
          <h2 className="text-center">Subtitle</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col-12">
          <Image src="/images/graphic_design_is_my_passion.png" className="img-fluid" alt="Image Description" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col-12">
          <p className="text-center">Description text goes here. You can add more details below the image.</p>
        </Col>
      </Row>
      <Container className="text-center">
        <Row className="mt-3">
          <Col>
            <Button href="#" className="btn-primary btn-block" id="b1">Button 1</Button>
          </Col>
          <Col>
            <Button href="#" className="btn-primary btn-block" id="b2">Button 2</Button>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

const Homepage = () => {
    return (
        <>
            <MainContent></MainContent>
        </>
    );
}

export default Homepage;
