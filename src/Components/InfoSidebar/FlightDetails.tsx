import { faPaperPlane, faPlane } from '@fortawesome/free-solid-svg-icons';
import FlightDetailsCard from './FlightDetailsCard';

type Props = {};

const FlightDetails = (props: Props) => {
  return (
    <div className="flex">
      <FlightDetailsCard icon={faPlane} />
      <FlightDetailsCard icon={faPaperPlane} />
    </div>
  );
};

export default FlightDetails;
