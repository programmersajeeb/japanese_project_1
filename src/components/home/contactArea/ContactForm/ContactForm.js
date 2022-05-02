import React, { useState } from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/ContactArea.module.css';
import { Box, Grid, Typography, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactForm = () => {
	const [message, setMessage] = useState("");
	const { register, formState: { errors }, handleSubmit, reset } = useForm();
	const onSubmit = data => {
		console.log(data);
		axios
			.post('http://localhost:8080/reports', data)
			.then(res => {
				if (res.data.insertedId) {
					alert('Report Successfully');
					reset();
				}
			})
	}
	const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth(); 
    const day = date.getDate(); 
    const hours = date.getHours(); 
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const addZero = (num) => `${num}`.padStart(2, '0');
    
    const formatted =
      year +
      '-' +
      addZero(month + 1) +
      '-' +
      addZero(day) +
      ' ' +
      addZero(hours) +
      ':' +
      addZero(minutes) +
			':' +
			addZero(seconds);

      console.log(formatted);
			
			
	return (
		<Box sx={{ backgroundColor: "#f2f2f2" }}>
			<Container sx={{ p: 10, my: 5 }}>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={12} md={8} xl={8}>
						<Box>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Box>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={12} md={6} xl={6}>
											<Box>
												<Box><label htmlFor="name">First Name *</label></Box>
												<input id='name' {...register("firstName", { required: true })} />
												{errors.firstName?.type === 'required' && "First name is required"}
											</Box>
										</Grid>
										<Grid item xs={12} sm={12} md={6} xl={6}>
											<Box>
												<Box><label htmlFor="surname">Surname *</label></Box>
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
												<Box><label htmlFor="email">Email Address *</label></Box>
												<input type="email" id='email' {...register("email", { required: true })} />
											</Box>
										</Grid>
										<Grid item xs={12} sm={12} md={6} xl={6}>
											<Box>
												<Box><label htmlFor="number">Telephone Number</label></Box>
												<input type="number" id='number' {...register("number", { required: true })} />
											</Box>
										</Grid>
									</Grid>
								</Box>
								<Box>
									<Box>
										<Box><label htmlFor="subject">Subject</label></Box>
										<input type="text" id='subject' {...register("subject", { required: true })} />
									</Box>
									<Box>
									<input style={{display:'none'}} type="text" value={formatted} {...register("time")} />
									</Box>
									<Box>
									<input style={{display:'none'}} type="text" value={new Date()} {...register("date")} />
									</Box>
									<Box>
										<label htmlFor="message">Message *</label>
										<textarea id='message' {...register("report", { required: true })} />
									</Box>
								</Box>

								<input type="submit" value="Send" />
							</form>
						</Box>
					</Grid>
					{/* <Grid item xs={12} sm={12} md={4} xl={4}>
					<Box sx={{ padding: '30px', borderRadius: '12px', boxShadow: "0px 10px 51px 3px rgb(0 0 0 / 15%)", border: '1px solid #ededed' }}>
						<Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
							<Box className={styles.titleLeft}>
								<Box className={styles.titleSep}></Box>
							</Box>
							<Box sx={{ marginTop: '10px' }}>
								<Typography variant="body1" gutterBottom={true} className={styles.pra}>
									お問合せは入力ホームからお願いいたします。
								</Typography>
								<Typography variant="body1" gutterBottom={true} className={styles.pra}>
									※尚、ご返信に関しては３，４日かかる場合がございますがご了承ください
								</Typography>
							</Box>
							<Box>
								<ul className={styles.contactUl}>
									<li><span>メールアドレス:</span>	&nbsp;<a className={styles.link} href="mailto:mijapan4@gmail.com">mijapan4@gmail.com</a></li>
									<li><span>ウェブ:</span>	&nbsp;<Link to='/' className={styles.link}>https://mi-japan.net/ </Link></li>
								</ul>
							</Box>
						</Box>
						<Box sx={{ marginTop: '10px' }}>
							<Typography variant="body1" gutterBottom={true} className={styles.pra}>
								For inquiries, please use the input home.
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.pra}>
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
				</Grid> */}
				</Grid>
			</Container>
		</Box>
	);
};

export default ContactForm;