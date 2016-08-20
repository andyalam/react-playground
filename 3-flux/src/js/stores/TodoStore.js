import { EventEmitter } from 'events';

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
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
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
