import React, { useState } from 'react';
import Maps from '../../components/maps/maps';
import StreetViewComponent from '../street_view/street_view';

export default function Directions_home() {
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);

  const handleRouteChange = (start, end) => {
    setStartPosition(start);
    setEndPosition(end);
  };

  return (
    <div>
      <Maps onRouteChange={handleRouteChange} />
      <StreetViewComponent startPosition={startPosition} endPosition={endPosition} />
    </div>
  );
}
