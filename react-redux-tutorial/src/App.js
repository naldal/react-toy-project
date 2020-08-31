import React from 'react';
import Todos from './components/Todos';
import CounterContainer from './container/CounterContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
