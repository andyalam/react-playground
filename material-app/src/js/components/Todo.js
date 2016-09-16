import React from "react";
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
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
      checked: false,
      text: props.text
    }
  };

  handleClick(e) {
    if (e.target.nodeName === "INPUT") { return; }

    this.setState({
      edit: true
    });
  }

  handleCheck() {
    this.setState({
      checked: true
    });
  }

  disableEdit(e) {
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


  render() {
    console.log('render');
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
        onClick={(e) => { this.handleClick(e) }}
        leftIcon={<Checkbox checked={this.state.checked} onCheck={ this.handleCheck.bind(this) } />}
      />
    )
  }
}
