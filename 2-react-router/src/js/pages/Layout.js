// > webpack-dev-server --content-base src

import React from "react";
import { Link } from "react-router";


export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/");
    //replaceState does the same thing but no back button functionality
  }

  render() {
    return (
      <div>
        <h1>Killer News</h1>
        {this.props.children}
        <Link to="archives"><button class="btn btn-danger">archives</button></Link>
        <Link to="settings"><button class="btn btn-success">settings</button></Link>
        <button onClick={this.navigate.bind(this)} class="btn btn-primary">featured</button>
      </div>
    );
  }
}
