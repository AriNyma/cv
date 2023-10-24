import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


function CvCard(props) {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleExplanation = (skill) => {
    if (activeSkill === skill) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skill);
    }
  };

  return (
    <Card style={{ minWidth: '18rem', minHeight: '18rem', backgroundColor: "lightgrey"}}>
      <Card.Body>
        <Card.Text>
          {props.cards.map((card) => {
            if (card.type === props.type) {
              return (
                <div key={props.type}>
                  {props.type === 'picture' && (
                    <img src={card.image} alt="Profile" style={{ width: '100%' }}/>
                  )}
                  
                  {props.type === 'bio' && (
                    <div>

                            <h1>{card.title}</h1>
                            <p>{card.infoFirst}</p>
                            <p>{card.infoSecond}</p>

                    </div>
                  )}
                  {props.type === 'quick-facts' && (
                    <div>

                        <h1>{card.title}</h1>
                        <ul>
                            <li>{card.infoFirst}</li>
                            <li>{card.infoSecond}</li>
                            <li>{card.infoThird}</li>
                        </ul>

                    </div>
                  )}
                  {props.type === 'skills' && (
                    <div>
                      <h1>{card.title}</h1>
                      <p>{card.infoFirst}</p>
                      <div>
                        <Button
                          onClick={() => toggleExplanation(card.ratingFirst)}
                          class="btn btn-light"
                        >
                          {activeSkill === card.ratingFirst
                            ? 
                                <p>{card.ratingFirst}</p>
                               : 
                                <p>{card.ratingFirst}</p>
                              }  
                        </Button>
                        {activeSkill === card.ratingFirst && (
                          <p>{card.explanationFirst}</p>
                        )}
                        
                      </div>

                      <p>{card.infoSecond}</p>
                      <div>   
                        <Button
                          onClick={() => toggleExplanation(card.ratingSecond)}
                          class="btn btn-light"
                        >
                          {activeSkill === card.ratingSecond
                            ? 
                                <p>{card.ratingSecond}</p>
                                : 
                                <p>{card.ratingSecond}</p>
                              }
                        </Button>
                        {activeSkill === card.ratingSecond && (
                          <p>{card.explanationSecond}</p>
                        )}
                      </div>

                      <p>{card.infoThird}</p>
                      <div>
                        <Button
                          onClick={() => toggleExplanation(card.ratingThird)}
                          class="btn btn-light"
                        >
                          {activeSkill === card.ratingThird
                            ? 
                                <p>{card.ratingThird}</p>
                                : 
                                <p>{card.ratingThird}</p>
                              }
                        </Button>
                        {activeSkill === card.ratingThird && (
                          <p>{card.explanationThird}</p>
                        )}
                      </div>

                      <p>{card.infoFourth}</p>
                      <div>
                        <Button
                          onClick={() => toggleExplanation(card.ratingFourth)}
                          class="btn btn-light"
                        >
                          {activeSkill === card.ratingFourth 
                          ? 
                                <p>{card.ratingFourth}</p>
                                : 
                                <p>{card.ratingFourth}</p>
                          }
                        </Button>
                        {activeSkill === card.ratingFourth && (
                          <p>{card.explanationFourth}</p>
                        )}
                      </div>
                    </div>
                  )}
                  {props.type === 'work-merits' && (
                    <div>
                            <h1>{card.title}</h1>
                            <p>{card.infoFirst}</p>
                            <p>{card.infoSecond}</p>
                            <p>{card.infoThird}</p>
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CvCard;