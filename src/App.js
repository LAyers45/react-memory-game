import React, { Component } from "react";
import HalloweenCard from "./components/HalloweenCard";
import halloween from "./halloween.json";
import Navbar from "./components/Navbar";


function shuffleImage(randArray) {
  for (let i = randArray.length - 1; i > 0; i--) {
    const x = Math.floor(Math.random() * (i + 1));
    [randArray[i], randArray[x]] = [randArray[x], randArray[i]]
  }
  return randArray;
}


class App extends Component {
  // Creating State elements 
  state = {
    score: 0,
    highScore: 0,
    halloween,
    beenPushed: []

  };

  clickPic = id => {
    let beenPushed = this.state.beenPushed;
    let score = this.state.score;
    let highScore = this.state.highScore;


    if (beenPushed.indexOf(id) === -1) {
      beenPushed.push(id);
      //console.log(beenPushed)
      //run game functions
      this.handleIncrement();
      this.startShuffle();
    } else {
      this.setState({
        score: 0,
        beenPushed: []
      })
    }
    if (score > highScore) {
      this.setState({
        highScore: score
      });
    }
  }

  startShuffle = () => {
    this.setState({
      halloween: shuffleImage(halloween)
    })
  }

  handleIncrement = () => {
    this.setState({
      score: this.state.score + 1
    })
  }
  // Map halloween objects as well as calling items to page
  render() {
    return (
      <div className="container">
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <div className="row">
          {this.state.halloween.map(halloween => (
            <HalloweenCard
              id={halloween.id}
              name={halloween.name}
              image={halloween.image}
              clickPic={this.clickPic} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
