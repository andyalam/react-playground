import React from "react";
import { ListItem } from 'material-ui/List';

export default class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      edit: false
    }
  };

  enableEdit() {
    this.setState({
      edit: true
    });
  }

  checkKeyPress(e) {
    if (e.key === "Enter") {
      console.log("enter");
    }
    console.log(e.key);
  }

  render() {
    const { complete, edit, text } = this.props;
    const icon = complete ? "\u2714" : "\u2716";

    if (this.state.edit) {
      return (
          <ListItem
            primaryText={<input type="text" onKeyPress={() => {this.checkKeyPress.bind(this)}}/>}
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
