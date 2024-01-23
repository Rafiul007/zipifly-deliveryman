import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

function Dashboard({ token, onLogout }) {
  const decodeToken = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  };
  const userData = decodeToken(token);
  const userId = userData.userId;
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    email: "",
    contactNumber: "",
    fullname: ""
  });
  useEffect(() => {
    try {
      axios.get("https://zipifly2-server.vercel.app/deliveryman/profile/" + userId, {
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => {
          if (!res.data) throw new Error();
          else {
            const { username, email, contactNumber, fullname } = res.data;
            setProfileInfo({
              username: username || "",
              email: email || "",
              contactNumber: contactNumber || "",
              fullname: fullname || ""
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching profile data: ", error);
        });
    } catch (error) {
      console.error("Error in useEffect: ", error);
    }
  }, [userId, token]);
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="user-info">
        <h1>{profileInfo.fullname}</h1>
        <h3>{profileInfo.username}</h3>
        <Button variant='contained' color='error' onClick={onLogout}>Log out</Button>
      </div>
      <div className="accepted-delivery">
        <h2>Accepted Deliveries</h2>
        <p>See all your accepted deliveries</p>
        <Button variant='contained'><Link to='/parcel/accepted'>Accepted</Link></Button>
      </div>
      <div className="all-delivery">
        <h2>Current Active Delivery</h2>
        <p>You can accept delivery from here</p>
        <Button variant='contained'><Link to='/parcel/all'>All parcel</Link></Button>
      </div>
    </div>
  )
}

export default Dashboard