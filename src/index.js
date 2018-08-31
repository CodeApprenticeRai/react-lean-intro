import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {

  render(){
    return(
        <div>
          <h1 className="react-title">Welcome to A Lean Introduction to React</h1>
          <p className="react-intro">Hello React!!</p>
        </div>
    );
  }
};

const root = document.getElementById("root");
ReactDOM.render(<App/>,  root)
