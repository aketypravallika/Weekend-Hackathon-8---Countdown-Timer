import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={/* callback function */} /> sec.
        </h1>
      </div>
      <div id="current-time">{/* remaining time */}</div>
    </div>
  )
}


export default App;
