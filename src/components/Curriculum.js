import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../CV.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import CvCard from './CvCard';

function Curriculum(props) {
    return (
        <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <Container className="mt-5">
            <Row>
                {props.cards.map((card, index) => ( 
                    <Col key={index}>
                    <CvCard />
                    </Col>
                ))}
            </Row>
        </Container> 
        <Footer />
        </div>
    );
}

export default Curriculum;