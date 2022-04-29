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
			.post('', data)
			.then(res => {
				if (res.data.insertedId) {
					reset();
				}
			})
	}
	return (
		<Box sx={{ margin: '50px 0' }}>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={12} md={8} xl={8}>
					<Box>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} md={6} xl={6}>
										<Box>
											<Box><label for="name">氏名 *</label></Box>
											<input id='name' {...register("firstName", { required: true })} />
											{errors.firstName?.type === 'required' && "First name is required"}
										</Box>
									</Grid>
									<Grid item xs={12} sm={12} md={6} xl={6}>
										<Box>
											<Box><label for="surname">姓 *</label></Box>
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
											<Box><label for="email">メールアドレス *</label></Box>
											<input type="email" id='email' {...register("email", { required: true })} />
										</Box>
									</Grid>
									<Grid item xs={12} sm={12} md={6} xl={6}>
										<Box>
											<Box><label for="number">電話番号</label></Box>
											<input type="number" id='number' {...register("number", { required: true })} />
										</Box>
									</Grid>
								</Grid>
							</Box>
							<Box>
								<Box>
									<Box><label for="subject">主題</label></Box>
									<input type="text" id='subject' {...register("subject", { required: true })} />
								</Box>

								<Box>
									<label for="message">メッセージ *</label>
									<textarea id='message' />
								</Box>
							</Box>

							<input type="submit" value="Send" />
						</form>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={4} xl={4}>
					<Box sx={{ padding: '30px', borderRadius: '12px', boxShadow: "0px 10px 51px 3px rgb(0 0 0 / 15%)", border: '1px solid #ededed' }}>
						<Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
							<Box className={styles.titleLeft}>
								<Box className={styles.titleSep}></Box>
							</Box>
							<Box sx={{ position: 'relative' }}>
								<Typography variant="h1" component="h2" sx={{ fontSize: '32px !important' }} className={styles.title}>
									お問合せ
								</Typography>
							</Box>
							<Box className={styles.titleRight}>
								<Box className={styles.titleSep}></Box>
							</Box>
						</Box>
						<Box sx={{ marginTop: '10px' }}>
							<Typography variant="body1" gutterBottom className={styles.pra}>
								お問合せは入力ホームからお願いいたします。
							</Typography>
							<Typography variant="body1" gutterBottom className={styles.pra}>
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
				</Grid>
			</Grid>
		</Box>
	);
};

export default ContactForm;