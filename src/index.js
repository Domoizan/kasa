import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Apropos from './pages/Apropos'
import PgError from './pages/PgError'
import Card from './pages/Card';
import './styles/styles.css'

const HOME=1
const APROPOS=2

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home mode={HOME}/>} />
        <Route path="/Apropos" element={<Apropos mode={APROPOS}/>} />
        <Route path="/Card/:logementid" element={<Card />} />
        <Route path="/*" element ={<PgError />}/>
      </Routes>
    </Router>
  </React.StrictMode>
)