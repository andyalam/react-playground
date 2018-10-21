import {
    INCREMENT,
    DECREMENT,
    SUBTRACT,
    ADD,
} from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return updateObject(state, { counter: state.counter + 1 });
        case DECREMENT:
            return updateObject(state, { counter: state.counter - 1 });
        case SUBTRACT:
            return updateObject(state, { counter: state.counter - action.payload });
        case ADD:
            return updateObject(state, { counter: state.counter + action.payload });
        default:
            return state;
    }
};

export default reducer;