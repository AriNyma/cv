import { Card, Button } from "react-bootstrap";

function CvCard(props) {
    return (
        <Card style={{ minWidth: '18rem', margin: '20px' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
        <Card.Body>
            <Card.Title>Example Card</Card.Title>
            <Card.Text>This is an example React card</Card.Text>
            <Button variant="primary">Example Button</Button>
        </Card.Body>
        </Card>
    );
}

export default CvCard;