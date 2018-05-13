import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Andy', age: 22 },
      { id: 2, name: 'Bob', age: 40 },
      { id: 3, name: 'Tester', age: 999 }
    ],
    extra: 'Won\'t be changed below with setState',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const persons = !this.state.showPersons
      ? null
      : <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;

    return (
      <div className={classes.App}>
        <Cockpit
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}

export default App;
