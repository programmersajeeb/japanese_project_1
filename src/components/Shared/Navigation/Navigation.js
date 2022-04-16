import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Luminous.png';
import '../../../assets/css/golobal.css';

const Navigation = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{backgroundColor:'#ffffff', padding:'0'}}>
        <Container>
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
              
              <Box sx={{ flexGrow: 1, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Box>
              <Link to='/' >
                <img src={logo} alt="" width="70px" height="70px" />
              </Link>
              </Box>
              <Box>
              <Link to="/" className='menuItem'>home</Link>
              <Link to="/" className='menuItem'>Mission</Link>
              <Link to="/" className='menuItem'>work</Link>
              <Link to="/" className='menuItem'>Company Profile</Link>
              <Link to="/" className='menuItem'>Inquiries</Link>
              <Link to="/" className='menuItem'>privacy policy</Link>
              </Box>
              </Box>
              
          </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navigation;