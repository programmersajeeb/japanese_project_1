import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Box sx={{ backgroundColor: '#212934' }}>
			<Container sx={{ padding: '50px 0' }}>
				<Box>
					<Grid container spacing={0}>
						<Grid xs={12} sm={6} md={4} xl={4}>
							<Box>
								<Typography variant="body1" gutterBottom className={styles.title}>
									株式会社　エムアイジャパン　について
								</Typography>
								<Typography variant="body1" gutterBottom className={styles.description}>
									エムアイジャパンの一つの柱 。独自のノウハウや世界中の情報ルートから今の日本の職場
									を元気にするお役立てができればと思ってます。
								</Typography>
								<Box>
									<ul>
										<li>1: ビザのコンサルティング</li>
										<li>2: 外国人に特化した紹介業</li>
										<li>3: 外国人に特化した派遣業</li>
									</ul>
								</Box>
								<Typography variant="body1" gutterBottom className={styles.description}>
									当社は最先端の技術を持つITエンジニアを世界中から独自のルートでヘッドハントできる
									環境にあります。その中で日本の開発現場の魅力などを伝えつつ一人でも多くのIT人材を
									日本へ誘致し今の人材不足をお役立てできれば思ってます。
								</Typography>
								<Typography variant="body1" gutterBottom className={styles.description}>
									また、この考えは多くの企業様にもご理解いただき急激にそのパートナーを増やしつつあ
									ります。
								</Typography>
							</Box>
						</Grid>
						<Grid xs={12} sm={6} md={4} xl={4}>
							<Box>
								<Box>
									<Typography variant="body1" gutterBottom className={styles.title}>
										QUICK LINK
									</Typography>
									<ul className={styles.menu}>
										<li><Link to='/' className={styles.link}>&gt; ホーム</Link></li>
										<li><Link to='/' className={styles.link}>&gt; ミッション</Link></li>
										<li><Link to='/' className={styles.link}>&gt; 仕事</Link></li>
										<li><Link to='/' className={styles.link}>&gt; 会社概要</Link></li>
										<li><Link to='/' className={styles.link}>&gt; お問合せ</Link></li>
										<li><Link to='/' className={styles.link}>&gt; プライバシーポリシー</Link></li>
									</ul>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} md={4} xl={4}>
							<Box>
								<Box>
									<Typography variant="body1" gutterBottom className={styles.title}>
										お問い合わせ
									</Typography>
									<ul>
										<li><span>住所:</span> 栃木県足利市鹿島町１０９２番地15
											エクセレントヴィレッジ２０１号</li>

										<li><span>Phone :</span><a href="tel:０５０３７０２４５８４">０５０－３７０２－４５８４</a></li>

										<li><span>Email  :</span>	<a href="mailto:mijapan4@gmail.com">
											mijapan4@gmail.com
										</a></li>
										<li><span>Web:</span> <Link to='/' className={styles.link}>https://mi-japan.net/ </Link></li>
									</ul>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
			<Box sx={{ backgroundColor: '#1D242D', padding: '30px 0' }}>
				<Container>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
						<Box>
							<Typography variant="body1" gutterBottom sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
								Copyright {new Date().getFullYear()} | MI-JAPAN | All Rights Reserved
							</Typography>
						</Box>
						<Box>
							<a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
							<a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
							<a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
							<a href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;