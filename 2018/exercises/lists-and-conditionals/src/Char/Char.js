import React from 'react';

const styles = {
    display: 'inline-block',
    padding: '1.3em',
    textAlign: 'center',
    margin: '1.3em',
    border: '1px solid black'
};

const char = (props) => {
    return (
        <div
            className="Char"
            style={styles}
            onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;