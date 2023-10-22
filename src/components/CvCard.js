import { Card } from "react-bootstrap";

function CvCard(props) {
    
    return (
        <div>
        <Card style={{ minWidth: '18rem', minHeight: '18rem', margin: '20px', backgroundColor: "lightgrey", backgroundImage: `url(${props.cards.image})`, backgroundPosition: 'top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <Card.Body>
                <Card.Title>{props.cards.title}</Card.Title>
                <Card.Text>{props.cards.infoFirst}</Card.Text>
                {props.cards.ratingFirst}
                <Card.Text>{props.cards.infoSecond}</Card.Text>
                {props.cards.ratingSecond}
                <Card.Text>{props.cards.infoThird}</Card.Text>
                {props.cards.ratingThird}
            </Card.Body>
        </Card>
        </div>
    );
}

export default CvCard;