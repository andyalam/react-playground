import React from "react";
import { ListItem } from 'material-ui/List';
import * as TodoActions from "../actions/TodoActions";

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

  disableEdit() {
    this.setState({
      edit: false
    });
  }

  checkKeyPress(e) {
    if (e.key === "Enter") {
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

    console.log('rendertodo');

    if (this.state.edit) {
      return (
          <ListItem
            primaryText={
              <input
                type="text"
                defaultValue={text}
                autoFocus={true}
                onKeyPress={this.checkKeyPress.bind(this)}
              />
            }
          />
      );
    }

    return (
      <ListItem
        primaryText={text}
        onClick={() => { this.enableEdit() }}
        onBlur={() => { this.disableEdit() }}
      />
    )
  }
}
