import React from 'react';
import { Popup } from 'react-leaflet';
import Progressbar from '../Progress/Progressbar';

type Props = {};

const VehicleInfoPopup = (props: Props) => {
  return (
    <Popup>
      <div className="flex w-[170px] h-[60px]">
        <div>
          <img src="Ryanair-logo.png" width={60} height={60} />
        </div>
        <div className="px-2">
          <div className="text-[12px] font-regular ">G9032</div>
          <div className="text-[14px] font-bold ">WRO - DXB</div>
          <div>0:16 in air</div>
          <Progressbar />
        </div>
      </div>
    </Popup>
  );
};

export default VehicleInfoPopup;
