import { ADD_PERSON, DELETE_PERSON } from './actions';

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
        case DELETE_PERSON:
            return {
                ...this.state,
                persons: state.persons.filter(p => p.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default reducer;
