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
						エムアイジャパン ⇒ 日本企業の紹介先及び派遣先について
					</Typography>
					<Box className={styles.border}></Box>
					<Typography variant="body1" gutterBottom className={styles.details}>
						エムアイジャパンの一つの柱 。独自のノウハウや世界中の情報ルートから今の日本の職場
						を元気にするお役立てができればと思ってます。
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default AboutTitle;