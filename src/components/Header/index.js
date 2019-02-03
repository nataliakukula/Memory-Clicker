import React from 'react';

export default (props) => {
    return (
        <header className="nav-container">
            <div>MEMORY CLICKER</div>
            <div>{props.message}</div>
            <div>Current score: {props.currentScore}</div>
            <div>Top score: {props.topScore}</div>
        </header>
    )
}