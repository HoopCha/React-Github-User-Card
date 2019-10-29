import React from 'react';

const MyCard = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name}/>
            <h1>{props.name}</h1>
            <h3>Username: {props.username}</h3>
            <h5>Location: {props.location}</h5>
            <h5>Followers: {props.followers}</h5>
            <h5>Following: {props.following}</h5>
        </div>
    )
}

export default MyCard;