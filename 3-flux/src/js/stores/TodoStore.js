import { EventEmitter } from 'events';

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 99999912,
        text: "zzdsadsadsa",
        complete: true,
      },
      {
        id: 21312312,
        text: "asdsadsadsa",
        complete: true,
      },
      {
        id: 54654645,
        text: "anothaonee",
        complete: false,
      },
      {
        id: 5464564,
        text: "llkasdklasd",
        complete: false,
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id: id,
      text: text,
      complete: false
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    console.log("Todo store received an action", action);

    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
      case "RECEIVE_TODOS": {
        // override todos completely with the
        // todos from the "simulated" api calls
        // change will occur in 1 s
        this.todos = action.todos;
        this.emit("change");
      }
      case "SORT_TODOS": {
        this.todos = this.todos.sort(function(a, b) {
          var textA = a.text.toUpperCase();
          var textB = b.text.toUpperCase();
          if (textA < textB) {
            return -1;
          }
          if (textA > textB) {
            return 1;
          }
          return 0;
        });
        this.emit("change");
      }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
