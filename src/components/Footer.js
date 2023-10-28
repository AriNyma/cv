import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(props) {
  return (
    <div className={`bg-${props.isDarkMode ? 'dark' : 'info'} mt-auto text-${props.isDarkMode ? 'light' : 'dark'}`}>
      <Container className="p-3">
        <Row>
          <p className="text-center">{props.isDarkMode ? 'Follow me on social media:' : 'Follow me on social media:'}</p>
          <Col className="text-center">
            <a href={props.links.instagram} className={`text-${props.isDarkMode ? 'light' : 'dark'}`}>Instagram</a>
          </Col>
          <Col className="text-center">
            <a href={props.links.facebook} className={`text-${props.isDarkMode ? 'light' : 'dark'}`}>Facebook</a>
          </Col>
          <Col className="text-center">
            <a href={props.links.linkedin} className={`text-${props.isDarkMode ? 'light' : 'dark'}`}>LinkedIn</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;