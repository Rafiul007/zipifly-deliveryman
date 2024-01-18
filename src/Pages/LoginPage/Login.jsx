import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import logo from '../../Assets/logo.png'
import img1 from '../../Assets/img1.png'
import { Button } from '@mui/material';
function Login() {
    return (
        <div className="login-container">
            <div className="login-logo">
                <img src={logo} alt="" />
            </div>
            <div className="login-main-container">
                <div className="login-left">
                    <img src={img1} alt="" />
                </div>
                <div className="login-right">
                    <h1>Login</h1>
                    <div className="text-field">
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' />
                    </div>
                    <Button variant="contained">Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Login