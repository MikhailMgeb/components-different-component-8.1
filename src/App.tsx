import React from 'react';
import './App.css';
import { SimpleButton } from './components/Simple-button/Simple-button';
import { Avatar } from './components/Avatar/Avatar';
import { users } from './components/Avatar/data-users';
import { TaskPage } from './components/task-page/Task-page';
import { tasks } from './components/page-content/data-task-page';



const App = () => {
  return (
    <div className="App">
      <SimpleButton text='click' />
      {
        users.map((user, index) =>
          <Avatar user={user.user} srcPhoto={user.srcPhoto} key={index}/>
        )
      }
      <TaskPage title={'8.1 Знакомство с React'} tasks={tasks} />
    </div>
  );
}

export { App };
