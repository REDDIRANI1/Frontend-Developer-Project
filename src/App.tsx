import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';
import PostLogin from './components/PostLogin'; // Import PostLogin component
import Tracking from './components/Tracking';
import Onboarding from './components/Onboarding';
import Onboarding2 from './components/Onboarding2';
import Onboarding3 from './components/Onboarding3';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/Onboarding2" element={<Onboarding2 />} />
      <Route path="/Onboarding3" element={<Onboarding3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Update path for ForgotPassword */}
        <Route path="/register" element={<Register />} />
        <Route path="/postlogin" element={<PostLogin />} /> {/* Add route for PostLogin */}
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </Router>
  );
};

export default App;
