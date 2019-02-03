import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Gif from './components/Gif';
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
    message: "You've guesses correctly!",
    gifs: [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12]
  }

  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className="gif-container">
          {this.state.gifs.map((gif, i) => (
            <Gif key={i} src={gif} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
