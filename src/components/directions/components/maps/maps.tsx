// Replace 'YOUR_API_KEY' with your Google Maps API key
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { StandaloneSearchBox } from '@react-google-maps/api';

const API_KEY = 'AIzaSyD6kwUuU-7aS33Nd2ZJtIgKnSflB1VjzcU';


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 0,
  lng: 0
};

const Maps = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const getDirections = (start:any, end:any) => {
    if (!start || !end) {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING',
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        setDirections(result);
      }
    });
  };

  useEffect(() => {
    if (userLocation && destination) {
      getDirections(userLocation, destination);
    }
  }, [userLocation, destination]);

  const onPlacesChanged = () => {
    if (searchBox) {
      const place = searchBox.getPlaces()[0];
      if (place) {
        setDestination(place.geometry.location);
      }
    }
  };

  const onLoad = (ref) => setSearchBox(ref);
directions && console.log("[ directions ]",directions)
  return (
    <div className='maps-container'>
      <LoadScript googleMapsApiKey={API_KEY} libraries={['places']}>
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Enter destination"
            className='destination'
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
            }}
          />
        </StandaloneSearchBox>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation || center}
          zoom={14}
        >
          {userLocation && <Marker position={userLocation} />}
          {directions && <DirectionsRenderer directions={directions} />}

        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
