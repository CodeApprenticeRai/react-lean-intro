import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title
    }
  }

  render(){
    return(
      <p>{this.state.title}</p>
    );
  }

};

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        newTaskTitle: "",
        taskList: []
      }
    this.handleTextBoxFieldChange = this.handleTextBoxFieldChange.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  handleTextBoxFieldChange(event){
    this.setState({
      newTaskTitle: event.target.value,
      taskList: this.state.taskList
    });
  };
  addNewTask(event){
    var newTaskList = this.state.taskList.concat([this.state.newTaskTitle]);
    this.setState({
      newTaskTitle: "",
      taskList: newTaskList
    })
  };
  removeTask(event){};

  render(){
    const tasks = this.state.taskList.map( ( task ) => <li>{task}</li> );
    return(
        <div>
          <h1 className="react-title">Welcome to A Lean Introduction to React</h1>
          <h3 className="react-intro">Enter a task:</h3>

          <input type="text" name="newTask" size="50" onChange={this.handleTextBoxFieldChange} value={this.state.newTaskTitle}/>
          <button onClick={this.addNewTask}>New Task</button>

          <div className="task-list">
          {tasks}
          </div>

        </div>
    );
  }
};

const root = document.getElementById("root");
ReactDOM.render(<App/>,  root)
