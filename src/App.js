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

  renderBottomBar(){
    return(
      <BottomBar
      />
    );
  }

  renderCard(i,l){
    var j = this.state.weatherData;

    return(
      <Card
        day={i}
        data={j}
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
            {this.renderMainCard(0, cloud)}
        </div>
        <div className="week_cards">
            {this.renderCard(0, cloud)}
            {this.renderCard(1, sun)}
            {this.renderCard(2, sun)}
            {this.renderCard(3, sun)}
            {this.renderCard(4, cloud)}
        </div>
            {this.renderBottomBar()}
        </div>
      </div>
    );
  }
}

export default App;
