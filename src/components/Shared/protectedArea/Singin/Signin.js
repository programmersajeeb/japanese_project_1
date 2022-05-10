import { Alert, Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink,  useLocation,  useNavigate } from 'react-router-dom';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/ProtectedArea.module.css';
import logo from '../../../../assets/images/logo.png';
import useAuth from '../../../../hooks/useAuth';
import SweetAlert from '../../Sweetalert/Sweetalert';

const Signin = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, authErorr} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {
            ...loginData
        };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
      loginUser( loginData.email, loginData.password, location, navigate );
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
              <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard"/>
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"/>
                        <Button sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit">
                            Login
                        </Button>
                        <NavLink style={{ textDecoration: "none" }} to="/signup">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                    {
                        user?.email && SweetAlert("Signin Successfully")
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

export default Signin;