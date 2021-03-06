import React, { PureComponent, Fragment } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext();

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);

    this.state = {
      persons: [
        { id: 1, name: 'Andy', age: 22 },
        { id: 2, name: 'Bob', age: 40 },
        { id: 3, name: 'Tester', age: 999 }
      ],
      extra: 'Won\'t be changed below with setState',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  // 16.3 - discouraged
  componentWillMount() {
    console.log('[App.js Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js Inside componentDidMount');    
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
  //     return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  // }

  // 16.3 - discouraged
  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  // 16.3 - new life cycle method
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[UPDATE App.js] inside getDerivedStateFromProps',
      nextProps,
      prevState
    );

    return prevState;
  }

  // 16.3 - new life cycle method
  // ex: save current scrolling position
  getSnapshotBeforeUpdate() {
    console.log(
      '[UPDATE App.js] inside getSnapshotBeforeUpdate'
    );
  }

  // ex: scroll user back to scrolling position
  componentDidUpdate() {
      console.log('[UPDATE App.js] inside componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = [...this.state.persons];
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
    this.setState((prevState, props) => ({
      showPersons: !doesShow,
      toggleClicked: prevState.toggleClicked + 1
    }));
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] Inside render');
    const persons = !this.state.showPersons
      ? null
      : <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;

    return (
      <Fragment>
        <button onClick={() => this.setState({ showPersons: true })}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          login={this.loginHandler}
          persons={this.state.persons} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Fragment>
    );
  }
}

export default withClass(App, classes.App);
