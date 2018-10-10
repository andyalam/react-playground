import { INCREMENT, DECREMENT, SUBTRACT, ADD } from './actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload
            };
        case ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            };
        default:
            return state;
    }
};

export default reducer;