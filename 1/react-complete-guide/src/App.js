import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
   persons: [
     {name: 'Max', age: 28},
     {name: 'Fernando', age: 38},
     {name: 'Joana', age: 38}
   ],
   otherState: 'some other value',
   showPersons: false
 }

 switchNameHandler= (newName) => {
   this.setState({
     persons: [
       {name: newName, age: 28},
       {name: 'Fernando', age: 37},
       {name: 'Joana', age: 37}
     ]
  })
 };

 nameChangedHandler = (event) => {
   this.setState({persons: [
     {name: 'Max', age: 28},
     {name: event.target.value, age: 37},
     {name: 'Joana', age: 37}
   ]})
 };

 togglePersonHandler = (event) => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
 };

 render() {
   const style = {
     backgroundColor: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer'
   };
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {
          this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >
              My Robbies: Racing
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this,'Max')}
              changed={this.nameChangedHandler}
            >
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>
            </Person>
        </div> : null
       }
      </div>
    );
  }
}

export default App;
