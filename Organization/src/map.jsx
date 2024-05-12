import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Initialize map
    const map = L.map('map').setView([51.505, -0.09], 13);
    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    const marker = L.marker([51.5, -0.09], { draggable: true }).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
    markerRef.current = marker;

    // Add click event listener to map to set marker
    const onClick = (e) => {
      const { lat, lng } = e.latlng;
      markerRef.current.setLatLng([lat, lng]);
    };
    map.on('click', onClick);

    // Add event listener to stop moving the marker when it's dragged
    const onDragEnd = () => {
      map.off('click', onClick); // Remove click event listener
      markerRef.current.dragging.disable(); // Disable marker dragging
    };
    marker.on('dragend', onDragEnd);

    // Clean up when the component unmounts
    return () => {
      map.remove(); // Remove the map instance to avoid memory leaks
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once after initial render

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
