import React from "react";
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import * as TodoActions from "../actions/TodoActions";


const textFieldStyle = {
  width: '90%',
  marginLeft: 20
};

export default class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      edit: false,
      text: props.text
    }
  };

  enableEdit() {
    this.setState({
      edit: true
    });
  }

  disableEdit(e) {
    console.log(e.target.parentNode);
    this.setState({
      edit: false
    });
  }

  checkKeyPress(e) {
    if (e.key === "Enter") {
      if (!e.target.value.length) {
        return;
      }

      this.setState({
        edit: false,
        text: e.target.value
      });
      TodoActions.updateTodo(e.target.value, this.props.id);
    }
  }

  updateState() {
    this.setState({
      value: "1"
    })

  }

  render() {
    const { text } = this.state;

    if (this.state.edit) {
      return (
        <TextField
          hintText="Todo Item"
          type="text"
          defaultValue={text}
          autoFocus={true}
          onKeyPress={this.checkKeyPress.bind(this)}
          onBlur={(e) => { this.disableEdit(e) }}
          style={textFieldStyle}
        />
      );
    }

    return (
      <ListItem
        primaryText={text}
        onClick={() => { this.enableEdit() }}
      />
    )
  }
}
