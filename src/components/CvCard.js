import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function CvCard(props) {
  const [activeExplanation, setActiveExplanation] = useState(null);

  const toggleExplanation = (rating) => {
    if (activeExplanation === rating) {
      // Clicking the same rating again should hide the explanation
      setActiveExplanation(null);
    } else {
      // Clicking a different rating will show its explanation
      setActiveExplanation(rating);
    }
  };

  // Function to render star buttons
  const renderStars = (rating) => {
    const stars = '\u2605'.repeat(rating); // Unicode star character (★)
    return <span>{stars}</span>;
  };

  return (
    <div>
      <Card style={{ minWidth: '18rem', minHeight: '18rem', margin: '20px', backgroundColor: "lightgrey", backgroundImage: `url(${props.cards.image})`, backgroundPosition: 'top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <Card.Body>
          <Card.Title>{props.cards.title}</Card.Title>
          <Card.Text>{props.cards.infoFirst}</Card.Text>
          <div>
            {renderStars(props.cards.ratingFirst)}
            <Button
              variant="link"
              onClick={() => toggleExplanation(props.cards.ratingFirst)}
            >
              {props.cards.ratingFirst}
            </Button>
            {activeExplanation === props.cards.ratingFirst && (
              <p>{props.cards.explanationFirst}</p>
            )}
          </div>
          <Card.Text>{props.cards.infoSecond}</Card.Text>
          <div>
            {renderStars(props.cards.ratingSecond)}
            <Button
              variant="link"
              onClick={() => toggleExplanation(props.cards.ratingSecond)}
            >
              {props.cards.ratingSecond}
            </Button>
            {activeExplanation === props.cards.ratingSecond && (
              <p>{props.cards.explanationSecond}</p>
            )}
          </div>
          <Card.Text>{props.cards.infoThird}</Card.Text>
          <div>
            {renderStars(props.cards.ratingThird)}
            <Button
              variant="link"
              onClick={() => toggleExplanation(props.cards.ratingThird)}
            >
              {props.cards.ratingThird}
            </Button>
            {activeExplanation === props.cards.ratingThird && (
              <p>{props.cards.explanationThird}</p>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CvCard;