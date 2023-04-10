// App.js
import React from 'react';
import Users from './components/Users/Users';
import './App.css';

const DUMMY_USERS = [
  
  {
    id: 'u1',
    name: 'Cat',
    image: './Images/catcat.png',
  },
  
  {
    id: 'u2',
    name: 'Dog',
    image: './Images/dogdog.png',
  },

  {
    id: 'u3',
    name: 'Catdog',
    image: './Images/catdog.jpg',
  },

];

function App() {
  return (
    <div className="App">
      <Users user_list={DUMMY_USERS} />
    </div>
  );
}

export default App;
