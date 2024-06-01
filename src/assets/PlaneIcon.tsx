import { Icon } from 'leaflet';

export const planeIcon = new Icon({
  iconUrl: 'airplane.svg',
  iconSize: [20, 20], // size of the icon
  iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
});
