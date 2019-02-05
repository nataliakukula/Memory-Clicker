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
    animateMessage: false,
    gifs: images,
    clicked: []
  }

  componentDidUpdate() {
    if (this.state.animateMessage) {
      // when the state is updated (message is anitmated), 
      // a timeout is triggered to switch it back off
      this.turnOffanimateMessage = setTimeout(() => {
        this.setState(() => ({ animateMessage: false }))
      }, 500);
    }
  }
  componentWillUnmount() {
    // we set the timeout so that we can clean it up when the component is unmounted
    // otherwise you could get your app trying to modify the state on an
    // unmounted component, which will throw an error
    clearTimeout(this.turnOffanimateMessage);
  }

  handleGifClick = (id) => {
    // console.log(this.state.animateMessage);
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
          "message": "Woohoo, you win!"
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
        "message": "DOUBLE CLICK, try again!",
        "clicked": []
      })

    } else {
      // start over
      this.setState({
        "currentScore": 0,
        "message": "DOUBLE CLICK, try again!",
        "clicked": []
      })

    };

    let gifs = this.state.gifs.slice(0);
    // Mix gifs by array.sort() -> takes a call back comparison function to sort numerically (positve asc., negavite desc.)
    // Math.random() - 0.5 works here to randomize, because it equally retuns negative and postive numbers
    gifs.sort(() => Math.random() - 0.5);
    // the new random array is set in the place of the original gifs
    // set the nameClass for the text animation back to false
    this.setState({
      "gifs": gifs,
      "animateMessage": true
    });

  };

  render() {
    return (
      <div className="container">
        <Header
          animateMessage={this.state.animateMessage}
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
        <footer>SLOTHS ARE COOL INC.</footer>
      </div >
    );
  }
}

export default App;