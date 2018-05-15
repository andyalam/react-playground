import React, { Component } from 'react';

import classes from './Cockpit.css';

class Cockpit extends Component {
    render() {
        const btnClass = this.props.showPersons ? classes.Red : '';
        const assignedClasses = [];

        if (this.props.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.props.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.Cockpit}>
                <h1>{this.props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}>
                    This is working.
                </p>
                <button
                    className={btnClass}
                    onClick={this.props.clicked}>
                    Toggle Persons
                </button>
            </div>
        );
    }
}

export default Cockpit;