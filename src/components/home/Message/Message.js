import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import images from '../../../assets/images/ceo.png';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Message.module.css';

const Message = () => {
	return (
		<Box sx={{ padding: '50px 0' }}>
			<Container>
				<Box className={styles.grid}>
					<Box className={styles.item1}>
						<Box className={styles.img}>
							<img src={images} alt="COE" />
						</Box>
					</Box>
					<Box className={styles.item2}>
						<Typography variant="h2" component="h2" className={styles.title}>
							代表者メッセージ
						</Typography>
						<Box className={styles.allMessages}>
							<Typography variant="body1" gutterBottom={true} className={styles.singleMessage}>
								私たちは「誰にも負けない努力を惜しまない！」をモットーに日々努力し研究してます。
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.singleMessage}>
								私の尊敬する日本の経営者の言葉でもあります。
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.singleMessage}>
								この言葉で最善を尽くします
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.singleMessage}>
								私は日本にあこがれバングラデシュから来ました。２０１５年に日本国籍を取得しました。
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.singleMessage}>
								果たし当社を立ち上げました。
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.singleMessage}>
								そこには外国人であったからこそわかる日本で働く素晴らしさや喜びを有能な外国人に
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.singleMessage}>
								伝えられるのです。そして、日本でのビザや就業において自ら経験したことが役立てられると信じてます。
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.singleMessage}>
								株式会社　エムアイジャパン　代表取締役　イスラム　モニルル
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Message;