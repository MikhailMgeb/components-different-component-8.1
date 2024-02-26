import React from 'react';
import './App.css';
import { SimpleButton } from './components/Simple-button/Simple-button';
import { Avatar } from './components/Avatar/Avatar';
import { users } from './components/Avatar/data-users';



const App = () => {
  return (
    <div className="App">
      <SimpleButton text='hello' />
      {
        users.map((user, index) =>
          <Avatar user={user.user} srcPhoto={user.srcPhoto} key={index}/>
        )
      }
    </div>
  );
}

export { App };
