import React, { Component } from 'react';

class MainCard extends Component {
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
    return (
      <div className="main_card">
        <p className="main_day_text">{this.state.day}</p>
        <p className="main_temp_text">High: {this.state.highTemp}</p>
        <p className="main_temp_text">Low: {this.state.lowTemp}</p>
        <img src={this.state.imageLink} className="main_weather_icon" alt="icon"></img>
      </div>
    );
  }
}

export default MainCard;
