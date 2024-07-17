import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';

import './Register.css';

interface RegisterProps {
  variant?: 'active' | 'inactive'; // Define the variant prop
}

const Register: React.FC <RegisterProps> = ({ variant = 'active' }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [agree, setAgree] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert('You must agree with the terms of service and privacy policy.');
      return;
    }
    const isLoggedIn = true; // Replace with actual login logic

    if (isLoggedIn) {
      navigate('/login'); // Redirect to post-login page
    } else {
      // Handle login failure, show error message, etc.
      alert('Login failed. Please check your credentials.');
    }
    // Implement your registration logic here
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Agree:', agree);
    // Example: You might want to send a registration request to your backend
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleMouseDown = () => {
    setShowOverlay(true);
  };

  const handleMouseUp = () => {
    setShowOverlay(false);
  };


  return (
    <div className="register-container">
      <h2>Create your new account</h2>
      <p>Create an account to start looking for the food you like</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          User Name
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </label>
        <label className="password-label">
          Password
          <div className="password-input-container">
              <input
                type={passwordVisible ? 'text' : 'password'} // Toggle input type
                value={password}
                onChange={handlePasswordChange}
                required
                className={showOverlay ? 'overlay-visible' : 'overlay-input'}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              />
              <Icon
                icon={passwordVisible ? eye : eyeOff}
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
        </label>
        <div className={`terms-agree ${variant === 'active' ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={agree}
              onChange={handleAgreeChange}
              required
              style={{ color: '#FE8C00' }}
            />
            <label htmlFor="agree-checkbox">
              <span >I Agree with </span>
              <Link to="/terms" style={{ color: '#FE8C00' }}>Terms of Service</Link>
              <span > and </span>
              <Link to="/privacy" style={{ color: '#FE8C00' }}>Privacy Policy</Link>
            </label>
          </div>
        <button type="submit">Register</button>
      </form>
      <p className="center-text">Or </p>
      <div>
        <LoginSocialGoogle
          client_id="1063942852570-eq457j2tkpjvr4ui4dk821iv6hk8n59n.apps.googleusercontent.com"
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }: { provider: any, data: any }) => {
            console.log(provider, data);
          }}
          onReject={(err: any) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
      <p>Have an account? <Link to="/login">Sign In</Link></p>
    </div>
  );
};

export default Register;
