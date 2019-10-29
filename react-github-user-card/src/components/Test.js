import React from 'react';
import { Card } from 'react-bootstrap';

const Test = (props) => {
    return (
        <Card className="text-center" bg="secondary" border="dark" text="white" style={{ width: '18rem' }}>
             <Card.Img variant="top" src={props.image} alt={props.name} />
             <Card.Title>{props.username}</Card.Title>
        </Card>
    )
}

export default Test;
