// components/UserItem/UserItem.js
import React from 'react';
import Card from '../Card/Card';
import './UserItem.css';

const UserItem = (props) => {
  return (
    <Card className="user-item">
      <img src={props.image} alt={props.name} className="user-item-img" />
      <h2 className="user-item-name">{props.name}</h2>
    </Card>
  );
};

export default UserItem;
