export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export function onIncrementCount() {
    return { type: INCREMENT };
}

export function onDecrementCount() {
    return { type: DECREMENT };
}

export function onAddCount(amount) {
    return { type: ADD, payload: amount };
}

export function onSubtractCount(amount) {
    return { type: SUBTRACT, payload: amount };
}

export function onStoreResult() {
    return { type: STORE_RESULT };
}

export function onDeleteResult(id) {
    return {
        type: DELETE_RESULT,
        payload: { id }
    };
}