import './style.scss'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './Navigation/Nav';
import About from './pages/About'

import EventImgs from './pages/Events/EventImgs';
import Weddings from './pages/Events/Weddings';
import Birthday from './pages/Events/Birthday';
import Conserts from './pages/Events/Conserts';

import TravelImgs from './pages/Travel/TravelImgs';
import Dubai from './pages/Travel/Dubai';
import Amsterdam from './pages/Travel/Amsterdam';
import India from './pages/Travel/India';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/events' element={<EventImgs/>} />
            <Route path='/weddings' element={<Weddings/>} />
            <Route path='/birthday' element={<Birthday/>} />
            <Route path='/conserts' element={<Conserts/>} />
            
            <Route path='/travels' element={<TravelImgs/>} />
            <Route path='/dubai' element={<Dubai/>} />
            <Route path='/amsterdam' element={<Amsterdam/>} />
            <Route path='/india' element={<India/>} />

            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
