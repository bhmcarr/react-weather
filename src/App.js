import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import TitleBar from './TitleBar.js';

class App extends Component {
  constructor(props){
    super(props);
    var date = new Date();
    var forecastDays = [date.getDay(), date.getDay()+1, date.getDay()+2, date.getDay()+3, date.getDay()+4];

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);

    this.state = {
      hours:   date.getHours(),
      minutes: date.getMinutes(),
      city: "Buffalo",
      weatherData: [],
      forecastDays: forecastDays,
    };
  }

  componentDidMount(){
    const appId="b6fd93a747972ebea2d0b6ae6dc84c8b";
    const URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + this.state.city + "&cnt=7&units=imperial&APPID=" +  appId;

    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({weatherData:data}))
      .catch(error => console.error(error));
  }

  renderTitleBar(i,j,k){
    return(
      <TitleBar
        city={i}
        hours={j}
        minutes={k}
      />
    );
  }

  renderCard(i,j,k){
    return(
      <Card
        day={i}
        dayName={j}
        imageLink={k}
        data={this.state.weatherData}
      />
    );
  }

  handleCityChange(event){
    this.setState({city: event.target.value});
  }

  handleSubmit(event){
    //alert('City changed to: ' + this.state.city);
    const appId="b6fd93a747972ebea2d0b6ae6dc84c8b";
    const URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + this.state.city + "&cnt=7&units=imperial&APPID=" +  appId;

    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({weatherData:data}))
      .catch(error => console.error(error));

    event.preventDefault();
  }

  render(){
    const cloud = "/img/cloud.png";
    const sun = "/img/sun.png";
    if (this.state.weatherData.length === 0) {
      return(
        <span>Loading..</span>
      );
    }
    return(
      <div className="app_wrapper">
        <div className="app">
            {this.renderTitleBar(this.state.city, this.state.hours, this.state.minutes)}
        </div>
        <div className="week_cards">
            {this.renderCard(0, this.state.forecastDays[0], cloud)}
            {this.renderCard(1, this.state.forecastDays[1], sun)}
            {this.renderCard(2, this.state.forecastDays[2], sun)}
            {this.renderCard(3, this.state.forecastDays[3], sun)}
            {this.renderCard(4, this.state.forecastDays[4], cloud)}
        </div>
        <div className="changeForm">
          <form onSubmit={this.handleSubmit}>
            City: <input type="text" value={this.state.city} onChange={this.handleCityChange}/>
                  <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
