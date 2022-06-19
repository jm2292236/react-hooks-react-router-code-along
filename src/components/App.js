import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Messages from './Messages';
import About from './About';

function App() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/signup" element={<Signup />} ></Route>
            <Route path="/messages" element={<Messages />} ></Route>
            <Route path="/about" element={<About />} ></Route>
        </Routes>
    </div>
  )
}

export default App;
