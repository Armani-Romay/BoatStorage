import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage/HomePage"; 
import SignUp from './Components/SignUp/SignUp'; // sign-up page component
import Login from './Components/Login/Login'; // login page component
import Profile from './Components/Profile/Profile'; // profile page component


function App() {
  return (
    <div>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </div>

  );
}

export default App;