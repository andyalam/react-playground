import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    ageChangeHandler = (event) => {
        this.setState({ age: event.target.value });
    }

    render() {
        const { age, name } = this.state;
        return (
            <div className="AddPerson">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangeHandler}
                    value={name} />
                <input
                    type="number"
                    placeholder="Age"
                    onChange={this.ageChangeHandler}
                    value={age} />
                <button
                    onClick={() => this.props.personAdded(name, age)}>
                    Add Person
                </button>
            </div>
        );
    }
}

export default AddPerson;