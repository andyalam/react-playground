import {
    STORE_RESULT,
    DELETE_RESULT
} from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.payload.count
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