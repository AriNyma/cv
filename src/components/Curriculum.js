import React from 'react';
import { Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import CvCard from './CvCard';

function Curriculum(props) {
    const { links } = props;
    return (
        <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <Container className="mt-5">
            <Row>
                {props.cards.map((card, index) => ( 
                    <Col key={index} >
                        <CvCard cards = {card} />
                    </Col>
                ))}
            </Row>
        </Container> 
        <Footer links = {links}/>
        </div>
    );
}

export default Curriculum;