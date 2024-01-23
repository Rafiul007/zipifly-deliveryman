import React, { useEffect, useState } from 'react'
import './ParcelAccepted.css'
import axios from 'axios';
import Parcel from '../../Components/ParcelCard/Parcel';
function ParcelAccepted() {
  const [allParcel, setAllParcel] = useState([]);
  const token = localStorage.getItem('token');
  const [btn, setBtn] = useState("")
  //fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/orders/accepted-delivery", {
        headers: { Authorization: "Bearer " + token },
      });
      if (!response.data) throw new Error();
      console.log("Testing response data", response.data);
      setAllParcel(response.data);
      setBtn(response.status)
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };
  //button level
  const getButtonLabel = (parcel) => {
    if (parcel.status === 'Pending') {
      return 'Picked Up';
    } else if (parcel.status === 'Picked up') {
      return 'Delivered';
    } else {
      return 'Done'; // Handle other statuses as needed
    }
  };
  useEffect(() => {
    fetchData(); // Initial data fetch
    // if pending change btn to Pick Up
    // else if Picked up change btn to Delivered
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
            <Parcel key={item._id} item={item} btn={getButtonLabel(item)} />
          ))
        )}
      </div>
    </div>
  )
}

export default ParcelAccepted