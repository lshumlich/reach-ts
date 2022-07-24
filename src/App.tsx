import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const pushMe = () => {
    console.log(`Don't actually listen to me...`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={pushMe} className='lfs-button'>Push me Main...v2</button>
      </header>
    </div>
  );
}

export default App;
