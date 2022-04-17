import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Announcements.module.css';
import Announcement from '../Announcement/Announcement/Announcement';

const Announcements = () => {
	const [announcements, setAnnouncements] = useState([]);
	useEffect(() => {
		fetch('announcements.json')
			.then(res => res.json())
			.then(data => setAnnouncements(data))
	}, []);
	return (
		<Box sx={{ padding: '100px 0' }}>
			<Container>
				<Box>
					<Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
						<Box className={styles.titleLeft}>
							<Box className={styles.titleSep}></Box>
						</Box>
						<Box sx={{ position: 'relative' }}>
							<Typography variant="h1" component="h2" className={styles.title}>
								最新のお知らせ
							</Typography>
						</Box>
						<Box className={styles.titleRight}>
							<Box className={styles.titleSep}></Box>
						</Box>
					</Box>
					<Box sx={{ marginTop: '30px' }}>
						<Grid container spacing={2}>
							{
								announcements.map(announcement => <Announcement
									key={announcement.id}
									announcement={announcement}
								></Announcement>)
							}
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Announcements;