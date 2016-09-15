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
    this.todos.unshift({
      id: Date.now(),
      text: text,
      complete: false
    });

    this.emit("change");
  }

  updateTodo(text, id) {
    this.todos.find((todo) => {
      return todo.id === id;
    }).text = text;

    this.emit("change");
  }

  sortTodos() {
    this.todos.sort(function(a, b) {
        var aText = a.text.toLowerCase();
        var bText = b.text.toLowerCase();
        console.log(aText, bText);
        if (aText > bText) return 1;
        if (aText < bText) return -1;
        return 0;
    });
    console.log('sort');
    console.log(this.todos);
    this.emit("change");
  }

  emptyTodos() {
    this.todos.length = 0;
    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    // switch statement which uses this.emit
    // to emit events
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "UPDATE_TODO": {
        this.updateTodo(action.text, action.id);
        break;
      }
      case "SORT_TODOS": {
        this.sortTodos();
        break;
      }
      case "EMPTY_TODOS": {
        this.emptyTodos();
        break;
      }
    }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;

// expose fto global scope for the sake of testing, remove later
window.todoStore = todoStore;
