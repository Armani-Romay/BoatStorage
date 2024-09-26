import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage/HomePage"; 
// import SignUp from './Components/SignUp'; // sign-up page component



function App() {
  return (
    <div>
        <Routes>
          <Route index element={<HomePage/>} />
          {/* <Route path="/signup" element={<SignUp />} /> Use 'element' for route rendering */}
        </Routes>
    </div>

  );
}

export default App;