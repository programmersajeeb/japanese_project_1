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
	const { img, title, description } = announcements;
	useEffect(() => {
		fetch(`https://secure-crag-50348.herokuapp.com/announcements/${announcementdetailsId}`)
			.then(res => res.json())
			.then(data => setAnnouncements(data))
	}, []);
	return (
		<Box>
			<Navigation />
			<Box sx={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
				<Container sx={{ width: '100%', height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Typography variant="h2" component="h2" className={styles.title}> {title} </Typography>
				</Container>
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