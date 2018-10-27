import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const onAddIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: {
            ingredientName,
        }
    };
};

export const onRemoveIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: { ingredientName }
    };
};

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        payload: { ingredients }
    };
};

const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios
            .get('/ingrediasdents.json')
            .then(response => {
                if (response.data === null) {
                    throw new Error('Empty response');
                }
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    };
};
