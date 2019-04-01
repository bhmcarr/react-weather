import React, { Component } from 'react';
import './App.css';

// this sucks, get rid of it
function getWeatherData(){
  const appId='8a1a6ea7368ab7181ac5cbc8566ef7de';
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: "Buffalo",
    };
  }

  renderTitleBar(i){
    return(
      <TitleBar
        city={i}
      />
    );
  }

  renderBottomBar(){
    return(
      <BottomBar
        onClick={() => this.handleCityUpdate()}
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

  handleCityUpdate(){
    this.setState({city: "Lewiston"});
  }

  render(){
    const cloud = "/img/cloud.png";
    const sun = "/img/sun.png";
    return(
      <div className="app_wrapper">
        <div className="app">
            {this.renderTitleBar(this.state.city)}
            {this.renderCard("Monday", 10, 5, cloud)}
            {this.renderCard("Tuesday", 10, 5, sun)}
            {this.renderCard("Wednesday", 10, 5, sun)}
            {this.renderCard("Thursday", 10, 5, sun)}
            {this.renderCard("Friday", 10, 5, cloud)}
            {this.renderCard("Saturday", 10, 5, cloud)}
            {this.renderCard("Sunday", 10, 5, sun)}
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
        <p className="day_text">{this.state.day}</p>
        <p className="temp_text">High: {this.state.highTemp}</p>
        <p className="temp_text">Low: {this.state.lowTemp}</p>
        <img src={this.state.imageLink} className="weather_icon"></img>
      </div>
    );
  }
}

class TitleBar extends Component {
  constructor(props){
    super (props);
    var date = new Date();
    this.state = {
        city:    this.props.city,
        month:   date.getMonth() + 1,
        hours:   date.getHours(),
        minutes: date.getMinutes(),
    };
  }

  render(){
    return(
      <div className="title_bar">
        <div className="tb_float_left">
          <p>{this.state.city}</p>
        </div>
        <div className="tb_float_right">
          <p>{this.state.hours}:{this.state.minutes}</p>
        </div>
        <div className="clearBoth"></div>
      </div>
    );
  }
}

class BottomBar extends Component {
  render(){
    return(
      <div className="bottom_bar">
        test
      </div>
    );
  }
}

export default App;
