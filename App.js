import React, {useState} from 'react';
import {TextInputComponent} from './components/TextInput';

const App = () => {
  const [text , setText] = useState('');
  return (
    <TextInputComponent />
  )
};

export default App;
