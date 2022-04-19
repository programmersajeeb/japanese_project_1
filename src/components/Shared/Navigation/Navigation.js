import { AppBar, Container, IconButton, Toolbar, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import '../../../assets/css/golobal.css';

const Navigation = () => {
		const theme = useTheme()
  	const useStyle = makeStyles({
    navItem:{
      color:"#FFFFFF",
      textDecoration:"none",
    },
    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:"none !important",
      }
    },
    navItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display:"none",
      }
    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
        textAlign:"right",
      }
    },
    mobileNavItem:{
      textDecoration:"none",
      color:"#FFFFFF",

    }
  })
  const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem} = useStyle()

  const [state, setState] = React.useState(false);

  const list = (
    <Box
      role="presentation"
    >
      <List>
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/'>Home</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/about'>About</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/services'>Services</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/portfolio'>Portfolio</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/contact'>Contact</Link> </ListItemText>
          </ListItem>
          <Divider />
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1, width:'100%', height:'74px' }}>
      <AppBar sx={{backgroundColor:"#FFFFFF", boxShadow:"none"}} position="fixed">
        <Container>
				<Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=> setState(true)}
          >
            <MenuIcon />
          </IconButton>
					<Box className={navLogo} sx={{ flexGrow: 1 }}>
	 							<Link to='/' >
								<img src={logo} alt="" width="70px" height="70px" />
									</Link>
					</Box>
          <Box className={navItemContainer}>
               <NavLink className={navItem} to="/"> <Button className='navMenu' color="inherit">ホーム</Button> </NavLink>
               <NavLink className={navItem} to="/"> <Button className='navMenu' color="inherit">ミッション</Button> </NavLink>
               <NavLink className={navItem} to="/"> <Button className='navMenu' color="inherit">仕事</Button> </NavLink>
               <NavLink className={navItem} to="/"> <Button className='navMenu' color="inherit">会社概要</Button> </NavLink>
               <NavLink className={navItem} to="/"> <Button className='navMenu' color="inherit">お問合せ</Button> </NavLink>
               <NavLink className={navItem} to="/"> <Button className='navMenu' color="inherit">プライバシーポリシー</Button> </NavLink>
             </Box>
        </Toolbar>
				</Container>
      </AppBar>
    </Box>
    <div>
        <React.Fragment>
          <Drawer
            open={state}
            onClose={()=> setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
    </div>
    </>
	);
};

export default Navigation;