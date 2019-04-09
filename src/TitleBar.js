import React, { Component } from 'react';

class TitleBar extends Component {
    constructor(props){
      super(props);
      var printMinutes = this.props.minutes;
      if (this.props.minutes < 10){
        printMinutes = "0" + this.props.minutes;
      }
      this.state = {
        minutes: printMinutes,
      };

    }
    render(){
      return(
        <div className="title_bar">
          <div className="tb_float_left">
            <p>{this.props.city}</p>
          </div>
          <div className="tb_float_right">
            <p>{this.props.hours}:{this.state.minutes}</p>
          </div>
          <div className="clearBoth"></div>
        </div>
      );
    }
}

export default TitleBar;
