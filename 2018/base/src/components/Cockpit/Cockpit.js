import React, { Component, Fragment } from 'react';

import classes from './Cockpit.css';

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
            <Fragment>
                <h1>{this.props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}>
                    This is working.
                </p>
                <button
                    className={btnClass}
                    onClick={this.props.clicked}>
                    Toggle Persons
                </button>
                <button onClick={this.props.login}>Log in</button>
            </Fragment>
        );
    }
}

export default Cockpit;