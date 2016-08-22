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

import PopupMenu from "../components/PopupMenu";


const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

export default class Layout extends React.Component {
  render() {
    return (
      <AppBar
        title="Material App"
        iconElementLeft={
          <PopupMenu />
        }
      />
    )
  }
}
