import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { planeIcon } from '../assets/PlaneIcon';
import VehicleInfoPopup from '../Components/VehicleInfoPopup/VehicleInfoPopup';

const Map = () => {
  return (
    <MapContainer center={[0, 0]} zoom={6} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={planeIcon} position={[0, 0]}>
        <VehicleInfoPopup />
      </Marker>
    </MapContainer>
  );
};

export default Map;
