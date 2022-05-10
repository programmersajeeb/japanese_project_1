import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Quote.module.css';

const Quote = () => {
	return (
		<Box sx={{marginTop:'50px'}}>
			<Container>
				<Box>
				<Typography variant="h2" component="h2" className={styles.title}>令和３年５月１日に有料職業紹介事業の許認可取得</Typography>
				<Typography variant="h2" component="h2" className={styles.subTitle}>株式会社　エムアイジャパン</Typography>
				<Typography variant="h2" component="h2" className={styles.license}>有料職業紹介事業許認可番号：０９－ユ－３００２７８</Typography>
				<Typography variant="body1" gutterBottom={true} className={styles.details}>※許認可取得後にご契約いただいておりますステークスホルダー様、大変お待たせいたしました。当社免許取得できまし</Typography>
				<Typography variant="body1" gutterBottom={true} className={styles.details}>たので随時、優秀な人材のご紹介をさせていただければと思います。 また、新規お取引及びご契約ご希望音お客様はお気</Typography>
				<Typography variant="body1" gutterBottom={true} className={styles.details}>軽にお問合せください。</Typography>
				<Box sx={{marginTop:'30px', display:'flex', justifyContent:'center'}}><Link to='/contact' className={styles.contactBtn}>お問い合わせ</Link></Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Quote;