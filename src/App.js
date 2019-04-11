import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import TitleBar from './TitleBar.js';

class App extends Component {
  constructor(props){
    super(props);
    var date = new Date();
    var forecastDays = this.makeWeekArray(date.getDay());

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

  makeWeekArray(i){
    // this was added because 'dates' in JS's Date() roll over but 'days' do not.
    switch(i) {
      case 0: return [0,1,2,3,4];
      case 1: return [1,2,3,4,5];
      case 2: return [2,3,4,5,6];
      case 3: return [3,4,5,6,0];
      case 4: return [4,5,6,0,1];
      case 5: return [5,6,0,1,2];
      case 6: return [6,0,1,2,3];
      default:
        console.log("Week array error.");
    }
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

  renderCard(i){
    return(
      <Card
        day={i}
        dayName={this.state.forecastDays[i]}
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
      .catch(function(error){
        this.setState({city: "Buffalo"});
      });

    event.preventDefault();
  }

  render(){
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
            {this.renderCard(0)}
            {this.renderCard(1)}
            {this.renderCard(2)}
            {this.renderCard(3)}
            {this.renderCard(4)}
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
