import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/golobal.css';
import SweetAlert from './../../Shared/Sweetalert/Sweetalert';

const Reports = () => {
	const [reports, setReports] = useState([]);
	useEffect(() => {
		fetch('https://secure-crag-50348.herokuapp.com/reports')
			.then(res => res.json())
			.then(data => setReports(data))
	}, []);

	const handleDelete = id => {
		const url = `https://secure-crag-50348.herokuapp.com/reports/${id}`;
		fetch(url, { method: 'DELETE' })
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.deletedCount) {
					SweetAlert("Deleted successfully");
					const remaining = reports.filter(report => report._id !== id);
					setReports(remaining);
				};
			});
	};
	return (
		<Box sx={{ width: '100%', height: '70vh', overflow: 'auto' }}>
			<Container>
				<Box>
					<Grid container spacing={4}>
						{
							reports.map(
								report =>
									<Grid key={report._id} item xs={12} md={6} xl={6} lg={6}>
										<Box sx={{ padding: '10px' }}>
											<Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
												<Box><span>Time:</span>&nbsp;{report.time}</Box>
												<Box><Button onClick={() => handleDelete(report._id)} size="large"><i class="fas fa-trash" style={{ color: 'red' }}></i></Button></Box>
											</Box>
											<Box><Typography variant="body1" gutterBottom> <span>Name:</span>&nbsp;{report.firstName}&nbsp;{report.lastName} </Typography></Box>
											<Box><Typography variant="body1" gutterBottom> <span>Number:</span>&nbsp;{report.number} </Typography></Box>
											<Box><Typography variant="body1" gutterBottom> <span>Email:</span>&nbsp;{report.email} </Typography></Box>
											<Box><Typography variant="body1" gutterBottom> <span>Subject:</span>&nbsp;{report.subject} </Typography></Box>
											<Box><Typography variant="body1" gutterBottom> <span>Report:</span>&nbsp;{report.message} </Typography></Box>
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