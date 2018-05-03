import React from 'react';

const style = {
    width: '100%',
    lineHeight: '3em'
};

const userInput = (props) => {
    return (
        <input
            style={style}
            value={props.username}
            onChange={props.changed}
            type="text" />
    );
};

export default userInput;