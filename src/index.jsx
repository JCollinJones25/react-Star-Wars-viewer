import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Movie from './components/Movie'
import Home from './components/Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Sidebar />
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<Home />} /> 
        <Route path='/movie/:id' element={<Movie />} />
      </Route>
    </Routes>
  </Router>
);
