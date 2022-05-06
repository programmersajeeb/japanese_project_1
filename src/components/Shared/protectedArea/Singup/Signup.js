import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../../assets/css/golobal.css';
// import styles from '../../../../assets/css/ProtectedArea.module.css';
import logo from '../../../../assets/images/logo.png';
import useAuth from '../../../../hooks/useAuth';

const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const {user, registerUser, isLoading, authErorr} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {
            ...loginData
        };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
    }
  return (
    <Box>
      <Container>
        <Box sx={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{display:'flex', alignItems:'center'}}>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
              <Box><img src={logo} alt="" width="400px" height="240px"/></Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
              <Box>
              {
                        !isLoading && <form onSubmit={handleLoginSubmit}>
                                <TextField sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard"/>
                                <TextField sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    variant="standard"/>
                                <TextField sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"/>
                                <TextField sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Retype Password"
                                    placeholder="Retype password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard"/>
                                <Button sx={{ width: '75%', m: 1 }}
                                    variant="contained"
                                    type="submit"> Register
                                </Button>
                                <NavLink style={{ textDecoration: "none" }} to="/signin">
                                    <Button variant="text">Already Registered? Please Login</Button>
                                </NavLink>
                            </form>
                    }
                    {isLoading && <CircularProgress/>}
                    {
                        user?.email && <Alert severity="success">User created successfuly!</Alert>
                    }
                    {authErorr && <Alert severity="error">{authErorr}</Alert>}
              </Box>
            </Grid>
          </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;