import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Onboarding.css';

const Onboarding3 = () => {
  const navigate = useNavigate();

  const handleDrag = () => {
    console.log("Dragged to Onboarding2");
    navigate("/Onboarding2");
  };

  const handleArrowClick = () => {
    console.log("Arrow clicked");
    navigate("/login");
  };

  return (
    <div
      className="background-container1"
      style={{
        width: '110%',
        height: '100vh',
        backgroundImage: 'url("/image 9.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="starting-screen1"
        draggable="true"
        onDrag={handleDrag}
        style={{
          top: '70px',
          width: '305px',
          height: '490px',
          padding: '50px',
          backgroundColor: '#FE8C00',
          color: '#FFFFFF',
          borderRadius: '48px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          opacity: 1,
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <h1>We serve incomparable delicacies</h1>
        <p>All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: '24px', height: '6px', borderRadius: '100px', backgroundColor: '#C2C2C2', opacity: 1 }}></div>
          <div style={{ width: '24px', height: '6px', borderRadius: '100px', backgroundColor: '#C2C2C2', opacity: 1 }}></div>
          <div style={{ width: '24px', height: '6px', borderRadius: '100px', backgroundColor: '#FFFFFF', opacity: 1 }}></div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '70%',
            left: '40%',
            // transform: 'translate(-50%, -50%)',
            width: '94px',
            height: '94px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // position: 'absolute',
            //   width: '100%',
            //   height: '100%',
              transform: 'rotate(45deg)',
              borderRadius: '94px',
              borderTop: '3px solid rgba(255, 255, 255, 1)',
              borderLeft: '3px solid rgba(255, 255, 255, 0.5)',
              borderBottom: '3px solid rgba(255, 255, 255, 1)',
              borderRight: '3px solid rgba(255, 255, 255, 1)',
          }}
        >
          <div
            style={{
              right: '10%',
              left:'50px',
              width: '60px',
              height: '60px',
              borderRadius: '90%',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={handleArrowClick} // Move the onClick here
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="arrow"
              style={{
                fontSize: '36px',
                color: '#FE8C00',
                left:'50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transform: 'rotate(315deg)',
              }}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding3;
