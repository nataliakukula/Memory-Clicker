import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Gif from './components/Gif';
import Directions from './components/Directions';

//Importing images to display:
import gif1 from './images/gif-1.gif'
import gif2 from './images/gif-2.gif'
import gif3 from './images/gif-3.gif'
import gif4 from './images/gif-4.gif'
import gif5 from './images/gif-5.gif'
import gif6 from './images/gif-6.gif'
import gif7 from './images/gif-7.gif'
import gif8 from './images/gif-8.gif'
import gif9 from './images/gif-9.gif'
import gif10 from './images/gif-10.gif'
import gif11 from './images/gif-11.gif'
import gif12 from './images/gif-12.gif'

class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    message: "You've guessed correctly!",
    gifs: [
      { id: 1, src: gif1 },
      { id: 2, src: gif2 },
      { id: 3, src: gif3 },
      { id: 4, src: gif4 },
      { id: 5, src: gif5 },
      { id: 6, src: gif6 },
      { id: 7, src: gif7 },
      { id: 8, src: gif8 },
      { id: 9, src: gif9 },
      { id: 10, src: gif10 },
      { id: 11, src: gif11 },
      { id: 12, src: gif12 },
    ]
  }

  handleGifClick = (id) => {
    console.log("I've been clicked: ", id);
    //check to see if this has been clicked before?
    // this.state.gifs.forEach(gif) => {
    // }
  };

  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Directions />
        <div className="gif-container">
          {this.state.gifs.map((gif, i) => (
            <Gif key={i} src={gif.src} id={gif.id} handleGifClick={this.handleGifClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
