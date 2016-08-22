import React from "react";

import CircularProgress from 'material-ui/CircularProgress';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import Popover from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

import PopupMenu from "../components/PopupMenu";


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
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
        <Card>
          <CardText>
            <Paper zDepth={2}>
              <TextField hintText="Item" style={textFieldStyle} underlineShow={false} />
              <Divider />
            </Paper>
            <List>
              <ListItem primaryText="A placeholder item" />
              <ListItem primaryText="Another placeholder item" />
            </List>
          </CardText>
        </Card>
      </div>
    )
  }
}
