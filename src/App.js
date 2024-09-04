import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UserTypeSelection from './components/UserTypeSelection';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-type" element={<UserTypeSelection />} />
        <Route path="/chat/:userType" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;