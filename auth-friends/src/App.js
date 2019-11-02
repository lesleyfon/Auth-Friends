import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Private from './components/Private';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend'

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Route 
        exact
        path='/login'
        component = { Login}
      />

      <Private 
        path = '/friends'
        exact
        component={Friends}/>
      <Private 
        path = '/addfriend'
        exact
        component={AddFriend}/>
    </div>
  );
}

export default App;
