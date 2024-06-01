import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
  icon: IconDefinition;
};

const FlightDetailsCard = ({ icon }: Props) => {
  return (
    <div className="flex w-[50%] py-2 justify-around">
      <FontAwesomeIcon icon={icon} className="text-[30px] w-[30px] h-[30px]" />
      <div className="text-center">
        <div className="text-[12px] font-medium">Flight number</div>
        <div className="text-[12px] font-light">FR5432</div>
      </div>
    </div>
  );
};

export default FlightDetailsCard;
