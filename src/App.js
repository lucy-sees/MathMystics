import './App.css';
import React from 'react';
import Calc from './components/calculator/Calculator';
import Quotes from './components/quotes/Quotes';

function App() {
  return (
    <div className="App">
      <Calc />
      <Quotes />
    </div>
  );
}

export default App;
