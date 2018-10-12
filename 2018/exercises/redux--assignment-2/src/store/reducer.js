import { ADD_PERSON } from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                persons: [
                    ...state.persons,
                    { ...action.payload.person }
                ]
            };
        default:
            return state;
    }
};

export default reducer;
