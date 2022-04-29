import MenuIcon from "@mui/icons-material/Menu";
import {Button} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";

const drawerWidth = 200;

function Dashboard(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div
            style={{
                backgroundColor: "rgba(193,164,130,.3)",
                minHeight: "100vh"
            }}>
            <Toolbar/>
            <Divider/>
            <Box style={{
                    paddingLeft: "10px"
                }}>
                <Box>
                    <Box
                        style={{
                            textAlign: "left"
                        }}>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "#757575"
                            }}
                            to="/">
                            <Button color="inherit">Luminous</Button>
                        </Link>
                    </Box>
                    <Box
                        style={{
                            textAlign: "left"
                        }}></Box>
                </Box>
                <Box>
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "#757575", display:"block",
                        }}
                        to="/dashboard">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "#757575"
                        }}
                        to="/dashboard/makeAdmin">
                        <Button color="inherit">Make Admin</Button>
                    </Link>
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "#757575"
                        }}
                        to="/dashboard/addservice">
                        <Button color="inherit">Add Service</Button>
                    </Link>
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "#757575"
                        }}
                        to="/dashboard/addannouncement">
                        <Button color="inherit">Add Announcement</Button>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "#757575" }} to="/dashboard/addslide">
                        <Button color="inherit">Add Slide</Button>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "#757575" }} to="/dashboard/manageslide">
                        <Button color="inherit">Manage Slides</Button>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "#757575" }} to="/dashboard/manageservices">
                        <Button color="inherit">Manage Services</Button>
                    </Link>
                </Box>

            </Box>
        </div>
    );

    const container = window !== undefined
        ? () => window().document.body
        : undefined;

    return (
        <Box sx={{
                display: "flex"
            }}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                        backgroundColor: "rgba(193,164,130,.3)"
                    },
                    ml: {
                        sm: `${drawerWidth}px`
                    }
                }}>
                <Toolbar>
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
                    <Typography variant="h6" noWrap="noWrap" color="#757575" component="div">
                        Dashboard
                    </Typography>
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
                    <Route path="/" element={<DashboardHome />}/>
                </Routes>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
    window: PropTypes.func
};

export default Dashboard;
