import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer" class="navbar-inverse navbar-static-bottom">
        <div class="container">
            <p class="navbar-text pull-left">Site built by Andy Alameddine</p>
            <button type="button" class="navbar-btn btn btn-primary pull-right" data-toggle="modal" data-target="#contactModal">Contact</button>
        </div>
      </div>
    )
  }
}
