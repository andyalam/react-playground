import * as actionTypes from './actionTypes';

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
        payload: {
            ingredientName,
        }
    };
};
