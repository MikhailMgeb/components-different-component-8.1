import React from 'react';

import './App.css';
import { Title } from './components/Title/Title';

const titles = [
  {
    text: 'Dusty Frontend School',
    subtitle: 'react',
  },
  {
    text: '123'
  },
  {},
  {
    subtitle: 'Хинкальный кот'
  }
];

const App = () => {
  return (
    <div className="App">
      {
        titles.map((title, index) => <Title key={index} text={title.text} subtitle={title.subtitle}></Title>)
      }
      <Title text="Dusty Frontend School" subtitle="react"></Title>
      <Title text="123"></Title>
      <Title></Title>
      <Title subtitle="Хинкальный кот"></Title>
    </div>
  );
}

export { App };
