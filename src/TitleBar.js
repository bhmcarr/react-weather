import React, { Component } from 'react';

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

export default TitleBar;
