// App.js
import React from 'react';
import Users from './components/Users/Users';
import './App.css';

const DUMMY_USERS = [
  
  {
    id: 'u1',
    name: 'Cat Lover',
    image: './Images/catcat.pngs',
  },
  
  {
    id: 'u2',
    name: 'Dog Lover',
    image: './Images/dogdog.png',
  },

  {
    id: 'u3',
    name: 'Catdog Lover',
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
