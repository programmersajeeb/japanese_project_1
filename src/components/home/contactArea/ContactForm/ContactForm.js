import React from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/ContactArea.module.css';
import { Box, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios
        .post('http://localhost:5000/reports', data)
        .then(res => {
            if (res.data.insertedId) {
                reset();
            }
        })
}
  return (
    <Box sx={{margin:'50px 0'}}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={8} xl={8}>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} xl={6}>
            <Box>
            <Box><label for="name">First Name *</label></Box>
            <input id='name' {...register("firstName", { required: true })} />
            {errors.firstName?.type === 'required' && "First name is required"}
            </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6}>
            <Box>
            <Box><label for="surname">Surname *</label></Box>
            <input id='surname' {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}
            </Box>
            </Grid>
            </Grid>
            </Box>
            <Box>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} xl={6}>
            <Box>
            <Box><label for="email">Email Address *</label></Box>
            <input type="email" id='email' {...register("email", { required: true })} />
            </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6}>
            <Box>
            <Box><label for="number">Telephone Number</label></Box>
            <input type="number" id='number' {...register("number", { required: true })} />
            </Box>
            </Grid>
            </Grid>
            </Box>
            <Box>
            <Box>
            <Box><label for="subject">Subject</label></Box>
            <input type="text" id='subject' {...register("subject", { required: true })} />
            </Box>
            
            <Box>
            <label for="message">Message *</label>
            <textarea id='message' />
            </Box>
            </Box>
            
            <input type="submit" value="Send" />
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Box sx={{padding:'30px', borderRadius:'12px', boxShadow: "0px 10px 51px 3px rgb(0 0 0 / 15%)", border:'1px solid #ededed'}}>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
						<Box className={styles.titleLeft}>
							<Box className={styles.titleSep}></Box>
						</Box>
						<Box sx={{ position: 'relative' }}>
							<Typography variant="h1" component="h2" sx={{fontSize:'32px !important'}} className={styles.title}>
								Inquiries
							</Typography>
						</Box>
						<Box className={styles.titleRight}>
							<Box className={styles.titleSep}></Box>
						</Box>
					</Box>
          <Box sx={{marginTop:'10px'}}>
            <Typography variant="body1" gutterBottom className={styles.pra}>
            For inquiries, please use the input home.
            </Typography>
            <Typography variant="body1" gutterBottom className={styles.pra}>
            * Please note that it may take 3 or 4 days to reply.
            </Typography>
          </Box>
          <Box>
            <ul className={styles.contactUl}>
              <li><span>Email address:</span>	&nbsp;<a className={styles.link} href="mailto:info@luminous-jp.net">info@luminous-jp.net</a></li>
              <li><span>Web:</span>	&nbsp;<Link to='/' className={styles.link}>http://luminous-jp.net/</Link></li>
              <li>careers@luminous-jp.net</li>
            </ul>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;