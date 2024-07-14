import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import './PostLogin.css'; // Import the CSS file for styling

const PostLogin: React.FC = () => {
  const navigate = useNavigate();

  const goToTrackingScreen = () => {
    navigate('/tracking');
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  return (
    <div className="background-container1">
      <div className="post-login-container">
        <div className="polygon-4">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,0 90,25 90,75 50,100 10,75 10,25" style={{ fill: '#FFFFFF', stroke: '#FE8C00', strokeWidth: '8' }} />
          </svg>
          <FontAwesomeIcon icon={faCheck} className="tick-mark" size="3x" />
        </div>
        <FontAwesomeIcon icon={faStar} className="star" />
        <div className="vector-36"></div>
        <div className="ellipse-around-polygon"></div>
        <h2>Login Successful</h2>
        <button className="tracking-button" onClick={goToTrackingScreen}>Go to Tracking Screen</button>
        <div className="logout-text" onClick={handleLogout}>
          Logout
        </div>
        {/* Additional elements */}
        <div className="ellipse-191"></div>
        <div className="vector-34"></div>
        <div className="ellipse-709"></div>
        <FontAwesomeIcon icon={faStar} className="star1" />
        <div className="vector-33"></div>
        <div className="rectangle-5639"></div>
        <div className="ellipse-711"></div>
        <div className="vector-35"></div>
      </div>
    </div>
  );
};

export default PostLogin;
