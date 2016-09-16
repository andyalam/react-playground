import React from "react";

import CircularProgress from 'material-ui/CircularProgress';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

import Todo from "../components/Todo";


const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const textFieldStyle = {
  marginLeft: 20,
};

const centerText = {
  textAlign: 'center'
};

export default class Layout extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  // for input
  checkEnter(e) {
    if (e.key === "Enter") {
      if (!e.target.value.replace(/ /g,'').length) { return; }

      TodoActions.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  sortList() {
    TodoActions.sortTodos();
  }

  emptyList() {
    TodoActions.emptyTodos();
  }

  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} edit={false} {...todo} />
    });

    return (
      <div style={{maxWidth: 500, margin: "0 auto"}}>
        <AppBar
          title="Material Todo List"
          iconElementLeft={
            <p></p>
          }
          style={centerText}
        />

        <Card>
          <CardActions style={centerText}>
            <FlatButton label="Sort" onClick={this.sortList}/>
            <FlatButton label="Empty" onClick={this.emptyList}/>
          </CardActions>
          <CardText>
            <Paper zDepth={1}>
              <TextField
                hintText="Item"
                style={textFieldStyle}
                underlineShow={false}
                onKeyPress={this.checkEnter}
              />
              <Divider />
            </Paper>
            <List>
              {TodoComponents}
            </List>
          </CardText>
        </Card>
      </div>
    )
  }
}
