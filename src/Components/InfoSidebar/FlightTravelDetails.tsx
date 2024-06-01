import { faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Progressbar from '../Progress/Progressbar';

type Props = {};

const FlightTravelDetails = (props: Props) => {
  return (
    <div className="flex h-[50px]">
      <div className="w-[15%] flex flex-col items-center">
        <FontAwesomeIcon icon={faPlaneDeparture} className="w-[25px] h-[25px] text-[25px]" />
        <div>WRO</div>
      </div>
      <div className="w-[70%]">
        <div className="flex justify-between">
          <div>
            <div className="text-[12px] font-bold">13:13</div>
            <div className="text-[12px] font-bold">13:10</div>
          </div>
          <div className="text-[#727272] flex items-center">
            <span>+1</span>
          </div>
          <div className="text-center w-[100px]">
            <div className="text-[12px] font-light">Real</div>
            <div className="text-[12px] font-light">Scheduled</div>
          </div>
          <div>
            <div className="text-[12px] font-bold">17:16</div>
            <div className="text-[12px] font-bold">17:10</div>
          </div>
          <div className="text-[#727272] flex items-center">
            <span>+1</span>
          </div>
        </div>
        <Progressbar />
      </div>
      <div className="w-[15%] flex flex-col items-center">
        <FontAwesomeIcon icon={faPlaneArrival} className="w-[25px] h-[25px] text-[25px]" />
        <div>DXB</div>
      </div>
    </div>
  );
};

export default FlightTravelDetails;
