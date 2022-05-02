import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Announcements.module.css';
import { useEffect, useState } from 'react';

const ManageAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8080/announcements')
			.then(res => res.json())
			.then(data => setAnnouncements(data))
	}, []);
  const handleDelete = id => {
    const url = `http://localhost:8080/announcements/${id}`;
    fetch(url, {method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount) {
                alert('Deleted')
                const remaining = announcements.filter(announcement => announcement._id !== id);
                setAnnouncements(remaining);
            };

        });
};
  return (
    <Box>
      <Grid container spacing={2}>
							{
								announcements.map(announcement =>
                <Grid key={announcement._id} item="item" xs={12} sm={6} md={4} xl={4}>
			<Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
				<Box className={styles.img}>
					<img src={announcement.img} alt="" />
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={styles.overlay}>
						<Link to='/'>
							<Box sx={{ width: '90%', margin: '0 auto' }}>
								<Box>
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Link className={styles.overlayIcon} to='/'><i className="fas fa-link"></i></Link>
										<Link className={styles.overlayIcon} to='/'><i className="fas fa-search"></i></Link>
									</Box>
									<Typography variant="h2" component="h2" className={styles.overlayTitle}>
										{announcement.title}
									</Typography>
									<Link to='/' style={{ display: 'block', textAlign: 'center', color: '#212934', fontSize: '13px' }}>
										news
									</Link>
								</Box>
							</Box>
						</Link>
					</Box>
				</Box>
				<Box sx={{ padding: '30px 20px' }}>
					<Box>
						<Typography variant="h1" component="h2" className={styles.cardTitle}>
							{announcement.title}
						</Typography>
						<Typography variant="body1" gutterBottom={true} className={styles.date}>
							{announcement.time} &nbsp;&nbsp;|&nbsp;&nbsp;
							<span>
								<Link to='/' className={styles.notice}>Notice</Link>
							</span>
						</Typography>
					</Box>
					<Box className={styles.shep}></Box>
					<Box>
						<Typography
							variant="body1"
							gutterBottom={true}
							className={styles.description}>
							{announcement.description}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
              marginTop:'40px'
						}}>
              <Button className={styles.announcementBtn}  size="large">Update</Button>
              <Button className={styles.announcementBtn} onClick={() => handleDelete (announcement._id)} size="large">Delete</Button>
					</Box>
				</Box>
			</Box >
		</Grid >
                )
							}
						</Grid>
    </Box>
  );
};

export default ManageAnnouncement;