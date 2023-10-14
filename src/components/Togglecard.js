import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function AnswerCard(props) {
    const [toggle, setToggle] = useState(false);

    const toggleIs = () => {
        setToggle(current => !current);
    }
    console.log(toggle);
    return toggle ? (
        <>  
            <Row>
                <Col style = {{width: '18rem', background: "success"}} sm>
                    <Card.Text>
                        <Col style = {{background: "white"}}>Your Answer</Col>
                        <Col>
                        {props.cards.teksti1}
                        </Col>
                    </Card.Text>
                </Col>
                <Col>
                    <Button onClick={toggleIs}>Hide answer</Button>
                </Col>
            </Row>
        </>
    ) : (
        <>
            <Row>
                <Col style = {{width: '18rem', background: "success"}} sm>
                    <Card.Text>
                        <Col style = {{background: "white"}}>Your Answer</Col>
                        <Col>
                        {props.cards.teksti2}
                        </Col>
                    </Card.Text>
                </Col>
                <Col>
                    <Button onClick={toggleIs}>Answer</Button>
                </Col>
            </Row>

        </>
    );
}