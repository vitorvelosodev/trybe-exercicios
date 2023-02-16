import React, { Component } from 'react';
import Home from './components/Home';
import Users from './components/Users'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id='menu' style={{ display: 'flex', gap: '5px' }}>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/users'}>Users</Link>
        </div>
        <Route exact path={'/'} component={ Home } />
        <Route path={'/about'} component={ About } />
        <Route path={'/users'} component={ Users } />
      </BrowserRouter>
    );
  }
}

export default App;
