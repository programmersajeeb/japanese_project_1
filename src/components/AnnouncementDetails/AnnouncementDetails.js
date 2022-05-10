import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import styles from '../../assets/css/AnnouncementDetails.module.css';
import '../../assets/css/golobal.css';

const AnnouncementDetails = () => {
	const { announcementdetailsId } = useParams();
	const [announcements, setAnnouncements] = useState([]);
	const { title, description } = announcements;
	useEffect(() => {
		fetch(`http://localhost:8080/announcements/${announcementdetailsId}`)
			.then(res => res.json())
			.then(data => setAnnouncements(data))
	}, [announcementdetailsId]);
	return (
		<Box>
			<Navigation />
			<Box sx={{ backgroundImage: `url(${announcements?.image?.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
				<Box sx={{width:'100%', height:'100%', backgroundColor:'#64b78d7a'}}>
				<Container sx={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Typography variant="h2" component="h2" className={styles.title}> {title} </Typography>
				</Container>
				</Box>
			</Box>
			<Box sx={{ padding: '50px 0' }}>
				<Container>
					<Box>
						<Box>
							<Typography variant="h2" component="h2" className={styles.subTitle}> {title} </Typography>
						</Box>
						<Box sx={{ marginTop: '25px' }}>
							<Typography variant="body1" gutterBottom={true} className={styles.description}>
								{description}
							</Typography>
						</Box>
					</Box>
				</Container>
			</Box>
			<Footer />
		</Box>
	);
};

export default AnnouncementDetails;