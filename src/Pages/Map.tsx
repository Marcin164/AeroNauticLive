import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { planeIcon } from '../assets/PlaneIcon';
import VehicleInfoPopup from '../Components/VehicleInfoPopup/VehicleInfoPopup';
import InfoSidebar from '../Components/InfoSidebar/InfoSidebar';
import { useState } from 'react';

const Map = () => {
  const [isInfoSidebarOpened, setIsInfoSidebarOpened] = useState(false);

  return (
    <>
      <MapContainer
        center={[0, 0]}
        zoom={6}
        style={{ height: '100vh', width: '100vw' }}
        zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={planeIcon}
          position={[0, 0]}
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
            mouseout: (event) => event.target.closePopup(),
            mousedown: () => setIsInfoSidebarOpened((prev) => !prev)
          }}>
          <VehicleInfoPopup />
        </Marker>
      </MapContainer>
      <InfoSidebar isOpened={isInfoSidebarOpened} />
    </>
  );
};

export default Map;
