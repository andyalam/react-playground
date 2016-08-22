import React from "react";

export default class Nav extends React.Component {
  render() {
    return (
      <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand">Andy Alameddine</a>
            <button class="navbar-toggle" data-toggle ="collapse" data-target=".navHeaderCollapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse navHeaderCollapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="active" data-toggle="collapse" data-target=".navbar-collapse.in"><a href="#">Home</a></li>
              <li class="active2" data-toggle="collapse" data-target=".navbar-collapse.in"><a href="#projects">Projects</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Social Media <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="http://www.facebook.com/andy.alam" target="_blank">Facebook</a></li>
                  <li><a href="http://www.instagram.com/andy.alam" target="_blank">Instagram</a></li>
                  <li><a href="http://www.github.com/andyalam" target="_blank">Github</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
