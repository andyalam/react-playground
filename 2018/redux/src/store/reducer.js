import {
    INCREMENT,
    DECREMENT,
    SUBTRACT,
    ADD,
    STORE_RESULT,
    DELETE_RESULT
} from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    console.log(state, action);
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
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            };
        case DELETE_RESULT:
            return {
                ...state,
                results: state.results
                    .filter(result => result.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default reducer;