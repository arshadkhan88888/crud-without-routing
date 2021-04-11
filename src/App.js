import React from 'react';
import Professional from './Professional';
import 'react-app-polyfill/stable'

const App = () => {
  return (
    <div className='App'>
      <div>
        <h1>Task</h1>
        <Professional/>
      </div>
    </div>
  );
};

export default App;