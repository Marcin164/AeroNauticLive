import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import FlightInformationHeader from './FlightInformationHeader';
import FlightInformationDetail from './FlightInformationDetail';

type Props = {
  icon: IconDefinition;
  title: string;
};

const FlightInformation = ({ icon, title }: Props) => {
  return (
    <div className="p-2">
      <FlightInformationHeader icon={icon} title={title} />
      <div className="pt-2">
        <FlightInformationDetail />
      </div>
    </div>
  );
};

export default FlightInformation;
