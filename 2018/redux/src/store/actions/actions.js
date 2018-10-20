export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export function increment() {
    return { type: INCREMENT };
}

export function decrement() {
    return { type: DECREMENT };
}

export function add(amount) {
    return { type: ADD, payload: amount };
}

export function subtract(amount) {
    return { type: SUBTRACT, payload: amount };
}


const saveResult = (count) => {
    return { type: STORE_RESULT, payload: { count } };
}
export function storeResult(count) {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(count));
        }, 5000);
    };
}

export function deleteResult(id) {
    return {
        type: DELETE_RESULT,
        payload: { id }
    };
}
