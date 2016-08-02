import React from "react";


export default class Archives extends React.Component {
  render() {
    const { params } = this.props;
    const { article } = params;

    const { query } = this.props.location;
    //specific params in query set
    const { date, filter } = query;

    return (
      <div>
        <h1>Archives ({article})</h1>
        <h4>date: {date}, filter: {filter}</h4>
        <h4></h4>

      </div>
    );
  }
}
