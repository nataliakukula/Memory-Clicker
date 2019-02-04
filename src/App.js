import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Gif from './components/Gif';
import Directions from './components/Directions';
import images from './images';

class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    message: "",
    gifs: images,
    clicked: []
  }

  handleGifClick = (id) => {
    // Creating a new copy of clicked array by .slice()
    let clicked = this.state.clicked.slice(0);
    //Check if an element was already clicked by comparing values of id's
    const clickCheck = clickedElement => id === clickedElement;
    //.findIndex() array method takes a call back function(with an element, index, array)
    // and retuns the index of first instance from the array
    // -1 is retuned when item is not found and is pushed to the clicked array
    if (clicked.findIndex(clickCheck) === -1) {

      clicked.push(id);
      //you win
      (clicked.length === 12) ?
        this.setState({
          "currentScore": this.state.currentScore + 1,
          "topScore": clicked.length,
          "message": "Woohoo, you win!",
        })
        :
        //update current score
        this.setState({
          "currentScore": this.state.currentScore + 1,
          "message": "Good click, keep going!",
          "clicked": clicked
        })
    } else if (clicked.length > this.state.topScore) {
      // update new top score and start over
      this.setState({
        "topScore": clicked.length,
        "currentScore": 0,
        "message": "Double click, you lose!",
        "clicked": []
      })

    } else {
      // start over
      this.setState({
        "currentScore": 0,
        "message": "Double click, you lose!",
        "clicked": []
      })
    };
    // Mix gifs by array.sort() -> takes a call back comparison function to sort numerically (positve asc., negavite desc.)
    // Math.random() - 0.5 works here to randomize, because it equally retuns negative and postive numbers
    let gifs = this.state.gifs.slice(0);
    console.log(gifs);
    gifs.sort(() => Math.random() - 0.5);
    console.log(gifs);
    // the new random array is set in the place of the original gifs
    this.setState({ gifs });
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
            <Gif
              key={i}
              src={gif.src}
              id={gif.id}
              handleGifClick={this.handleGifClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
