import React, { Component } from 'react';

class MainCard extends Component {
  constructor(props){
    super(props);
    var date = new Date();
    const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var day = daysOfWeek[date.getDay()-1];
    this.state = {
      day: day,
    };
  }


  render(){
    if (this.props.data.length === 0){
      return (
        <span>Loading..</span>
      );
    }
    return (
      <div className="main_card">
        <p className="main_day_text">{this.state.day}</p>
        <p className="main_temp_text">High: {this.props.data.list[0].main.temp_max}</p>
        <p className="main_temp_text">Low: {this.props.data.list[0].main.temp_min}</p>
        <img src={this.props.imageLink} className="main_weather_icon" alt="icon"></img>
      </div>
    );
  }
}

export default MainCard;
