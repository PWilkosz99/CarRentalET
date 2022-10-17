import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
