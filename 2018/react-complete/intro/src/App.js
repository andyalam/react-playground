import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andy', age: 22 },
      { name: 'Bob', age: 40 },
      { name: 'Tester', age: 999 }
    ],
    extra: 'Won\'t be changed below with setState'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Bo123b', age: 40 },
        { name: 'Test213er', age: 999 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 22 },
        { name: 'Bo123b', age: 40 },
        { name: 'Test213er', age: 999 }
      ]
    });
  }

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
        <h1>Hi I'm a react app</h1>
        <p>This is working.</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'new name')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'down here')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
