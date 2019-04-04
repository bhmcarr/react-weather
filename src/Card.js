import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      highTemp:   this.props.highTemp,
      lowTemp:    this.props.lowTemp,
      day:        this.props.day,
      imageLink:  this.props.imageLink,
    };
  }

  render(){
    return(
      <div className="card">
        <p className="day_text">{this.props.day}</p>
        <p className="temp_text">High: {this.state.highTemp}</p>
        <p className="temp_text">Low: {this.state.lowTemp}</p>
        <img src={this.state.imageLink} className="weather_icon" alt="icon"></img>
      </div>
    );
  }
}

export default Card;
