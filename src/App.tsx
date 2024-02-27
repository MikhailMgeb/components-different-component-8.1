import React from 'react';

import { SimpleButton } from './components/SimpleButton/SimpleButton';
import { Avatar } from './components/Avatar/Avatar';
import { users } from './data-users';
import { TaskPage } from './components/TaskPage/TaskPage';
import { tasks } from './components/PageContent/data-task-page';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <SimpleButton text='click' />
      {
        users.map((user, index) =>
          <Avatar user={user.user} srcPhoto={user.srcPhoto} key={index} />
        )
      }
      <TaskPage title={'8.1 Знакомство с React'} tasks={tasks} />
    </div>
  );
}

export { App };
