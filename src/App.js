import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    var date = new Date();
    this.state = {
      hours:   date.getHours(),
      minutes: date.getMinutes(),
      city: "Buffalo",
      daysOfWeek: Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"),
    };
    this.getWeatherData();
  }

  getWeatherData(){
    const appId="8a1a6ea7368ab7181ac5cbc8566ef7de";
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=Buffalo&cnt=7&units=imperial&APPID=" +  appId;

    fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
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

  render(){
    const cloud = "/img/cloud.png";
    const sun = "/img/sun.png";
    return(
      <div className="app_wrapper">
        <div className="app">
            {this.renderTitleBar(this.state.city, this.state.hours, this.state.minutes)}
            {this.renderCard(this.state.daysOfWeek[0], 10, 5, cloud)}
            {this.renderCard(this.state.daysOfWeek[1], 10, 5, sun)}
            {this.renderCard(this.state.daysOfWeek[2], 10, 5, sun)}
            {this.renderCard(this.state.daysOfWeek[3], 10, 5, sun)}
            {this.renderCard(this.state.daysOfWeek[4], 10, 5, cloud)}
            {this.renderCard(this.state.daysOfWeek[5], 10, 5, cloud)}
            {this.renderCard(this.state.daysOfWeek[6], 10, 5, sun)}
            {this.renderBottomBar()}
        </div>
      </div>
    );
  }
}

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
        <img src={this.state.imageLink} className="weather_icon"></img>
      </div>
    );
  }
}

function TitleBar(props) {
    return(
      <div className="title_bar">
        <div className="tb_float_left">
          <p>{props.city}</p>
        </div>
        <div className="tb_float_right">
          <p>{props.hours}:{props.minutes}</p>
        </div>
        <div className="clearBoth"></div>
      </div>
    );
}

function BottomBar(props){
    return(
      <div className="bottom_bar">
        Fun test options:
        <button onClick={() => props.clickTown()}>set city to Lewiston</button>
        <button onClick={() => props.clickTime()}>set time to midnight</button>
        <button onClick={() => props.clickDays()}>shuffle days of week</button>
      </div>
    );
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default App;
