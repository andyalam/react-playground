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

export function checkTodo(id, checked) {
  dispatcher.dispatch({
    type: "CHECK_TODO",
    id,
    checked
  })
}

export function sortTodos() {
  dispatcher.dispatch({
    type: "SORT_TODOS"
  });
}


export function emptyTodos() {
  dispatcher.dispatch({
    type: "EMPTY_TODOS"
  });
}
