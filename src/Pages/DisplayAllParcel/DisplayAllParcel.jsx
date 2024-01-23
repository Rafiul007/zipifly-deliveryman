import React, { useEffect, useState } from 'react'
import Parcel from '../../Components/ParcelCard/Parcel'
import axios from 'axios';
import './DisplayAllParcel.css'
function DisplayAllParcel() {
  const [allParcel, setAllParcel] = useState([]);
  const token = localStorage.getItem('token');
  // fetch all parcel data
  const fetchData = async () => {
    try {
      const response = await axios.get("https://zipifly2-server.vercel.app/orders/all-orders", {
        headers: { Authorization: "Bearer " + token },
      });
      if (!response.data) throw new Error();
      console.log("Testing response data", response.data);
      setAllParcel(response.data);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };
  useEffect(() => {
    fetchData(); // Initial data fetch

    // Set up interval to fetch data every 30 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 30000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [token]);
  return (
    <div className='allparcel-container'>
      <h1>All Parcels</h1>
      <p>Accept Parcel to deliver them</p>
      <div className="parcel-container">
        {allParcel && allParcel.length === 0 ? (
          <p>No parcels available.</p>
        ) : (
          allParcel.map((item) => (
            <Parcel key={item._id} item={item} btn={"Accept"} />
          ))
        )}
      </div>

    </div>
  )
}

export default DisplayAllParcel