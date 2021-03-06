import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    error: false,
    totalPrice: 4,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]:
                        state.ingredients[action.payload.ingredientName] + 1
                },
                totalPrice: state.totalPrice +
                    INGREDIENT_PRICES[action.payload.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]:
                        state.ingredients[action.payload.ingredientName] - 1
                },
                totalPrice: state.totalPrice -
                    INGREDIENT_PRICES[action.payload.ingredientName]
            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                error: false,
                ingredients: action.payload.ingredients
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;
