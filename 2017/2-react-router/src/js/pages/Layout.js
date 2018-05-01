// > webpack-dev-server --content-base src

import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";


export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>

        <Nav location={location}/>

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

/*
<h1>Killer News</h1>
{this.props.children}
<Link to="archives" activeClassName="test"><button class="btn btn-danger">archives</button></Link>
<Link to="settings"><button class="btn btn-success">settings</button></Link>
<button onClick={this.navigate.bind(this)} class="btn btn-primary">featured</button>
*/
