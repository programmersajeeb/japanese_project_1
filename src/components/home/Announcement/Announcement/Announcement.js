import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/Announcements.module.css';
import { Link } from 'react-router-dom';

const Announcement = (props) => {
	const { image, title, description, time, _id } = props.announcement;
	return (
		<Grid item="item" xs={12} sm={6} md={4} xl={4}>
			<Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
				<Box className={styles.img}>
					<img src={image} alt="" />
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={styles.overlay}>
						<Link to={`/announcementdetails/${_id}`}>
							<Box sx={{ width: '90%', margin: '0 auto' }}>
								<Box>
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Link className={styles.overlayIcon} to={`/announcementdetails/${_id}`}><i className="fas fa-link"></i></Link>
										<Link className={styles.overlayIcon} to={`/announcementdetails/${_id}`}><i className="fas fa-search"></i></Link>
									</Box>
									<Typography variant="h2" component="h2" className={styles.overlayTitle}>
										{title}
									</Typography>
									<Link to={`/announcementdetails/${_id}`} style={{ display: 'block', textAlign: 'center', color: '#212934', fontSize: '13px' }}>
										news
									</Link>
								</Box>
							</Box>
						</Link>
					</Box>
				</Box>
				<Box sx={{ padding: '30px 20px' }}>
					<Box>
						<Link to={`/announcementdetails/${_id}`}>
							<Typography variant="h1" component="h2" className={styles.cardTitle}>
								{title}
							</Typography>
						</Link>
						<Typography variant="body1" gutterBottom={true} className={styles.date}>
							{time} &nbsp;&nbsp;|&nbsp;&nbsp;
							<span>
								<Link to={`/announcementdetails/${_id}`} className={styles.notice}>Notice</Link>
							</span>
						</Typography>
					</Box>
					<Box className={styles.shep}></Box>
					<Box>
						<Typography
							variant="body1"
							gutterBottom={true}
							className={styles.description}>
							{description}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}>
						<Box>
							<Link to={`/announcementdetails/${_id}`} className={styles.link}>
								Read More &gt;
							</Link>
						</Box>
						<Box>
							<span className={styles.icon}>
								<i className="fas fa-comments"></i> &nbsp;
								0</span>
						</Box>
					</Box>
				</Box>
			</Box >
		</Grid >
	);
};

export default Announcement;