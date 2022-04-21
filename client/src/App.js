import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  var i = 45;
  var edit ="feature2 is edited";
  var Feature = "Feature2";
  return (
    <div>
      <Header />
      <main>
      <Routes>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/" element={<Navigate to="/homepage" />} /> 
      </Routes>
      </main>
    </div>
  )
}

export default App