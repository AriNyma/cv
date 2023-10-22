import { Container, Row, Col } from "react-bootstrap";

function Footer(props){

    return (
        <div className="bg-secondary mt-auto">
            <Container className="p-3">
            <Row>
                <p className="text-center text-white">Follow me on social media:</p>
                <Col className="text-center">
                    <a href={props.links.instagram} className="text-white">Instagram</a>
                </Col>
                <Col className="text-center">
                    <a href={props.links.facebook} className="text-white">Facebook</a>
                </Col>
                <Col className="text-center">
                    <a href={props.links.linkedin} className="text-white">LinkedIn</a>
                </Col>
            </Row>
            </Container>
      </div>
);
}

export default Footer;