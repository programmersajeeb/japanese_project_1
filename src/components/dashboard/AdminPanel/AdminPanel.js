import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminPanelHome from "../AdminPanelHome/AdminPanelHome";
import logo from '../../../assets/images/logo.png';
import '../../../assets/css/AdminPanel.css';

const drawerWidth = 200;

function AdminPanel(props) {
    const {logout} = useAuth();
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div
            style={{
                backgroundColor:'#3f4d67',
                minHeight: "100vh",
                overflow:'auto',
            }}>
               
            <Toolbar>
                <NavLink style={{ textDecoration: "none", color: "#76fcff" }} to="/">
                 <img style={{width:'90%', height:'auto', margin:'0 auto', display:'block'}} src={logo} alt="Logo" />
                </NavLink>
            </Toolbar>
            <Box style={{
                    paddingLeft: "10px"
                }}>
                <Box>
                <Toolbar>
                <NavLink activeClassName="active" style={{ textDecoration: "none", color: "#96a4be", display:"block", width:'100%' }} to="/adminpanel/massage">
                        Massage
                    </NavLink>
                </Toolbar>
                <Toolbar>
                <NavLink activeClassName="active" style={{ textDecoration: "none", color: "#96a4be", display:"block", width:'100%' }} to="/adminpanel/manageslide">
                        Manage Slides
                    </NavLink>
                </Toolbar>
                <Toolbar>
                <NavLink activeClassName="active" style={{ textDecoration: "none", color: "#96a4be", display:"block", width:'100%' }} to="/adminpanel/manageservices">
                        Manage Services
                    </NavLink>
                </Toolbar>
                <Toolbar>
                <NavLink activeClassName="active" style={{ textDecoration: "none", color: "#96a4be", display:"block", width:'100%' }} to="/adminpanel/manageannouncement">
                Manage Blog
                </NavLink>
                </Toolbar>
                <Toolbar>
                <NavLink activeClassName="active" style={{ textDecoration: "none", color: "#96a4be", display:"block", width:'100%' }} to="/adminpanel/manageusers">
                Manage Users
                </NavLink>
                </Toolbar>
                <Toolbar>
                <NavLink activeClassName="active"
                        style={{
                            textDecoration: "none",
                            color: "#96a4be", display:"block", width:'100%'
                        }}
                        to="/adminpanel/makeAdmin">
                       Make Admin
                    </NavLink>
                </Toolbar>
                <Toolbar>
                <NavLink activeClassName="active" style={{ textDecoration: "none", color: "#96a4be", display:"block", width:'100%' }} to="/adminpanel/addslide">
                        Add Slide
                    </NavLink>
                </Toolbar>
                <Toolbar>
                <NavLink activeClassName="active"
                        style={{
                            textDecoration: "none",
                            color: "#96a4be", display:"block", width:'100%'
                        }}
                        to="/adminpanel/addservice">
                       Add Service
                    </NavLink>
                </Toolbar>
                <Toolbar>
                <NavLink activeClassName="active"
                        style={{
                            textDecoration: "none",
                            color: "#96a4be", display:"block", width:'100%'
                        }}
                        to="/adminpanel/addannouncement">
                        Add Blog
                    </NavLink>
                </Toolbar>
                </Box>
			</Box>
		</div>
	);

	const container = window !== undefined
		? () => window().document.body
		: undefined;

    return (
        <Box sx={{
                display: "flex",
                backgroundColor:'#f4f7fa',
                minHeight:'100vh'
            }}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                        backgroundColor:'#f4f7fa'
                    },
                    ml: {
                        sm: `${drawerWidth}px`
                    }
                }}>
                <Toolbar sx={{padding:'0 10px'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: {
                                sm: "none"
                            }
                        }}>
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
                    <Typography variant="h6" noWrap="noWrap" color="#3d3e3e" textTransform='uppercase' fontWeight="700" fontSize="20px" component="div">
                        Admin Panel
                    </Typography>
                    <Button sx={{color:'#21afe7', fontWeight:'700', fontSize:'20px'}} onClick={logout} color="inherit">Signout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: {
                        sm: drawerWidth
                    },
                    flexShrink: {
                        sm: 0
                    }
                }}
                aria-label="mailbox folders">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {
                            xs: "block",
                            sm: "none"
                        },
                        "& .MuiDrawer-paper" : {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}>
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {
                            xs: "none",
                            sm: "block"
                        },
                        "& .MuiDrawer-paper" : {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                    open="open">
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`
                    }
                }}>
                <Toolbar/>
                <Outlet/>
                <Routes>
                    <Route path="/" element={<AdminPanelHome />}/>
                </Routes>
            </Box>
        </Box>
    );
}

AdminPanel.propTypes = {
    /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
    window: PropTypes.func
};

export default AdminPanel;
