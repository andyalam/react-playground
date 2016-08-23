import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";


// Whenever a change happens this store uses
// this.emit("change") to notify all views.
// The views then
class TodoStore extends EventEmitter {
  constructor() {
    super();
    // static data as placeholders for testing
    this.todos = [
      {
        id: 123,
        text: "Learn react",
        complete: false,
      },
      {
        id: 456,
        text: "Learn flux",
        complete: false,
      },
      {
        id: 789,
        text: "Learn all the things",
        complete: false,
      },
    ]
  }

  createTodo(text) {
    this.todos.push({
      id: Date.now(),
      text: text,
      complete: false
    });

    this.emit("change");
  }

  handleActions(action) {
    // switch statement which uses this.emit
    // to emit events
    switch(actions) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
      case "RECEIVE_TODO": {

      }
    }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;

// expose fto global scope for the sake of testing, remove later
window.todoStore = todoStore;
