import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon: IconDefinition;
  title: string;
};

const FlightInformationHeader = ({ icon, title }: Props) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <span className="font-bold text-[16px] pl-2">{title}</span>
    </div>
  );
};

export default FlightInformationHeader;
