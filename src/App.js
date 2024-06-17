import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [mode, setMode] = useState('dark');
  const pageSize = 2;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  let style = {
    color: 'white',
    backgroundColor: 'black'
  };

  if (mode === 'light') {
    style = {
      color: 'black',
      backgroundColor: 'white'
    };
  }

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div style={style}>
        <Routes>
          <Route exact path="/" element={<News key="generalhome" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'general'} mode={mode} />} />
          <Route exact path="/NewsWeb" element={<News key="generalhome" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'general'} mode={mode} />} />
          <Route exact path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'business'} mode={mode} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'entertainment'} mode={mode} />} />
          <Route exact path="/general" element={<News key="generalgeneral" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'general'} mode={mode} />} />
          <Route exact path="/health" element={<News key="health" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'health'} mode={mode} />} />
          <Route exact path="/science" element={<News key="science" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'science'} mode={mode} />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'sports'} mode={mode} />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country={'in'} category={'technology'} mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
