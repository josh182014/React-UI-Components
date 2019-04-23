import React from 'react';
import './App.css';
import Numbers from './components/ButtonComponents/Numbers.js';

const App = () => {
  return (
    <div className='container'>
      <div class='display'><p>0</p></div>
      <div className='all-button-container'>
        <Numbers />
      </div>
    </div>
  );
};

export default App;
