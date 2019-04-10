import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var day = daysOfWeek[this.props.day];
    this.state = {
      day: day,
      dayName: daysOfWeek[this.props.dayName-1],
    };
  }

  pickWeatherIcon(){
    // this value should probably be tweaked for accuracy,
    // but since I have no idea what openweathermap thinks
    // "clouds: 57" equates to I can only kind of guess.
    const cloudyThreshold = 75;
    const partlyCloudyThreshold = 50;

    // hooray for nonsensical field names !!
    // edit: also hooray for INCONSISTENT FIELDS OH MY GOD WHAT
    if (this.props.data.list[this.props.day].rain && this.props.data.list[this.props.day].rain["3h"] !== undefined){
      return "/img/rain.png";
    } else if (this.props.data.list[this.props.day].snow && this.props.data.list[this.props.day].snow["3h"] !== undefined){
      return "/img/snow.png";
    } else if(this.props.data.list[this.props.day].clouds.all > cloudyThreshold){
      return "/img/cloud.png";
    } else if(this.props.data.list[this.props.day].clouds.all > partlyCloudyThreshold) {
      return "/img/partlyCloud.png";
    } else {
      return "/img/sun.png";
    }
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
          <p className="day_text">{this.state.dayName}</p>
          <p className="temp_text">High: {this.props.data.list[this.props.day].main.temp_max}{'\u00B0'}</p>
          <p className="temp_text">Low: {this.props.data.list[this.props.day].main.temp_min}{'\u00B0'}</p>
          <img src={this.pickWeatherIcon()} className="weather_icon" alt="icon"></img>
        </div>
      );
    }
    return(
      <div className="card">
        <p className="day_text">{this.state.dayName}</p>
        <p className="temp_text">High: {this.props.data.list[this.props.day].main.temp_max}{'\u00B0'}</p>
        <p className="temp_text">Low: {this.props.data.list[this.props.day].main.temp_min}{'\u00B0'}</p>
        <img src={this.pickWeatherIcon()} className="weather_icon" alt="icon"></img>
      </div>
    );
  }
}

export default Card;
