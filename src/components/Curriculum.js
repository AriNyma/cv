import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import CvCard from './CvCard';

function Curriculum(props) {
  const { links, isDarkMode, toggleDarkMode } = props;

  return (
    <div className={`flex-column min-vh-100 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavigationBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Container className="mt-5">
        <Row className="grid">
          {props.cards.map((card, index) => (
            <Col key={index} className="grid">
              <CvCard type={card.type} cards={[card]} isDarkMode={isDarkMode} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer links={links} isDarkMode={isDarkMode} />
    </div>
  );
}

export default Curriculum;