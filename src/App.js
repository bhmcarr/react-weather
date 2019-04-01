import React, { Component } from 'react';
import './App.css';

// this sucks, get rid of it
function getWeatherData(){
  const appId='8a1a6ea7368ab7181ac5cbc8566ef7de';
}

class App extends Component {
  renderCard(i,j,k,l){
    return(
      <Card
        day={i}
        highTemp={j}
        lowTemp={k}
        imageLink={l}
      />

    );
  }

  render(){
    const cloud = "/img/cloud.png";
    const sun = "/img/sun.png";
    return(
      <div>
          {this.renderCard("Monday", 10, 5, cloud)}
          {this.renderCard("Tuesday", 10, 5, sun)}
          {this.renderCard("Wednesday", 10, 5, sun)}
          {this.renderCard("Thursday", 10, 5, sun)}
          {this.renderCard("Friday", 10, 5, cloud)}
          {this.renderCard("Saturday", 10, 5, cloud)}
          {this.renderCard("Sunday", 10, 5, sun)}
      </div>
    );
  }
}

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      highTemp:  this.props.highTemp,
      lowTemp:   this.props.lowTemp,
      day:        this.props.day,
      imageLink: this.props.imageLink,
    };
  }

  render(){
    return(
      <div className="card">
        <p className="day_text">{this.state.day}</p>
        <p className="temp_text">High: {this.state.highTemp}</p>
        <p className="temp_text">Low: {this.state.lowTemp}</p>
        <img src={this.state.imageLink} className="weather_icon"></img>
      </div>
    );
  }
}

export default App;
