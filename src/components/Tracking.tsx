import React, { useState, useEffect, useRef } from 'react';
import './Tracking.css';

const Tracking: React.FC = () => {
  const [speed, setSpeed] = useState(1);
  const [clockTime, setClockTime] = useState(new Date());
  const [joke, setJoke] = useState('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchRandomJoke(); // Initial fetch on component mount

    const jokeInterval = setInterval(() => {
      fetchRandomJoke(); // Fetch joke every 5 seconds
    }, 5000);

    return () => {
      clearInterval(jokeInterval); // Clean up interval on component unmount
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    // Update clock time based on speed
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setClockTime(prevTime => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [speed]);

  const fetchRandomJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJoke(data.value); // Update joke state with fetched joke
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value)); // Update speed state on slider change
  };

  const generateShareURL = () => {
    const url = `${window.location.origin}/tracking?speed=${speed}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Share URL copied to clipboard!');
    });
  };

  return (
    <div className="tracking-container">
      <h2>Tracking Screen</h2>
      <div className="clock-container">
        <p>{clockTime.toLocaleTimeString()}</p>
      </div>
      <div className="slider-container">
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.1"
          value={speed}
          onChange={handleSpeedChange}
        />
        <p>Speed: {speed}x</p>
      </div>
      <button onClick={generateShareURL}>Share</button>
      <div className="joke-container">
        <p>{joke}</p> {/* Display fetched joke */}
      </div>
    </div>
  );
};

export default Tracking;
