import React from 'react';
import "./animate.css";

export default (props) => {
    return (
        <header className="nav-container">
            <div>MEMORY CLICKER</div>
            <div
                className={props.animateMessage ? "animate-message" : ""}>{props.message}
            </div>
            <div> Current score: {props.currentScore}</div>
            <div>Top score: {props.topScore}</div>
        </header >
    )
}