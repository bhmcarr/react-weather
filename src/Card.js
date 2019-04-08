import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var day = daysOfWeek[this.props.day];
    this.state = {
      day: day,
      dayId: daysOfWeek[this.props.dayId-1],
    };
  }

  render(){
    if (this.props.data.length === 0){
      return (
        <span>Loading..</span>
      );
    }
    if (this.props.day === 0){
      return(
        <div className="left_card">
          <p className="day_text">{this.state.dayId}</p>
          <p className="temp_text">High: {this.props.data.list[this.props.day].main.temp_max}</p>
          <p className="temp_text">Low: {this.props.data.list[this.props.day].main.temp_min}</p>
          <img src={this.props.imageLink} className="weather_icon" alt="icon"></img>
        </div>
      );
    }
    return(
      <div className="card">
        <p className="day_text">{this.state.dayId}</p>
        <p className="temp_text">High: {this.props.data.list[this.props.day].main.temp_max}</p>
        <p className="temp_text">Low: {this.props.data.list[this.props.day].main.temp_min}</p>
        <img src={this.props.imageLink} className="weather_icon" alt="icon"></img>
      </div>
    );
  }
}

export default Card;
