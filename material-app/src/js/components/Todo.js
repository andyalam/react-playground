import React from "react";
import { ListItem } from 'material-ui/List';

export default class Todo extends React.Component {
  constructor(props) {
    super();
    console.log("props", props);
    console.log("this props", this.props);
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

  checkKeyPress(e) {
    if (e.key === "Enter") {
      this.setState({
        edit: false,
        text: e.target.value
      })
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
      />
    )
  }
}
