import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/ContactArea.module.css';
import ContactForm from '../ContactForm/ContactForm';

const ContactArea = () => {
  return (
    <Box id="inquirie">
      <Container>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
						<Box className={styles.titleLeft}>
							<Box className={styles.titleSep}></Box>
						</Box>
						<Box sx={{ position: 'relative' }}>
							<Typography variant="h1" component="h2" className={styles.title}>
								Inquiries
							</Typography>
						</Box>
						<Box className={styles.titleRight}>
							<Box className={styles.titleSep}></Box>
						</Box>
					</Box>
          <Box>
          <Typography variant="body1" gutterBottom className={styles.pra}>
            For inquiries, please use the input home.
          </Typography>
          <Typography variant="body1" gutterBottom className={styles.pra}>
            * Please note that it may take 3 or 4 days to reply.
          </Typography>
          <Typography variant="body1" gutterBottom className={styles.pra}>
            Please enter your inquiry according to the email form below and press the send button.
          </Typography>
          <Typography variant="body1" gutterBottom className={styles.pra}>
            We would appreciate it if you could contact us for referrals and dispatches, visa consultations, human resources consultations, dispatch / referral agencies and agents.
          </Typography>
          </Box>
          <ContactForm />
      </Container>
    </Box>
  );
};

export default ContactArea;