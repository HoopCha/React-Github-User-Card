import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = (props) => {
    return (
        <div>
    <Card bg="primary" border="dark" text="white" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} alt={props.name} />
            <Card.Body>
            <Card.Title className="text-center">{props.name} </Card.Title>
            <Card.Text>Username: {props.username}</Card.Text>
            <Card.Text>Location: {props.location}</Card.Text>
            <Card.Text>Followers: {props.followers}</Card.Text>
            <Card.Text>Following: {props.following}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default MyCard;