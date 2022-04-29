import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import '../../../../assets/css/golobal.css';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
  return (
    <Box sx={{marginBottom:'50px'}}>
      <Container>
        <Box>
          <Grid container spacing={2}>
            {
              services.map(service => <Service
              key={service.id}
              service={service}
              />)
            }
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;