import React from "react";
import { ListItem } from 'material-ui/List';

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { complete, edit, text } = this.props;
    return (
      <ListItem primaryText={text}/>
    )
  }
}
