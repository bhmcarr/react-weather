import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import TitleBar from './TitleBar.js';
import MainCard from './MainCard.js';
import BottomBar from './BottomBar.js';

class App extends Component {
  constructor(props){
    super(props);
    var date = new Date();
    this.state = {
      hours:   date.getHours(),
      minutes: date.getMinutes(),
      city: "Buffalo",
      daysOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      weatherData: [],
    };
  }

  componentDidMount(){
    const appId="b6fd93a747972ebea2d0b6ae6dc84c8b";
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "&cnt=7&units=imperial&APPID=" +  appId;

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

  renderBottomBar(){
    return(
      <BottomBar
      />
    );
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

  renderMainCard(i,l){
    var j = this.state.weatherData;

    return(
      <MainCard
        day={i}
        data={j}
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
            {this.renderMainCard(this.state.daysOfWeek[0], cloud)}
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
