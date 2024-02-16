import React from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const Map = () => {
  return (
    <div id="map" style={{ width: "128vw", height: "96vh" }}>
        <div>
        <MapContainer center={[51.505, -0.09]} zoom={28} style={{ height: '96vh' }}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <FeatureGroup>
        <EditControl
          position="topright"
          draw={{
            circle: true,
            rectangle: true,
            marker: false,
            polyline: false,
            circlemarker: false,
          }}
        />
      </FeatureGroup>
    </MapContainer>
    </div>
    </div>
  );
};

export default Map;
