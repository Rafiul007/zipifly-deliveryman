import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import logo from '../../Assets/logo.png'
import img1 from '../../Assets/img1.png'
import { Button } from '@mui/material';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required*'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required*'),
});

function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values)
        },
    })
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
                    <form onSubmit={formik.handleSubmit} className='form-container'>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <div className="btn">
                            <Button color="success" variant="contained" type="submit">Login</Button>
                            <Button color="primary" variant="outlined"><Link to='/signup'>Signup</Link></Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login