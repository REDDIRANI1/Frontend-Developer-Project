import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Onboarding.css';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleDrag = () => {
    // Navigate to "Onboarding2" on drag
    navigate("/Onboarding2");
  };

  const handleSkipClick = () => {
    // Navigate to "Login - Empty" on click
    navigate("/login");
  };

  const handleNextClick = () => {
    // Navigate to the next screen on click
    navigate("/Onboarding2"); // Adjust the path as needed
  };

  

  return (
    <div className="background-container">
    <div className="starting-screen"  draggable="true" onDrag={handleDrag}>
      {/* Content for your starting screen */}
      <h1>We serve incomparable delicacies</h1>
      <p>All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
      <div className="rectangle-container1">
        <div className="rectangle"></div>
        <div className="rectangle second"></div>
        <div className="rectangle third"></div>
      </div>
      <div className="skip-next-container">
        <div className="skip-text" onClick={handleSkipClick}>Skip</div>
        <div className="next-text-container" onClick={handleNextClick}>
          <div className="next-text">Next</div>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Onboarding;
