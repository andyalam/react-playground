import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>
                I'm a {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.changed} type="text" />
        </div>
    );
};

export default person;