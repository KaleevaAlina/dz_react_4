import React from 'react';
import ReactDOM from 'react-dom';
import {users} from '../users';
import UserList from '../UserList';
import UserArr from '../UserArr';
import User from '../User';
import {userClassName} from '../userclass';
import {userStyle} from '../userclass';

ReactDOM.render(
    <div  className = {userClassName} style= {userStyle}>
      <User/>
      <UserArr/>
    </div>,
    document.getElementById("root")
  )