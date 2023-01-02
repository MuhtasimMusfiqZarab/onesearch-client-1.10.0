import React, { Component } from 'components/uicontainers/404';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const coordintate = { lat: 55, lng: 3 };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAYkOzGh3do-FA6DptUiaT4Y_b_4kC4zHM' }}
        defaultCenter={coordintate}
        center={coordintate}
        defaultZoom={5}
        margin={[50, 50, 50, 50]}></GoogleMapReact>
    </div>
  );
};

export default Map;
