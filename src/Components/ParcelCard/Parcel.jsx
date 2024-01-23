import React from 'react'
import './Parcel.css'
import parcelImg from './parcel.png'
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Parcel({ item, btn }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    // for accepting parcel
    const handleAccept = async (itemId) => {
        console.log(token);
        try {
            await axios.put(`https://zipifly2-server.vercel.app/deliveryman/accept/${item._id}`, null, {
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
    // for picking up parcel
    const handlePickup = async (itemId) => {
        console.log(token);
        try {
            await axios.put(`https://zipifly2-server.vercel.app/deliveryman/pickup/${item._id}`, null, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("The order was picked up");
            window.location.reload();
            // navigate("/parcel/accepted")
        } catch (error) {
            // Handle error
            console.error("Error picking up order:", error);
        }
    }
    // for picking up parcel
    const handleDelivered = async (itemId) => {
        console.log(token);
        try {
            await axios.put(`https://zipifly2-server.vercel.app/deliveryman/delivered/${item._id}`, null, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("The order was delivered");
            window.location.reload();
            // navigate("/parcel/accepted")
        } catch (error) {
            // Handle error
            console.error("Error delivered  order:", error);
        }
    }
    //function to handle click
    const handleClick = (itemId)=>{
        if(btn === "Accept"){
            handleAccept(itemId);
        }
        else if(btn === "Picked Up"){
            handlePickup(itemId);
        }
        else if(btn === "Delivered"){
            handleDelivered(itemId);
        }
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
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
                        <p className="date"><span>Date:</span> {formatDate(item.createdAt)}</p>
                        <p className="sender"><span>Pickup Address:</span> {item.sender.address}, {item.sender.district}</p>
                        <p className="receiver"><span>Delivery Address:</span> {item.receiver.address}, {item.receiver.district}</p>
                        <p className="weight"><span>Weight:</span> {item.parcel.weight}</p>
                        <p className="category"><span>Category:</span> {item.parcel.category}</p>
                        <p className="totalCash"><span>Total:</span> {item.totalCash}</p>
                    </div>
                </div>
            </div>
            <Button variant='contained' color='success' onClick={() => handleClick(item._id)}>{btn}</Button>
        </div>
    )
}

export default Parcel