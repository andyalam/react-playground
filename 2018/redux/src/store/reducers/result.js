import {
    STORE_RESULT,
    DELETE_RESULT
} from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const storeResult = (state, action) => {
    return updateObject(state, {
        results: state.results.concat({
            id: new Date(),
            value: action.payload.count
        })
    })
};

const deleteResult = (state, action) => {
    const updatedArray = state.results
        .filter(result => result.id !== action.payload.id);
    return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return storeResult(state, action);
        case DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;