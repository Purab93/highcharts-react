import React from 'react';
import './App.css';
import Chart from './chart';
import Header from './header';
import TabStats from './tabstats';

function App() {
  return (
    <div className="App">
      <Header />
      <Chart />
      <TabStats />
    </div>
  );
}

export default App;
