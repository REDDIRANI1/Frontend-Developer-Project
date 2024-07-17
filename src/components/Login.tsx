import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import './Login.css'; // Import CSS file for styling

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform login logic (e.g., authentication)
    // For demonstration purposes, assume login is successful
    const isLoggedIn = true; // Replace with actual login logic

    if (isLoggedIn) {
      navigate('/postlogin'); // Redirect to post-login page
    } else {
      // Handle login failure, show error message, etc.
      alert('Login failed. Please check your credentials.');
    }
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
    <div className="login-page">
      <div className="login-container">
        <h2>Login to your account</h2>
        <p>Please sign in to your account</p>
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
          <br />
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
          <div className="forgot-password">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>Or </p>
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
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
