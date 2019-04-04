import React, { Component } from 'react';

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

export default BottomBar;
