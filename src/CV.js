import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function CV(props) {
  return (
    <Container>
        <Row>
            <Col xs={8} md={12}> {/*Left Column*/}
                {props.cards.map((card, index) => (
                    <Card key={index} style = {{width: '50rem'}} bg={"white"} text={"strong"}>
                    <Card.Body>
                        <Card.Title>Bio</Card.Title>
                        <Card.Text>
                        <p>{card.nimi}</p>
                        <p>Email: {card.email}</p>
                        <p>Phone: {card.puh}</p>
                        <p>Address: {card.osoite}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            <Card>
                <Card.Body>
                    <Card.Title>Picture</Card.Title>
                </Card.Body>
            </Card>
            
            </Col>
        </Row>
            
        <Row>
            <Col xs={8} md={12}>
            {/* Middle Column */}
            <section>

                <Card>
                <Card.Body>
                    <Card.Title>IT education</Card.Title>
                    <Card.Text>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
            </section>
          
            <section>
                <Card >
                <Card.Body>
                    <Card.Title>Technical Skills</Card.Title>
                    <Card.Text>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
            </section>
        </Col>
      </Row>

      <Row>
            <Col xs={8} md={12}>
            {/* Right Column */}
            <section>

                <Card>
                <Card.Body>
                    <Card.Title>Work Merits</Card.Title>
                    <Card.Text>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
            </section>
            </Col>
      </Row>
    </Container>
  );
}

export default CV;