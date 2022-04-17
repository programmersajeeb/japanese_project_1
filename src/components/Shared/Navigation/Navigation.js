import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import '../../../assets/css/golobal.css';

const Navigation = () => {
	return (
		<Box>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="sticky" sx={{ backgroundColor: '#ffffff', padding: '0' }}>
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

							<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<Box>
									<Link to='/' >
										<img src={logo} alt="" width="70px" height="70px" />
									</Link>
								</Box>
								<Box>
									<Link to="/" className='menuItem'>ホーム</Link>
									<Link to="/mission" className='menuItem'>ミッション</Link>
									<Link to="/job" className='menuItem'>仕事</Link>
									<Link to="/company" className='menuItem'>
										会社概要</Link>
									<Link to="/" className='menuItem'>
										お問合せ</Link>
									<Link to="/" className='menuItem'>プライバシーポリシー</Link>
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