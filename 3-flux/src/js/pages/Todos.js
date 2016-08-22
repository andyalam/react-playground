import React from "react";

import Todo from "../components/Todo";
//import every single export with *
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }


  // Will fire when the component is rendering to the DOM
  // for the first time ONLY

  // listen to events on mount
  componentWillMount() {
    TodoStore.on("change", this.getTodos);
    console.log("count:", TodoStore.listenerCount("change"));
    
  }

  // unlisten to events on unmount
  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  createTodo() {
    TodoActions.createTodo("wooo");
  }

  sortTodos() {
    TodoActions.sortTodos();
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      TodoActions.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.sortTodos.bind(this)}>Sort</button>
        <button onClick={this.reloadTodos.bind(this)}>Reload</button>
        <button onClick={this.createTodo.bind(this)}>Create</button>
        <input value={this.props.inputTodo} onKeyPress={this.handleKeyPress.bind(this)}/>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
