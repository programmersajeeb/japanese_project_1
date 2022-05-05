import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Box sx={{ backgroundColor: '#5463FF' }}>
			<Container sx={{ padding: '50px 0' }}>
				<Grid container spacing={2} className={styles.footer}>
					<Grid xs={12} sm={6} md={4} xl={4}>
						<Box>
							<Typography variant="body1" gutterBottom={true} className={styles.title}>
								株式会社　エムアイジャパン　について
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.description}>
								エムアイジャパンの一つの柱 。独自のノウハウや世界中の情報ルートから今の日本の職場を元気にするお役立てができればと思ってます。
							</Typography>
							<Box>
								<ul>
									<li>* 日本人、外国人に特化した紹介事業 。</li>

								</ul>
							</Box>
							<Typography variant="body1" gutterBottom={true} className={styles.description}>
								当社は最先端の技術を持つITエンジニアを世界中から独自のルートでヘッドハントできる環境にあります。その中で日本の開発現場の魅力などを伝えつつ一人でも多くのIT人材を日本へ誘致し今の人材不足をお役立てできれば思ってます。
							</Typography>
							<Typography variant="body1" gutterBottom={true} className={styles.description}>
								また、この考えは多くの企業様にもご理解いただき急激にそのパートナーを増やしつつあります。
							</Typography>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4} xl={4}>
						<Box sx={{ padding: '0 20px' }}>
							<Typography variant="body1" gutterBottom={true} className={styles.title}>
								QUICK LINK
							</Typography>
							<ul className={styles.menu}>
								<li><Link to='/home' className={styles.link}>&gt; ホーム</Link></li>
								<li><Link to='/mission' className={styles.link}>&gt; ミッション</Link></li>
								<li><Link to='/job' className={styles.link}>&gt; 仕事</Link></li>
								<li><Link to='/company' className={styles.link}>&gt; 会社概要</Link></li>
								<li><Link to='/contact' className={styles.link}>&gt; お問合せ</Link></li>
								<li><Link to='/privacy' className={styles.link}>&gt; プライバシーポリシー</Link></li>
							</ul>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={4} xl={4}>
						<Box>
							<Typography variant="body1" gutterBottom={true} className={styles.title}>
								お問い合わせ
							</Typography>
							<ul>

								<li><span>住所:</span> 〒326-0844 <br />
									栃木県足利市鹿島町１０９２番地15 <br />
									エクセレントヴィレッジ２０１号</li>

								<li><span>Tel </span><a className={styles.link} href="tel:０５０３７０２４５８４">０５０－３７０２－４５８４</a></li>

								<li><span>Fax </span><a className={styles.link} href="fax:0284829295">0284-82-9295</a></li>

								<li><span>Email </span>	<a className={styles.link} href="mailto:mijapan4@gmail.com">
									mijapan4@gmail.com
								</a></li>
								<li><span>Web:</span> <Link to='/' className={styles.link}>https://mi-japan.net/ </Link></li>
							</ul>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Box sx={{ backgroundColor: '#1D242D', padding: '30px 0' }}>
				<Container>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
						<Box>
							<Typography variant="body1" gutterBottom={true} sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
								Copyright {new Date().getFullYear()} | MI-JAPAN | All Rights Reserved
							</Typography>
						</Box>
						<Box>
							<Box className={styles.footerSocial}>
								<a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
								<span className={styles.tooltiptext}>Facebook</span>
							</Box>
							<Box className={styles.footerSocial}>
								<a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
								<span className={styles.tooltiptext}>Twitter</span>
							</Box>
							<Box className={styles.footerSocial}>
								<a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
								<span className={styles.tooltiptext}>Instagram</span>
							</Box>
							<Box className={styles.footerSocial}>
								<a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
								<span className={styles.tooltiptext}>Pinterest</span>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;