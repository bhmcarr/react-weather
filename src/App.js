import React, { Component } from 'react';
import './App.css';

class App extends Component {
  renderCard(i,j,k){
    return(
      <Card
        day={i}
        high_temp={j}
        low_temp={k}
      />

    );
  }

  render(){
    return(
      <div>
        <div className="card">
          {this.renderCard("Monday", 10, 5)}
        </div>
        <div className="card">
          {this.renderCard("Tuesday", 10, 5)}
        </div>
        <div className="card">
          {this.renderCard("Wednesday", 10, 5)}
        </div>
        <div className="card">
          {this.renderCard("Thursday", 10, 5)}
        </div>
        <div className="card">
          {this.renderCard("Friday", 10, 5)}
        </div>
        <div className="card">
          {this.renderCard("Saturday", 10, 5)}
        </div>
        <div className="card">
          {this.renderCard("Sunday", 10, 5)}
        </div>
      </div>
    );
  }
}

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      high_temp:  this.props.high_temp,
      low_temp:   this.props.low_temp,
      day:        this.props.day,
      image_link: null,
    };
  }

  render(){
    return(
      <div>
        <p>{this.state.day}</p>
        <p>High: {this.state.high_temp}</p>
        <p>Low: {this.state.low_temp}</p>
      </div>
    );
  }
}

export default App;
