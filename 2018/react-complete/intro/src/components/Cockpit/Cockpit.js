import React, { Component } from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

class Cockpit extends Component {
    render() {
        const btnClass = this.props.showPersons
            ? [classes.Button, classes.Red].join(' ')
            : classes.Button;
        const assignedClasses = [];

        if (this.props.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.props.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <Aux>
                <h1>{this.props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}>
                    This is working.
                </p>
                <button
                    className={btnClass}
                    onClick={this.props.clicked}>
                    Toggle Persons
                </button>
            </Aux>
        );
    }
}

export default Cockpit;