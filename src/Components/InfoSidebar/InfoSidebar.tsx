import FlightTravelDetails from './FlightTravelDetails';
import FlightDetails from './FlightDetails';
import FlightInformation from './FlightInformation';
import { faGlobeEurope, faPlane } from '@fortawesome/free-solid-svg-icons';

type Props = {
  isOpened: boolean;
};

const InfoSidebar = ({ isOpened }: Props) => {
  if (!isOpened) return null;
  return (
    <div className="z-[401] bg-[#FFFFFF] rounded-[10px] shadow-xl absolute left-[10px] top-[10px] w-[300px] h-[900px]">
      <div className="bg-[url('ryanair-800x400.png')] rounded-t-[10px] h-[55px] bg-center bg-cover" />
      <FlightTravelDetails />
      <FlightDetails />
      <FlightInformation icon={faGlobeEurope} title="Geographic details" />
      <FlightInformation icon={faPlane} title="Aircraft information" />
    </div>
  );
};

export default InfoSidebar;
