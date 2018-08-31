import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        newTaskTitle: "",
        taskList: []
      }
    this.handleTextBoxFieldChange = this.handleTextBoxFieldChange.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.removeCatgory = this.removeCatgory.bind(this);
  }

  handleTextBoxFieldChange(event){
    this.setState({
      newTaskTitle: event.target.value,
      taskList: this.taskList
    });
  }
  addCategory(event){}
  removeCatgory(event){}

  render(){
    return(
        <div>
          <h1 className="react-title">Welcome to A Lean Introduction to React</h1>
          <p className="react-intro">Hello React!!</p>

          <input type="text" name="newTask" size="50" onChange={this.handleTextBoxFieldChange} value={this.state.newTaskTitle}/>
          <button>New Task</button>
          <p>{this.state.newTaskTitle}</p>
        </div>
    );
  }
};

const root = document.getElementById("root");
ReactDOM.render(<App/>,  root)
