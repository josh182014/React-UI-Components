import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CaclulatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='container'>
      <CaclulatorDisplay text='0' />
      <ActionButton text='clear' />
      <NumberButton text='/' className='red' />
      <NumberButton text='7' />
      <NumberButton text='8' />
      <NumberButton text='9' />
      <NumberButton text='x' className='red' />
      <NumberButton text='4' />
      <NumberButton text='5' />
      <NumberButton text='6' />
      <NumberButton text='-' className='red' />
      <NumberButton text='1' />
      <NumberButton text='2' />
      <NumberButton text='3' />
      <NumberButton text='+' className='red' />
      <ActionButton text='0' />
      <NumberButton text='=' className='red' />
    </div>
  );
};

export default App;
