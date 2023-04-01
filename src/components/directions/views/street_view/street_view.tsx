import React, { useEffect } from 'react';
import { StreetViewPanorama, LoadScript } from '@react-google-maps/api';

const API_KEY = 'AIzaSyD6kwUuU-7aS33Nd2ZJtIgKnSflB1VjzcU';


const containerStyle = {
  width: '100%',
  height: '400px',
};

const StreetViewComponent = ({ startPosition, endPosition }) => {
  useEffect(() => {
    if (!startPosition || !endPosition) {
      return;
    }

    // Add logic to calculate the driving route and set the initial panorama position

  }, [startPosition, endPosition]);

  return (
    <div>
      {startPosition && endPosition && (
        <LoadScript googleMapsApiKey={API_KEY}>
          <StreetViewPanorama
            mapContainerStyle={containerStyle}
            position={startPosition}
            motionTracking
          />
        </LoadScript>
      )}
    </div>
  );
};

export default StreetViewComponent;