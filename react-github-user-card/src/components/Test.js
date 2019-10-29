import React from 'react';

const Test = (props) => {
    return (
        <div>
             <img src={props.image} alt={props.name}/>
             <h1>{props.username}</h1>
        </div>
    )
}

export default Test;