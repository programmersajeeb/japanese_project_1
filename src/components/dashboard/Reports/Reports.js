import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/golobal.css';
import SweetAlert from './../../Shared/Sweetalert/Sweetalert';
import styles from '../../../assets/css/Reports.module.css';

const Reports = () => {
	const [reports, setReports] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8080/reports')
			.then(res => res.json())
			.then(data => setReports(data))
	}, []);

	const handleDelete = id => {
		const url = `http://localhost:8080/reports/${id}`;
		fetch(url, { method: 'DELETE' })
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.deletedCount) {
					SweetAlert("正常に削除されました");
					const remaining = reports.filter(report => report._id !== id);
					setReports(remaining);
				};
			});
	};
	return (
		<Box>
			<Container>
				<Box>
				<Box sx={{display:'flex', justifyContent:'center'}} marginBottom='100px'>
				<Typography variant="h2" component="h2" textAlign='center' fontSize='40px' fontWeight='600' textTransform='uppercase' padding='20px 0' position='fixed'>お客様の声</Typography>
				</Box>
					<Grid container spacing={4} >
						{
							reports.map(
								report =>
									<Grid key={report._id} item xs={12} md={6} xl={6} lg={6}>
										<Box sx={{backgroundColor:'#FFFFFF', padding: '20px', borderRadius:'10px' }}>
											<Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
												<Box><span style={{fontWeight:'700'}}>Time:</span>&nbsp;{report.time}</Box>
												<Box><Button onClick={() => handleDelete(report._id)} size="large"><i class="fas fa-trash" style={{ color: '#ea4134' }}></i></Button></Box>
											</Box>
											<Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Name:</span>&nbsp;{report.firstName}&nbsp;{report.surname} </Typography></Box>
											<Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Number:</span>&nbsp;<a className={styles.link} href={`tel: ${report.number}`}>{report.number}</a></Typography></Box>
											<Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Email:</span>&nbsp;<a className={styles.link} href={`mailto: ${report.email}`}>{report.email}</a></Typography></Box>
											<Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Subject:</span>&nbsp;{report.subject} </Typography></Box>
											<Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Report:</span>&nbsp;{report.message} </Typography></Box>
										</Box>
									</Grid>
							)
						}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default Reports;