import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import jwt from 'jsonwebtoken';



const token = localStorage.getItem("token");

try {
  const decodedToken = jwt.decode(token);

  if (decodedToken) {
    // Access the claims from the decoded token
    const { sub, exp, iat, ...claims } = decodedToken;

    console.log('Claims:', claims);
  } else {
    console.log('Invalid token');
  }
} catch (error) {
  console.log('Error decoding token:', error);
}

function App() {
  return (
   <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
   </Routes>
  );
}

export default App;
