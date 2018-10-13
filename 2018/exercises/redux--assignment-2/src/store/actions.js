export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export function onAddPerson() {
    const person = {
        id: Math.random(), // not really unique but good enough here!
        name: 'Max',
        age: Math.floor( Math.random() * 40 )
    };
    return { type: ADD_PERSON, payload: { person } };
}

export function onDeletePerson(id) {
    return { type: DELETE_PERSON, payload: { id } }
}