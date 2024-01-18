import React from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import logo from '../../Assets/logo.png'
import img1 from '../../Assets/img1.png'
import { Button } from '@mui/material';
function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-logo">
        <img src={logo} alt="" />
      </div>
      <div className="signup-main-container">
        <div className="signup-left">
          <h1>Join Zipifly</h1>
          <div className="text-field">
            <TextField fullWidth id="outlined-basic" label="Full name" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Phone number" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' />
            <Button variant="contained">signup</Button>
          </div>

        </div>
        <div className="signup-right">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Signup