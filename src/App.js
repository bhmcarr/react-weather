import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import TitleBar from './TitleBar.js';
import MainCard from './MainCard.js';
import BottomBar from './BottomBar.js';
import shuffle from './shuffle.js';

class App extends Component {
  constructor(props){
    super(props);
    var date = new Date();
    this.state = {
      hours:   date.getHours(),
      minutes: date.getMinutes(),
      city: "Buffalo",
      daysOfWeek: Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"),
      weatherData: null,
    };
    // get weather data here when app is created
    this.getWeatherData();
  }

  getWeatherData(){
    const appId="8a1a6ea7368ab7181ac5cbc8566ef7de";
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "&cnt=7&units=imperial&APPID=" +  appId;

    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({weatherData:data}));
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

  renderBottomBar(){
    return(
      <BottomBar
        clickTown={() => this.handleCityUpdate()}
        clickTime={() => this.handleTimeChange()}
        clickDays={() => this.handleDayShuffle()}
      />
    );
  }

  handleCityUpdate(){
    this.setState({city: "Lewiston"});
  }
  handleTimeChange(){
    this.setState({hours:0, minutes: "00"});
  }
  handleDayShuffle(){
    var arr = this.state.daysOfWeek;
    arr = shuffle(arr);
    this.setState({daysOfWeek: arr});
  }

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

  renderMainCard(i,j,k,l){
    return(
      <MainCard
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
      <div className="app_wrapper">
        <div className="app">
            {this.renderTitleBar(this.state.city, this.state.hours, this.state.minutes)}
        <div className="main_card_wrapper">
            {this.renderMainCard(this.state.daysOfWeek[0], 10, 5, cloud)}
        </div>
        <div className="week_cards">
            {this.renderCard(this.state.daysOfWeek[0], 10, 5, cloud)}
            {this.renderCard(this.state.daysOfWeek[1], 10, 5, sun)}
            {this.renderCard(this.state.daysOfWeek[2], 10, 5, sun)}
            {this.renderCard(this.state.daysOfWeek[3], 10, 5, sun)}
            {this.renderCard(this.state.daysOfWeek[4], 10, 5, cloud)}
            {this.renderCard(this.state.daysOfWeek[5], 10, 5, cloud)}
            {this.renderCard(this.state.daysOfWeek[6], 10, 5, sun)}
        </div>
            {this.renderBottomBar()}
        </div>
      </div>
    );
  }
}

export default App;
