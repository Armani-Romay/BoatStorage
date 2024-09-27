import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage/HomePage"; 
import SignUp from './Components/SignUp/SignUp'; // sign-up page component
import Login from './Components/Login/Login'; // sign-up page component


function App() {
  return (
    <div>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </div>

  );
}

export default App;