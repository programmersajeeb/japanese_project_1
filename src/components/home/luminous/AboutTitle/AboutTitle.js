import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/AboutTitle.module.css';

const AboutTitle = () => {
  return (
    <Box className={styles.aboutArea}>
      <Container>
        <Box>
          <Typography variant="h2" component="h2" className={styles.title}>
            Luminous ⇒ About introduction destinations and dispatch destinations of Japanese companies
          </Typography>
          <Box className={styles.border}></Box>
          <Typography variant="body1" gutterBottom className={styles.details}>
            We have our own route to keep you informed of the referrals and dispatches that suit you. <br /> <br /> We are updating and making better matching.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutTitle;