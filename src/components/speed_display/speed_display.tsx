import React, { useState, useEffect } from 'react';

const SpeedDisplay = () => {
  const [speed, setSpeed] = useState(null);

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };

    const onSuccess = (position) => {
      if (position.coords.speed !== null) {
        // Convert speed from meters per second to kilometers per hour
        setSpeed((position.coords.speed * 3.6).toFixed(2));
      }
    };

    const onError = (error) => {
      console.warn('Error:', error.message);
    };

    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(onSuccess, onError, options);
      
      // Clean up the watch when the component is unmounted
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, []);

  return (
    <div className='speed-display'>
      <p>Current speed: {speed ? `${speed} km/h` : 'N/A'}</p>
    </div>
  );
};

export default SpeedDisplay;
