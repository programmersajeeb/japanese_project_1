import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import '../../../../assets/css/golobal.css';
import Service from '../Service/Service';
import Service2 from '../Service/Service2';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('https://secure-crag-50348.herokuapp.com/products')
			.then(res => res.json())
			.then(data => setServices(data))
	}, []);
	return (
		<Box sx={{ marginBottom: '50px' }}>
			<Container>
				<Box>
					<Grid container spacing={2}>
						{
							services.length === 1 ?
								services.map(service => <Service2
									key={service.id}
									service={service}

								></Service2>)
								:
								services.map(service => <Service
									key={service._id}
									service={service}

								></Service>)
						}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default Services;