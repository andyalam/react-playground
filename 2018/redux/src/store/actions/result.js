import * as actionTypes from './actionTypes';

const saveResult = (count) => {
    return {
        type: actionTypes.STORE_RESULT,
        payload: { count }
    };
};

export function storeResult(count) {
    return (dispatch, getState) => {
        setTimeout(() => {
            // You can do this, but why?
            // Just do this in the reducer. or pass in a param.
            // const oldCounter = getState().counter.counter;
            // console.log(oldCounter);
            dispatch(saveResult(count));
        }, 2000);
    };
}

export function deleteResult(id) {
    return {
        type: actionTypes.DELETE_RESULT,
        payload: { id }
    };
}
