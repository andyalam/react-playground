import React, { Component } from 'react';

import './App.css';

import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    text: ''
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    })
  }

  onClickCharacter(index) {
    const { text } = this.state;
    const newText = text.slice(0, index) + text.slice(index + 1);

    this.setState({
      text: newText
    });
  }

  render() {
    const characters = this.state.text
      .split('')
      .map((character, index) => (
        <Char
          key={index}
          character={character}
          clicked={this.onClickCharacter.bind(this, index)}/>
      ));

    return (
      <div className="App">
        <input
          value={this.state.text} type="text"
          onChange={this.onChangeText.bind(this)} />
        <p>Text Length: {this.state.text.length}</p>
        <Validation length={this.state.text.length} />
        {characters}
      </div>
    );
  }
}

export default App;
