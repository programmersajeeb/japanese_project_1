import { AppBar, Container, IconButton, Toolbar, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link  } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import '../../../assets/css/golobal.css';
import useAuth from '../../../hooks/useAuth';
// import '../../../assets/css/Navigation.css';

const Navigation = () => {
	const theme = useTheme()
	const useStyle = makeStyles({
		navItem: {
			color: "#FFFFFF",
			textDecoration: "none",
		},
		navIcon: {
			[theme.breakpoints.up('sm')]: {
				display: "none !important",
			}
		},
		navItemContainer: {
			[theme.breakpoints.down('sm')]: {
				display: "none",
			}
		},
		navLogo: {
			[theme.breakpoints.down('sm')]: {
				textAlign: "right",
			}
		},
		mobileNavItem: {
			textDecoration: "none",
			color: "#FFFFFF",

		}
	})
	const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle()

	const [state, setState] = React.useState(false);

	const list = (
		<Box
			role="presentation"
		>
			<List>
				<ListItem button>
					<ListItemText> <NavLink className={`mobileNavItem navMenu`} to='/'>ホーム</NavLink> </ListItemText>
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemText> <NavLink className={`mobileNavItem navMenu`} to='/mission'>ミッション</NavLink> </ListItemText>
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemText> <NavLink className={`mobileNavItem navMenu`} to='/job'>仕事</NavLink> </ListItemText>
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemText> <NavLink className={`mobileNavItem navMenu`} to='/company'>会社概要</NavLink> </ListItemText>
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemText> <NavLink className={`mobileNavItem navMenu`} to='/contact'>お問合せ</NavLink> </ListItemText>
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemText> <NavLink className={`mobileNavItem navMenu`} to='/privacy'>プライバシーポリシー</NavLink> </ListItemText>
				</ListItem>
				<Divider />
			</List>
		</Box>
	);
	const {user, logout, admin} = useAuth();
	return (
		<>
			<Box sx={{ flexGrow: 1, width: '100%', height: '74px' }}>
				<AppBar sx={{ backgroundColor: "#FFFFFF", boxShadow: "none" }} position="fixed">
					<Container>
						<Toolbar>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
								className={navIcon}
								onClick={() => setState(true)}
							>
								<MenuIcon />
							</IconButton>
							<Box className={navLogo} sx={{ flexGrow: 1 }}>
								<Link to='/' >
									<img src={logo} alt="" width="130px" height="70px" />
								</Link>
							</Box>
							<Box className={navItemContainer}>
								<NavLink className={`navItem navMenu`} activeClassName="active" to="/"> ホーム</NavLink>
								<NavLink className={`navItem navMenu`} activeClassName="active" to="/mission">ミッション</NavLink>
								<NavLink className={`navItem navMenu`} activeClassName="active" to="/job"> 仕事</NavLink>
								<NavLink className={`navItem navMenu`} activeClassName="active" to="/company">会社概要</NavLink>
								<NavLink className={`navItem navMenu`} activeClassName="active" to="/contact">お問合せ</NavLink>
								<NavLink className={`navItem navMenu`} activeClassName="active" to="/privacy">プライバシーポリシー</NavLink>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</Box>
			<div>
				<React.Fragment>
					<Drawer
						open={state}
						onClose={() => setState(false)}
					>
						{list}
					</Drawer>
				</React.Fragment>
			</div>
		</>
	);
};

export default Navigation;