import { Card } from "react-bootstrap";

function CvCard(props) {
    
    return (
        <Card style={{ minWidth: '18rem', minHeight: '18rem', margin: '20px',  backgroundImage: `url(${props.cards.image})`, backgroundPosition: 'top', backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
            <Card.Body>
                <Card.Title>{props.cards.title}</Card.Title>
                <Card.Text>{props.cards.info}</Card.Text>
                {props.cards.button}
            </Card.Body>
        </Card>
    );
}

export default CvCard;