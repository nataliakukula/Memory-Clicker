import React from 'react';

export default (props) => {

    return (

        <img className="gif" src={props.src} alt="gif" onClick={() => props.handleGifClick(props.id)} />

    )
}