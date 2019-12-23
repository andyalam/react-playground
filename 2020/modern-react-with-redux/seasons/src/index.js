import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  // Called reight after content visible on screen (one time, after first render)
  componentDidMount() {
    console.log('Component was rendered');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // Sits and waits for updates
  componentDidUpdate() {
    console.log('Component was just updated - it rerendered');
  }

  // Sits and waits until this component is no longer shown
  componentWillUnmount() {
    console.log('My component was just updated - it rerendered');
  }

  /**
   * Infrequently used lifecycle:
   *
   * shouldComponentUpdate
   * getDerivedStateFromProps
   * getSnapshotBeforeUpdate
   */

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
