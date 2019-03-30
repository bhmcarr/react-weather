import React, { Component } from 'react';
import './App.css';

class App extends Component {
  renderCard(i,j,k,l){
    return(
      <Card
        day={i}
        high_temp={j}
        low_temp={k}
        image_link={l}
      />

    );
  }

  render(){
    return(
      <div>
          {this.renderCard("Monday", 10, 5, "/img/cloud.png")}
          {this.renderCard("Tuesday", 10, 5, "/img/sun.png")}
          {this.renderCard("Wednesday", 10, 5, "/img/sun.png")}
          {this.renderCard("Thursday", 10, 5, "/img/cloud.png")}
          {this.renderCard("Friday", 10, 5, "/img/cloud.png")}
          {this.renderCard("Saturday", 10, 5, "/img/sun.png")}
          {this.renderCard("Sunday", 10, 5, "/img/sun.png")}
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
      image_link: this.props.image_link,
    };
  }

  render(){
    return(
      <div className="card">
        <p className="day_text">{this.state.day}</p>
        <p>High: {this.state.high_temp}</p>
        <p>Low: {this.state.low_temp}</p>
        <img src={this.state.image_link} className="weather_icon"></img>
      </div>
    );
  }
}

export default App;
