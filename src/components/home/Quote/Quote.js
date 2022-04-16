import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Quote.module.css';

const Quote = () => {
  return (
    <Box className={styles.bg}>
      <Container>
        <Box sx={{ minHeight:'45vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant="h1" component="h2" className={styles.content}>
            Our mission is to always provide cutting-edge technology and information from our own network.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Quote;