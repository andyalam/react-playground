import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function updateTodo(text, id) {
  dispatcher.dispatch({
    type: "UPDATE_TODO",
    text,
    id
  });
}
