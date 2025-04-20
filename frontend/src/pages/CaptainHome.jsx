import React, { useEffect, useState } from "react";
import axios from "axios";

const CaptainHome = () => {
  const [captainData, setCaptainData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaptainData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched Captain Data:", response.data); // Debugging log
        setCaptainData(response.data); // Set the fetched captain data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching captain data:", err);
        setError("Failed to load captain data.");
        setLoading(false);
      }
    };

    fetchCaptainData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Welcome, Captain!</h1>
      {captainData && (
        <div className="bg-gray-100 p-5 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Captain Profile</h2>
          <p>
            <strong>Name:</strong> {captainData?.fullName?.firstName || "N/A"}{" "}
            {captainData?.fullName?.lastName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {captainData?.email || "N/A"}
          </p>
          <p>
            <strong>Vehicle:</strong> {captainData?.vehicle?.color || "N/A"}{" "}
            {captainData?.vehicle?.vehicleType || "N/A"} (
            {captainData?.vehicle?.number || "N/A"})
          </p>
          <p>
            <strong>Capacity:</strong> {captainData?.vehicle?.capacity || "N/A"}{" "}
            seats
          </p>
          <p>
            <strong>Status:</strong> Active
          </p>
        </div>
      )}
    </div>
  );
};

export default CaptainHome;
