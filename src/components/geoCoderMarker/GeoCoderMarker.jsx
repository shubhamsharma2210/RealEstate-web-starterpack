import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as ELG from 'esri-leaflet-geocoder';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([0, 0]); // Initial position set to [0, 0]

  useEffect(() => {
    if (ELG && map && address) {
      ELG.geocode().text(address).run((err, results, response) => {
        if (err) {
          console.error('Geocoding error:', err);
          // Handle geocoding error if needed
          return;
        }

        if (results?.results?.length > 0) {
          const { lat, lng } = results.results[0].latlng;

          // Update position with an array containing latitude and longitude
          setPosition([lat, lng]);

          // Fly to the new position on the map
          map.flyTo([lat, lng], 6);
        }
      });
    }
  }, [address, map]);

  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup />
    </Marker>
  );
};

export default GeoCoderMarker;
