import React from 'react';

const validation = (props) => {
    return (
        <span>
            {props.length >= 5 ? 'Text long enough' : 'Text too short'}
        </span>
    );
};

export default validation;