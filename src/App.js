import React from 'react';
import Home from './features/Home/Home';
import Header from './features/Header/Header';

// Import App styles.
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
