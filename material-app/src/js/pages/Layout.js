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


const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const textFieldStyle = {
  marginLeft: 20,
};

export default class Layout extends React.Component {
  render() {
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
              <TextField hintText="Item" style={textFieldStyle} underlineShow={false} />
              <Divider />
            </Paper>
            <List>
              {todos}
            </List>
          </CardText>
        </Card>
      </div>
    )
  }
}
