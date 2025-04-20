import React from "react";

const LocationSearchPanel = () => {
  return (
    <div>
      {/* Sample Data */}
      <div className="flex border-2 p-1 border-gray-50 active:border-black rounded-xl items-center justify-start my-2">
        <h2 className="bg-[#eee] flex items-center justify-center w-9 h-10 rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium px-2">
          NH-64, IIT Jhansla, Fake Chandigarh, Real India
        </h4>
      </div>
      <div className="flex border-2 p-1 border-gray-50 active:border-black rounded-xl items-center justify-start my-2">
        <h2 className="bg-[#eee] flex items-center justify-center w-9 h-10 rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium px-2">
          NH-64, IIT Jhansla, Fake Chandigarh, Real India
        </h4>
      </div>
      <div className="flex border-2 p-1 border-gray-50 active:border-black rounded-xl items-center justify-start my-2">
        <h2 className="bg-[#eee] flex items-center justify-center w-9 h-10 rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium px-2">
          NH-64, IIT Jhansla, Fake Chandigarh, Real India
        </h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
