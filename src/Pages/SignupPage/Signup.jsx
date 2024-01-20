import React from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import logo from '../../Assets/logo.png'
import img1 from '../../Assets/img1.png'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const validationSchema = yup.object({
  fullname: yup.string('Enter you name').min(3, "Name can't be less than 3 character").required("Name is required"),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  confirmPassword: yup.string("Enter confirm password").oneOf([yup.ref('password')], "Password must match"),
  contactNumber: yup.string("Enter valid phone number").min(11, "Phone has 11 numebrs").max(11, "Phone number has 11 numbers").required("Phone number is required"),

});
function Signup() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      contactNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      try {
        const newDeliveryman = {
          fullname: values.fullname,
          email: values.email,
          password: values.password,
          contactNumber: values.contactNumber,
        }
        const res = await axios.post('http://localhost:3002/deliveryman/', newDeliveryman);
        console.log(res.data);
        alert('Registration successful!');
        resetForm()
        navigate("/welcome")
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Registration failed. Please try again.');

      }

    },
  });


  return (
    <div className="signup-container">
      <div className="signup-logo">
        <img src={logo} alt="" />
      </div>
      <div className="signup-main-container">
        <div className="signup-left">
          <h1>Join Zipifly</h1>
          <div className="text-field">
            <form onSubmit={formik.handleSubmit} className='form-container'>

              <TextField fullWidth label="Full name" variant="outlined"
                id="fullname"
                name='fullname'
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                helperText={formik.touched.fullname && formik.errors.fullname} />

              <TextField fullWidth label="Email" variant="outlined"
                id="email"
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />

              <TextField fullWidth label="Phone" variant="outlined"
                id="contactNumber"
                name='contactNumber'
                value={formik.values.contactNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                helperText={formik.touched.contactNumber && formik.errors.contactNumber} />

              <TextField fullWidth label="Password" variant="outlined"
                id="password"
                name='password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password} />

              <TextField fullWidth label="Password" variant="outlined"
                id="confirmPassword"
                name='confirmPassword'
                type='password'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} />
              <div className="btn">
                <Button variant="contained" type='submit'>Signup</Button>
                <Button color="primary" variant="outlined"><Link to='/login'>Login</Link></Button>
              </div>
            </form>
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