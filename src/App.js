import React, { Component } from 'react';
import UserCard from './components/UserCard';
// eslint-disable-next-line
import Tachyons from 'tachyons/css/tachyons.min.css'
import './App.css';

const url1 = 'https://jsonplaceholder.typicode.com/users/1'
const url2 = 'https://jsonplaceholder.typicode.com/posts?userId=1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserCard
          url1={url1}
          url2={url2}
        />
      </div>
    );
  }
}

export default App;
