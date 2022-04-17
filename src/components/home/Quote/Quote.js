import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Quote.module.css';

const Quote = () => {
	return (
		<Box className={styles.bg}>
			<Container>
				<Box sx={{ minHeight: '45vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Typography variant="h1" component="h2" className={styles.content}>
						我々のミッションは常に最先端の技術や情報を独自のネットワークから提供します。
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Quote;