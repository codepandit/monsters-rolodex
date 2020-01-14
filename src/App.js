import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {

    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users} ));
  }
    
  render() {
    return (
      <div className="App">
        { this.state.monsters.map( monster => (
          <div>
            <h1 key={monster.id}> {monster.name} </h1>
            <span> { monster.address.city } </span>
          </div>
        ))}
      </div>
    );
  };

}

export default App;
