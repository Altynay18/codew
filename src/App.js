import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';
import LanguageProvider from './context/LanguageProvider';

function App() {
  return (
      <LanguageProvider>      
        <Router>
         <Home/>
        </Router>
      </LanguageProvider>
  );
}

export default App;
