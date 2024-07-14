import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Import CSS file for styling
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <div className="forgot-password">
            <a href="/forgotpassword">Forgot Password?</a>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>Or </p>
        <div>
          {/* Use CSS to hide the adjacent text */}
          <style>
            {`
              .login-with-google-text {
                display: none;
              }
            `}
          </style>
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
            <GoogleLoginButton className="login-with-google-text" />
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
