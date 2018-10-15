export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const onAddIngredient = (ingredientName) => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            ingredientName,
        }
    };
};
export const onRemoveIngredient = (ingredientName) => {
    return {
        type: REMOVE_INGREDIENT,
        payload: {
            ingredientName,
        }
    };
};
