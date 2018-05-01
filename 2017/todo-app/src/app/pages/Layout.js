import React from 'react';
import Main from "./Main";

export default class Layout extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="col-xs-12">
          <Main />
        </div>
      </div>
    );
  }
}
