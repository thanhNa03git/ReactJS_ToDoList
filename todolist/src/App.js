import logo from "./logo.png";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      tasks: [],
    };
  }

  myTaskChange = (event) => {
    this.setState({ taskName: event.target.value });
    // console.log('myTaskChange '+ event.target.value);
  };

  addTask = () => {
    console.log('addTask',this.state.taskName);
    //add more
    this.state.tasks.push(this.state.taskName);
    this.setState({ taskName: "" });
  };

  render() {
    return (
      <div className="App mx-auto ">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>App Todo List</h4>
        </header>
        <br />
        <div className="App-content">
          <img
            src="./assets/icon_plus.png"
            alt="add task here"
            title="Add new task here!"
            style={{ cursor: "pointer" }}
            onClick={() => this.addTask()}
          />
          <input
          className="mx-3"
            type="text"
            onChange={this.myTaskChange}
            value={this.state.taskName}
          />
        </div>
        <div className="row">
          <ul className=" col-6 m-5">
            {this.state.tasks.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>

        </div>
      </div>
    );
  }
}

export default App;
