import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function sortTodos() {
  dispatcher.dispatch({
    type: "SORT_TODOS"
  });
}


// Simulating an api call with static data
// setTimeout is used to simulate some wait time
export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({
    type: "FETCH_TODOS"
  });
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVE_TODOS",
      todos: [
        {
          id: 12312312,
          text: "asdasdsa",
          complete: false
        },
        {
          id: 21321,
          text:"123",
          complete: true
        }
      ]
    })
  }, 1000);
}
