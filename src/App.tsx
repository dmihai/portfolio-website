import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import content from './content';

function App() {
  console.log(content.data);
  return (
    <div className="App">
      <Carousel />
    </div>
  );
}

export default App;
