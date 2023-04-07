// App.js
import React from 'react';
import Users from './components/Users/Users';
import './App.css';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Cat',
    image: 'https://some-path-to-image'
  },
  
  {
    id: 'u2',
    name: 'Dog',
    image: 'https://some-path-to-image'
  },

  {
    id: 'u3',
    name: 'Buzz Lightyear',
    image: 'https://some-path-to-image'
  }
];

function App() {
  return (
    <div className="App">
      <Users user_list={DUMMY_USERS} />
    </div>
  );
}

export default App;
