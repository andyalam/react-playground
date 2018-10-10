export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

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