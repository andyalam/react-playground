export const ADD_PERSON = 'ADD_PERSON';

export function onAddPerson(person = {
    id: Math.random(), // not really unique but good enough here!
    name: 'Max',
    age: Math.floor( Math.random() * 40 )
}) {

    return { type: ADD_PERSON, payload: { person } };
}
