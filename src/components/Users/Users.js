// components/Users/Users.js
import React from 'react';
import UserItem from '../UserItem/UserItem';
import './Users.css';

const Users = (props) => {
  return (
    <div className="users">
      {props.user_list.map((user) => (
        <UserItem key={user.id} name={user.name} image={user.image} id={user.id} />
      ))}
    </div>
  );
};

export default Users;
