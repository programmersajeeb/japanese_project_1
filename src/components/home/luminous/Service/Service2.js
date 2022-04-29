import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/Service.module.css'

const Service2 = (props) => {
	const { title, icon, description } = props.service;
	return (
		<Grid item xs={12} sm={12} md={12} xl={12}>
			<Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '10px', padding: '50px 25px' }}>
				<Box sx={{ margin: '20px 0' }}>
					<Box className={styles.icon}><i className={icon} ></i></Box>
				</Box>
				<Box>
					<Typography variant="h2" component="h2" className={styles.title}>
						{title}
					</Typography>
					<Typography variant="body1" gutterBottom={true} className={styles.details}>
						{description}
					</Typography>
				</Box>
			</Box>
		</Grid>
	)
}

export default Service2;