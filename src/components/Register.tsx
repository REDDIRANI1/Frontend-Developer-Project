import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [agree, setAgree] = useState(true);

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
    // Implement your registration logic here
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Agree:', agree);
    // Example: You might want to send a registration request to your backend
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
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
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
      <p>Have an account? <Link to="/login">Sign in</Link></p>
    </div>
  );
};

export default Register;
