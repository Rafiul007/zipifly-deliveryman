import React, { useEffect, useState } from 'react'
import './ParcelAccepted.css'
import axios from 'axios';
import Parcel from '../../Components/ParcelCard/Parcel';
function ParcelAccepted() {
  const [allParcel, setAllParcel] = useState([]);
  const token = localStorage.getItem('token');
  //fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/orders/accepted-delivery", {
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
    }, 300000);
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [token]);
  return (
    <div className='accepted-parcel'>
      <h1>Parcel Accepted</h1>
      <p>Accept Parcel to deliver them</p>
      <div className="parcel-container">
        {allParcel && allParcel.length === 0 ? (
          <p>No parcels available.</p>
        ) : (
          allParcel.map((item) => (
            <Parcel key={item._id} item={item} />
          ))
        )}
      </div>
    </div>
  )
}

export default ParcelAccepted