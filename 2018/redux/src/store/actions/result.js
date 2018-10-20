import * as actionTypes from './actionTypes';

const saveResult = (count) => {
    return { type: actionTypes.STORE_RESULT, payload: { count } };
}
export function storeResult(count) {
    return dispatch => {
        setTimeout(() => {
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
