import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/ContactArea.module.css';
import ContactForm from '../ContactForm/ContactForm';

const ContactArea = () => {
	return (
		<>
			<Container>
				<Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
					<Box className={styles.titleLeft}>
						<Box className={styles.titleSep}></Box>
					</Box>
					<Box sx={{ position: 'relative' }}>
						<Typography variant="h1" component="h2" className={styles.title}>
							お問合せ
						</Typography>
					</Box>
					<Box className={styles.titleRight}>
						<Box className={styles.titleSep}></Box>
					</Box>
				</Box>
				<Box>
					<Typography variant="body1" gutterBottom={true} className={styles.pra}>
						お問合せは入力ホームからお願いいたします。
					</Typography>
					<Typography variant="body1" gutterBottom={true} className={styles.pra}>
						※尚、ご返信に関しては３，４日かかる場合がございますがご了承ください。
					</Typography>
					<Typography variant="body1" gutterBottom={true} className={styles.pra}>
						下記、メールフォームに従ってお問合せ内容を入力し送信ボタンを押してください。
					</Typography>
					<Typography variant="body1" gutterBottom={true} className={styles.pra}>
						紹介及び派遣、ビザの相談、また、企業様は人材についてのご相談、派遣・紹介業者及び代理店様についてもそれぞれこちらよりご連絡いただければと思います。
					</Typography>
				</Box>

			</Container>
			<ContactForm />
		</>
	);
};

export default ContactArea;