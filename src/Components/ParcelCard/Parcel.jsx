import React from 'react'
import './Parcel.css'
import parcelImg from './parcel.png'
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Parcel({ item }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const handleAccept = async (itemId) => {
        console.log(token);
        try {
            await axios.put(`http://localhost:3002/deliveryman/accept/${item._id}`, null, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("The order was accepted");
            window.location.reload();
            // navigate("/parcel/accepted")
        } catch (error) {
            // Handle error
            console.error("Error accepting order:", error);
        }
    }
    return (
        <div className="parcel-card-container">
            <h1>Order Details</h1>
            <div class="card" >
                <div className="card-img">
                    <img src={parcelImg} alt="Box" />
                </div>

                <div class="content">
                    <div class="header">
                        <h3>Tracking ID: {item._id}</h3>
                    </div>
                    <div class="card-body">
                        <div className="status">
                            <span>Status: </span>
                            <Chip label={item.status} variant="outlined" color='primary' size='small' />
                        </div>
                        <p className="date">Date: March 30, 2022</p>
                        <p className="sender">Pickup Address: {item.sender.address}, {item.sender.district}</p>
                        <p className="receiver">Delivery Address: {item.receiver.address}, {item.receiver.district}</p>
                        <p className="weight">Weight: {item.parcel.weight}</p>
                        <p className="category">Category: {item.parcel.category}</p>
                        <p className="totalCash">Total: {item.totalCash}</p>
                    </div>
                </div>
            </div>
            <Button variant='contained' color='success' onClick={() => handleAccept(item._id)}>Accept</Button>
        </div>
    )
}

export default Parcel