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
        <Card class= "h-100 bg-light" style={{ minWidth: '18rem', minHeight: '18rem'}}>
        <Card.Body>
            <Card.Text>
            {props.cards.map((card) => {
                if (card.type === props.type) {
                return (
                    <div key={props.type}>
                    {props.type === 'picture' && (
                        <img src={card.image} alt="Profile" style={{ width: '100%'}}/>
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
                        <div className="d-grid gap-2">
                            <p></p>
                            <Button 
                            onClick={() => toggleExplanation(card.ratingFirst)}
                            variant='info'
                            >
                                {activeSkill === card.ratingFirst
                                    ? <p>{card.infoFirst}{card.ratingFirst}{activeSkill === card.ratingFirst && (<p>{card.explanationFirst}</p>)}</p> 
                                    : <p>{card.infoFirst}{card.ratingFirst}</p>
                                }  
                            </Button>
                            
                            
                        </div>

                        <div className="d-grid gap-2"> 
                            <p></p>  
                            <Button
                            onClick={() => toggleExplanation(card.ratingSecond)}
                            variant='info'
                            >
                                {activeSkill === card.ratingSecond
                                    ? <p>{card.infoSecond}{card.ratingSecond}{activeSkill === card.ratingSecond && (<p>{card.explanationSecond}</p>)}</p> 
                                    : <p>{card.infoSecond}{card.ratingSecond}</p>
                                }
                            </Button>
                            
                        </div>

                        <p></p>
                        <div className="d-grid gap-2">
                            <Button
                            onClick={() => toggleExplanation(card.ratingThird)}
                            variant='info'
                            >
                                {activeSkill === card.ratingThird
                                    ? <p>{card.infoThird}{card.ratingThird}{activeSkill === card.ratingThird && (<p>{card.explanationThird}</p>)}</p> 
                                    : <p>{card.infoThird}{card.ratingThird}</p>
                                }
                            </Button>
                            
                        </div>

                        <p></p>
                        <div className="d-grid gap-2">
                            <Button  
                            onClick={() => toggleExplanation(card.ratingFourth)}
                            variant='info'
                            >
                                {activeSkill === card.ratingFourth 
                                ? <p>{card.infoFourth}{card.ratingFourth}{activeSkill === card.ratingFourth && (<p>{card.explanationFourth}</p>)}</p> 
                                : <p>{card.infoFourth}{card.ratingFourth}</p>
                                }
                            </Button>
                            
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