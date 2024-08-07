import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Apropos from './pages/Apropos'
import PgError from './pages/PgError'
import Card from './pages/Card';
import './styles/styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Card/:logementid" element={<Card />} />
        <Route path="/Error" element ={<PgError />}/>
        <Route path="/*" element ={<PgError />}/>
      </Routes>
    </Router>
  </React.StrictMode>
)