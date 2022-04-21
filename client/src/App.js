import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  var i = "45Feature2"; // line 9 
  var edit ="feature2 is edited"; // lin 10
  var Feature = "Feature2"; // line 11
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