import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderCard(i){
    return(
      <Card
        value={i}
        day={i}
      />

    );
  }

  render(){
    return(
      <div>
        {this.renderCard("Monday")}
      </div>
    );
  }
}

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      high_temp: 0,
      low_temp: 0,
      day: this.props.day,
    };
  }

  render(){
    return(
      <p>{this.state.day}</p>
    );
  }
}

export default App;
