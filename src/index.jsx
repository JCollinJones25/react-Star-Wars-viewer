import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Movie from './components/Movie'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Sidebar />
    <Routes>
      <Route path='/' element={<Main />} >
        <Route path='/movie/:id' element={<Movie />} />
      </Route>
    </Routes>
  </Router>
);
