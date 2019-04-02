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
    };
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
      />
    );
  }

  handleCityUpdate(){
    this.setState({city: "Lewiston"});
  }
  handleTimeChange(){
    this.setState({hours:0, minutes: "00"});
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
        Test options:
        <button onClick={() => props.clickTown()}>set city to Lewiston</button>
        <button onClick={() => props.clickTime()}>set time to midnight</button>
      </div>
    );
}

export default App;
