import React from "react";

import Todo from "../components/Todo";
//import every single export with *
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  // Will fire when the component is rendering to the DOM
  // for the first time ONLY
  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }

  createTodo() {
    TodoActions.createTodo("wooo");
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      TodoActions.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create</button>
        <input value={this.props.inputTodo} onKeyPress={this.handleKeyPress.bind(this)}/>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
