import React, { Component } from 'react';

class Card extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     highTemp:   this.props.highTemp,
  //     lowTemp:    this.props.lowTemp,
  //     day:        this.props.day,
  //     imageLink:  this.props.imageLink,
  //   };
  // }

  render(){
    return(
      <div className="card">
        <p className="day_text">{this.props.day}</p>
        <p className="temp_text">High: {this.props.highTemp}</p>
        <p className="temp_text">Low: {this.props.lowTemp}</p>
        <img src={this.props.imageLink} className="weather_icon" alt="icon"></img>
      </div>
    );
  }
}

export default Card;
