import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
   persons: [
     {name: 'Max', age: 28},
     {name: 'Fernando', age: 38},
     {name: 'Joana', age: 38}
   ]
 }

 switchNameHandler= () => {
   this.setState({persons: [
     {name: 'Maximilian', age: 28},
     {name: 'Fernando', age: 37},
     {name: 'Joana', age: 37}
   ]})
 };

 render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Robbies: Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
