import * as actionTypes from './actionTypes';

export function increment() {
    return { type: actionTypes.INCREMENT };
}

export function decrement() {
    return { type: actionTypes.DECREMENT };
}

export function add(amount) {
    return { type: actionTypes.ADD, payload: amount };
}

export function subtract(amount) {
    return { type: actionTypes.SUBTRACT, payload: amount };
}
