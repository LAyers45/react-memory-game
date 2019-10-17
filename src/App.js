import React, { Component } from "react";
import HalloweenCard from "./components/HalloweenCard";
import Wrapper from "./components/Wrapper";
import monster from "./monster.json";
import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.monster to the monster json array
  state = {
    monster
  };

  removeFriend = id => {
    // Filter this.state.monster for monster with an id not equal to the id being removed
    const monster = this.state.monster.filter(friend => friend.id !== id);
    // Set this.state.monster equal to the new monster array
    this.setState({ monster });
  };

  // Map over this.state.monster and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar />
        {this.state.monster.map(friend => (
          <HalloweenCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
