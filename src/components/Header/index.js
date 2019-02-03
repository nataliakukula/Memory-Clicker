import React from 'react';

export default (props) => {
    return (
        <header className="inner-container">
            <div>Memory Clicker</div>
            <div>{props.message}</div>
            <div>Current score: {props.currentScore}</div>
            <div>Top score: {props.topScore}</div>
        </header>
    )
}