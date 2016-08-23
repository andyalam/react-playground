import React from "react";

import CircularProgress from 'material-ui/CircularProgress';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import PopupMenu from "../components/PopupMenu";

import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

import Todo from "../components/Todo";

window.TodoActions = TodoActions;

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const textFieldStyle = {
  marginLeft: 20,
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
    //this.todos = TodoStore.getAll();
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  // for input
  checkEnter(e) {
    console.log(e.target.value);
    console.log(e.key);
    if (e.key === "Enter") {
      TodoActions.createTodo(e.target.value)
    }
  }

  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />
    });
    return (
      <div style={{maxWidth: 500, margin: "0 auto"}}>
        <AppBar
          title="Material App"
          iconElementLeft={
            <p></p>
          }
        />
        <Card>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText>
            <Paper zDepth={2}>
              <TextField hintText="Item" style={textFieldStyle} underlineShow={false} onKeyPress={this.checkEnter}/>
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
