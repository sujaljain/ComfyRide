import React, { useRef, useState } from "react";
import logo from "../assets/logo_2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-4 top-2" src={logo} alt="Logo" />

      <div className="h-screen w-screen">
        {/* Image for temproray use */}
        <img
          className="h-screen w-screen"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5
            ref={panelCloseRef}
            className="absolute opacity-0 top-5 right-5 text-2xl"
            onClick={() => {
              setPanelOpen(false);
            }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-14 w-1 top-[50%] left-9 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              type="text"
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              name="pickup-point"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pickup location"
            />
            <input
              type="text"
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              name="dropoff-point"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0] bg-white">
          <LocationSearchPanel />
        </div>
      </div>

      {/* Panel for showing vehicle options to go, after selecting the location */}
      <div className="fixed z-10 bottom-0 px-3 py-8 w-full bg-white translate-y-full">
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>

        {/* UberGo */}
        <div className="flex border-2 active:border-black mb-2 rounded-xl items-center justify-between w-full p-3">
          <img
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="Car_image"
            className="h-10"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="font-semibold text-lg">₹193.20</h2>
        </div>

        {/* Moto */}
        <div className="flex border-2 active:border-black mb-2 rounded-xl items-center justify-between w-full p-3">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="Moto_Image"
            className="h-10"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable motorcycle rides</p>
          </div>
          <h2 className="font-semibold text-lg">₹65</h2>
        </div>

        {/* UberAuto */}
        <div className="flex border-2 active:border-black mb-2 rounded-xl items-center justify-between w-full p-3">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="Auto_Image"
            className="h-10"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberAuto{" "}
              <span>
                <i className="ri-user-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
          </div>
          <h2 className="font-semibold text-lg">₹111.92</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
