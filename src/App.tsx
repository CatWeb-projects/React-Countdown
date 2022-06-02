import React from 'react';
import { AddTime, Counter } from './ui/organisms';

import './styles/styles.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <AddTime />
      <Counter />
    </div>
  );
};
