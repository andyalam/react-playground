import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props);
    }
    
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
        console.log('[Person.js] Inside componentDidMount');    
    }

    render() {
        console.log('[Person.js] Inside render');
        return (
            <Fragment>
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    ref={(input) => { this.inputElement = input }}
                    value={this.props.name}
                    onChange={this.props.changed}
                    type="text" />
            </Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);